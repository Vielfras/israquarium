#!/usr/bin/env python3

import requests
from bs4 import BeautifulSoup
import json
import logging
from tqdm import tqdm
import uuid  # For generating unique IDs
import re

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

# Base URL for the fish data
base_url = "http://www.israquarium.co.il/Fish"

# Fish indices to scrape
fish_indices = [
    "Loricariidae",
    "Corydoras",
    "Apistogramma",
    "Barbus",
    "Rainbowfish",
    "Nannostomus",
    "Botia",
    "Betta",
    "Gasteropelecus",
    "Lamprologus",
    "Aulonocara",
    "Julidochromis",
    "Otocinclus",
    "Tropheus",
    "Dicrossus"
]

def get_fish_names_from_page(url, session):
    """
    Fetches and parses fish names and URLs from the given index page URL.

    Args:
        url (str): The URL of the index page to scrape.
        session (requests.Session): The session object for HTTP requests.

    Returns:
        tuple: A tuple containing a list of fish data dictionaries and a success flag.
    """
    try:
        response = session.get(url)
        response.raise_for_status()
    except requests.exceptions.HTTPError as e:
        if response.status_code == 404:
            logging.warning(f"Page not found: {url}")
        else:
            logging.error(f"HTTP error for {url}: {e}")
        return [], False
    except Exception as e:
        logging.error(f"Failed to retrieve the page at {url}: {e}")
        return [], False

    try:
        soup = BeautifulSoup(response.content, 'html.parser')

        # Find the table containing fish names
        table = soup.find('table', attrs={'style': re.compile("FONT: 12pt David")})
        if not table:
            logging.warning(f"No table found on page at {url}")
            return [], True  # Successfully fetched page, but no table

        fish_data_list = []
        rows = table.find_all('tr', align='left')
        for row in rows:
            # Find fish name in either 'a > b' or 'a'
            fish_name_tag = row.find('a')
            if fish_name_tag:
                bold_tag = fish_name_tag.find('b')
                if bold_tag:
                    fish_name = bold_tag.get_text(strip=True)
                else:
                    fish_name = fish_name_tag.get_text(strip=True)
                fish_url = fish_name_tag['href']
                # Construct full URL
                if not fish_url.startswith('http'):
                    fish_url = requests.compat.urljoin(url, fish_url)
                    fish_url = fish_url.replace(' ', '%20')
                fish_data_list.append({
                    'name': fish_name,
                    'url': fish_url
                })

        return fish_data_list, True
    except Exception as e:
        logging.error(f"Error parsing the page at {url}: {e}")
        return [], False

def extract_fish_names(fish_index, session):
    """
    Extracts fish names and URLs for a given fish index.

    Args:
        fish_index (str): The fish index to scrape.
        session (requests.Session): The session object for HTTP requests.

    Returns:
        list: A list of fish data dictionaries.
    """
    all_fish_data = []

    # The index pages may not be paginated, so adjust accordingly
    index_page_url = f"{base_url}/{fish_index}/{fish_index}ABC.html"
    logging.info(f"Fetching index page: {index_page_url}")
    fish_data_list, success = get_fish_names_from_page(index_page_url, session)
    if success and fish_data_list:
        all_fish_data.extend(fish_data_list)
    else:
        logging.warning(f"No fish data found for index: {fish_index}")

    return all_fish_data

