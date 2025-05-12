#!/usr/bin/env python3
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin
import json
import time

BASE_URL       = 'https://israquarium.co.il/Fish/Corydoras/'
INDEX_PREFIX   = 'CorydorasABC'
OUTPUT_JSON    = 'corydoras_data.json'
DELAY_SECONDS  = 0.1  # pause between requests

def scrape_index_pages():
    """ Crawl CorydorasABC1.html → CorydorasABC2.html → ...  
        Return a set of { href, name, thumb_src } for each species link. """
    species = {}
    next_page = f'{INDEX_PREFIX}1.html'
    
    while next_page:
        full_url = urljoin(BASE_URL, next_page)
        print(f'→ Loading index {next_page}')
        r = requests.get(full_url)
        r.raise_for_status()
        r.encoding = 'windows-1251'
        soup = BeautifulSoup(r.text, 'html.parser')
        
        # 1) grab every <a target="coridoras" href="Corydoras foo.html">
        for a in soup.select('a[target="coridoras"][href$=".html"]'):
            href = a['href'].strip()
            name = a.get_text(strip=True)
            # find its thumbnail (if present)
            img = a.find_next_sibling('img')
            thumb = img['src'] if img else ''
            species[href] = {
                'href': href,
                'name': name,
                'thumb': thumb,
            }
        
        # 2) look for the “…>>” link to the next block:
        next_link = soup.find('a', string=lambda t: t and t.strip().endswith('>>'))
        if next_link and next_link.get('href'):
            next_page = next_link['href'].split('#',1)[0]
            # avoid infinite loops
            if next_page in species:
                break
        else:
            next_page = None
        
        time.sleep(DELAY_SECONDS)
    
    return list(species.values())

def scrape_species_page(entry):
    """ Given a species entry with .href/.name/.thumb,  
        fetch its detail page and return a dict matching your JSON schema. """
    url = urljoin(BASE_URL, entry['href'])
    r = requests.get(url)
    r.raise_for_status()
    r.encoding = 'windows-1251'
    soup = BeautifulSoup(r.text, 'html.parser')

    # start with the top‐level fields
    data = {
        "name":         soup.select_one('table[width="400"] td.StNameFish').get_text(strip=True),
        "images":       [],
        "tribe":        "",                # no "tribe" in HTML, so leave blank
        "latinName":    "",
        "firstDescription": "",
        "sources":      "",
        "tankVolume":   "",
        "fishSize":     "",
        "maxTemp":      "",
        "minTemp":      "",
        "ph":           "",
        "dGH":          "",
        "languages": {
            "en": {},
            "he": {},
            "ru": {}
        }
    }

    # 1) grab the main image(s)
    img_tbl = soup.find('table', width="600", align="center")
    if img_tbl:
        a = img_tbl.select_one('td.StNameFish a[href]')
        img = a.find('img')
        creator = img_tbl.select_one('small a')
        data["images"].append({
            "src":            urljoin(BASE_URL, a['href']),
            "alt":            img.get("alt",""),
            "creatorName":    creator.get_text(strip=True) if creator else "",
            "originalSource": creator['href'] if creator and creator.has_attr('href') else ""
        })

    # 2) parse the info‐table
    mapping = {
        'מחלקה':       'subclass',
        'סדרה':        'order',
        'משפחה':       'family',
        'תת-משפחה':   'subfamily',
        'שם מדעי':     'latinName',
        'הכרות ראשונה':'firstDescription',
        'שמות נוספים': 'synonyms',
        'אטימולוגיה':  'etymology',
        'תנאיי מים נוספים':       'additionalRequirements',
        'עיצוב האקווריום':         'aquariumSetup',
        'מזוג בין בני מינו':       'intraspeciesCompatibility',
        'שותפים לאקווריום':        'interspeciesCompatibility',
        'תזונה':       'feeding',
        'זיהוי בן המינים':'sexualDimorphism',
        'רבייה':       'breeding',
        'מידע נוסף':   'additionalInformation',
        'קישורים נוספים':'links',
        'מקורות מידע': 'sources'
    }

    tbl = soup.find('table', class_='StTable2')
    for tr in tbl.find_all('tr'):
        tds = tr.find_all('td')
        if len(tds) != 2:
            continue

        value_cell = tds[0]
        label_cell = tds[1]

        # 2a) special‐case image labels (size/temp/ph/dGH/distribution)
        img = label_cell.find('img')
        if img:
            src = img['src']
            text = value_cell.get_text(strip=True)
            if 'cory-size.gif' in src:
                data['fishSize'] = text
            elif 'aqua-size.jpg' in src:
                data['tankVolume'] = text
            elif 'temperatura.gif' in src:
                # split  "18 - 27°C"
                mins, *rest = text.replace('°C','').split('-',1)
                data['minTemp'] = mins.strip()
                data['maxTemp'] = rest[0].strip() if rest else mins.strip()
            elif 'ph.gif' in src:
                data['ph'] = text
            elif 'dH.gif' in src:
                data['dGH'] = text
            elif 'planet 2.gif' in src:
                data['languages']['ru']['distribution'] = text
            continue

        # 2b) normal Hebrew‐label rows
        label = label_cell.get_text(strip=True)
        key = mapping.get(label)
        if key:
            data['languages']['ru'][key] = value_cell.get_text(separator='\n', strip=True)

    return data

def main():
    # 1) Walk the ABC index pages and collect all species links
    species_index = scrape_index_pages()
    print(f'→ Found {len(species_index)} unique Corydoras entries\n')
    
    # 2) Visit each and scrape details
    all_data = []
    for entry in species_index:
        try:
            all_data.append(scrape_species_page(entry))
        except Exception as e:
            print(f'⚠️  Failed scraping {entry["href"]}: {e}')
    
    # 3) Dump to JSON
    with open(OUTPUT_JSON, 'w', encoding='utf-8') as f:
        json.dump(all_data, f, ensure_ascii=False, indent=2)
    print(f'\n✓ Wrote {len(all_data)} records to {OUTPUT_JSON}')

if __name__ == '__main__':
    main()