def get_fish_details(fish, session):
    """
    Fetches and parses detailed fish data from the individual fish page.

    Args:
        fish (dict): A dictionary containing fish's basic info and URL.
        session (requests.Session): The session object for HTTP requests.

    Returns:
        dict: A dictionary containing detailed fish data.
    """
    url = fish.get('url')
    if not url:
        logging.warning(f"No URL found for fish: {fish.get('name')}")
        return None

    try:
        response = session.get(url)
        response.raise_for_status()
    except requests.exceptions.HTTPError as e:
        if response.status_code == 404:
            logging.warning(f"Fish page not found: {url}")
        else:
            logging.error(f"HTTP error for {url}: {e}")
        return None
    except Exception as e:
        logging.error(f"Failed to retrieve the fish page at {url}: {e}")
        return None

    try:
        soup = BeautifulSoup(response.content, 'html.parser')

        # Initialize the fish data dictionary
        fish_data = {
            '_id': str(uuid.uuid4()),
            'name': fish.get('name'),
            'images': [],
            'tribe': '',
            'latinName': '',
            'firstDescription': '',
            'sources': '',
            'tankVolume': '',
            'fishSize': '',
            'maxTemp': '',
            'minTemp': '',
            'ph': '',
            'dGH': '',
            'languages': {
                'en': {},
                'he': {},
                'ru': {}
            },
            'fishIndices': []
        }

        # Extract fish details
        # 1. Name and Images
        name_table = soup.find('table', {'width': '400', 'align': 'center'})
        if name_table:
            name_td = name_table.find('td', {'class': 'StNameFish', 'align': 'center'})
            if name_td:
                fish_data['latinName'] = name_td.get_text(strip=True)

        image_table = soup.find('table', {'width': '600', 'align': 'center'})
        if image_table:
            img_tag = image_table.find('img')
            if img_tag:
                img_src = img_tag.get('src', '')
                if img_src:
                    img_src = requests.compat.urljoin(url, img_src)
                    img_src = img_src.replace(' ', '%20')
                    fish_data['images'].append({
                        'src': img_src,
                        'alt': fish_data['latinName'] + ' 1',
                        'creatorName': '',
                        'originalSource': ''
                    })

        # 2. Detailed Data Table
        detail_table = soup.find('table', {'class': 'StTable2', 'border': '1', 'align': 'center'})
        if detail_table:
            rows = detail_table.find_all('tr')
            for row in rows:
                tds = row.find_all('td')
                if len(tds) >= 2:
                    header_td = tds[-1]
                    content_td = tds[0]
                    header = header_td.get_text(strip=True)
                    content = content_td.get_text(separator=' ', strip=True)
                    # Map the headers to the corresponding fields
                    if header == 'מחלקה':
                        fish_data['languages']['he']['subclass'] = content
                    elif header == 'סדרה':
                        fish_data['languages']['he']['order'] = content
                    elif header == 'משפחה':
                        fish_data['languages']['he']['family'] = content
                    elif header == 'תת-משפחה':
                        fish_data['languages']['he']['subfamily'] = content
                    elif header == 'שבט':
                        fish_data['tribe'] = content
                    elif header == 'שם מדעי':
                        fish_data['latinName'] = content
                    elif header == 'הכרות ראשונה':
                        fish_data['firstDescription'] = content
                    elif header == 'שמות נוספים':
                        fish_data['languages']['he']['synonyms'] = content.replace('\n', ', ')
                    elif header == 'אטימולוגיה':
                        fish_data['languages']['he']['etymology'] = content.replace('\n', ' ')
                    elif header == 'קבוצה':
                        fish_data['languages']['he']['group'] = content
                    elif header == 'קומפלקס':
                        fish_data['languages']['he']['complex'] = content
                    elif header == 'תנאיי מים נוספים':
                        fish_data['languages']['he']['additionalRequirements'] = content
                    elif header == 'עיצוב האקווריום':
                        fish_data['languages']['he']['aquariumSetup'] = content
                    elif header == 'מזוג בין בני מינו':
                        fish_data['languages']['he']['intraspeciesCompatibility'] = content
                    elif header == 'שותפים לאקווריום':
                        fish_data['languages']['he']['interspeciesCompatibility'] = content
                    elif header == 'תזונה':
                        fish_data['languages']['he']['feeding'] = content
                    elif header == 'זיהוי בן המינים':
                        fish_data['languages']['he']['sexualDimorphism'] = content
                    elif header == 'רבייה':
                        fish_data['languages']['he']['breeding'] = content
                    elif header == 'מידע נוסף':
                        fish_data['languages']['he']['additionalInformation'] = content
                    elif header == 'תנאיי מים':
                        # This field might contain multiple data points
                        pass
                    else:
                        # Handle other fields
                        pass

                    # Extract icons-based data (e.g., temperature, pH)
                    imgs = header_td.find_all('img')
                    if imgs:
                        for img in imgs:
                            img_src = img.get('src', '')
                            if 'temperatura.gif' in img_src:
                                temp_range = content_td.get_text(strip=True)
                                # Extract min and max temperature
                                temps = re.findall(r'\d+\.?\d*', temp_range)
                                if len(temps) >= 2:
                                    fish_data['minTemp'] = temps[0]
                                    fish_data['maxTemp'] = temps[1]
                                elif len(temps) == 1:
                                    fish_data['minTemp'] = temps[0]
                                    fish_data['maxTemp'] = temps[0]
                            elif 'ph.gif' in img_src:
                                ph_range = content_td.get_text(strip=True)
                                fish_data['ph'] = ph_range
                            elif 'dH.gif' in img_src:
                                dgh = content_td.get_text(strip=True)
                                fish_data['dGH'] = dgh
                            elif 'aqua-size.jpg' in img_src:
                                tank_volume = content_td.get_text(strip=True)
                                fish_data['tankVolume'] = tank_volume
                            elif 'ApistoSize.jpg' in img_src or 'FishSize.jpg' in img_src:
                                fish_size = content_td.get_text(strip=True)
                                fish_data['fishSize'] = fish_size
                            elif 'planet' in img_src:
                                distribution = content_td.get_text(strip=True)
                                fish_data['languages']['he']['distribution'] = distribution

        return fish_data

    except Exception as e:
        logging.error(f"Error parsing the fish page at {url}: {e}")
        return None

def main():
    session = requests.Session()
    all_fish_data = []

    # Iterate over each fish index
    for fish_index in tqdm(fish_indices, desc="Processing fish indices"):
        fish_list = extract_fish_names(fish_index, session)
        if fish_list:
            for fish in tqdm(fish_list, desc=f"Processing {fish_index}", leave=False):
                logging.info(f"Fetching details for fish: {fish['name']}")
                fish_details = get_fish_details(fish, session)
                if fish_details:
                    # Add fishIndices if needed
                    # fish_details['fishIndices'].append(fish_index_id)
                    all_fish_data.append(fish_details)
        else:
            logging.warning(f"No fish found for index: {fish_index}")

    try:
        with open('fish_data.json', 'w', encoding='utf-8') as f:
            json.dump(all_fish_data, f, ensure_ascii=False, indent=4)
        logging.info("Fish data saved to fish_data.json")
    except IOError as e:
        logging.error(f"Failed to write to file: {e}")

if __name__ == '__main__':
        main()
