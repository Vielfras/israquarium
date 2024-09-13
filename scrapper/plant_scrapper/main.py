#!/usr/bin/env python3

import requests
from bs4 import BeautifulSoup
import json
import string
import logging
from tqdm import tqdm
import uuid  # For generating unique IDs

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

# Base URL for the plant data
base_url = "http://www.israquarium.co.il/Plants/"

def get_plant_names_from_page(url, session):
    """
    Fetches and parses plant names and URLs from the given index page URL.

    Args:
        url (str): The URL of the index page to scrape.
        session (requests.Session): The session object for HTTP requests.

    Returns:
        tuple: A tuple containing a list of plant data dictionaries and a success flag.
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

        # Find all tables with specific attributes
        tables = soup.find_all('table', {'align': 'center', 'width': '650'})

        plant_data = []

        for table in tables:
            # Skip the header table
            if 'שם מדעי' in table.get_text() and 'שם נפוץ' in table.get_text():
                continue

            tr = table.find('tr')
            if not tr:
                continue

            tds = tr.find_all('td')
            if len(tds) >= 2:
                # Extract scientific name and URL
                sci_name_td = tds[0]
                scientific_name_div = sci_name_td.find('div', align='left')
                scientific_name_link = scientific_name_div.find('a') if scientific_name_div else sci_name_td.find('a')
                scientific_name = scientific_name_link.get_text(strip=True) if scientific_name_link else sci_name_td.get_text(strip=True)
                plant_url = base_url + scientific_name_link['href'].replace('../Plants/', '').replace(' ', '%20') if scientific_name_link else None

                # Extract common name
                common_name_td = tds[1]
                common_name_div = common_name_td.find('div', align='right')
                common_name_link = common_name_div.find('a') if common_name_div else common_name_td.find('a')
                common_name = common_name_link.get_text(strip=True) if common_name_link else common_name_td.get_text(strip=True)

                # Clean up names
                scientific_name = scientific_name.strip('\xa0').strip()
                common_name = common_name.strip('\xa0').strip()

                plant_data.append({
                    'scientific_name': scientific_name,
                    'common_name': common_name,
                    'url': plant_url
                })

        return plant_data, True

    except Exception as e:
        logging.error(f"Error parsing the page at {url}: {e}")
        return [], False

def get_plant_details(plant, session):
    """
    Fetches and parses detailed plant data from the individual plant page.

    Args:
        plant (dict): A dictionary containing plant's basic info and URL.
        session (requests.Session): The session object for HTTP requests.

    Returns:
        dict: A dictionary containing detailed plant data.
    """
    url = plant.get('url')
    if not url:
        logging.warning(f"No URL found for plant: {plant.get('scientific_name')}")
        return None

    try:
        response = session.get(url)
        response.raise_for_status()
    except requests.exceptions.HTTPError as e:
        if response.status_code == 404:
            logging.warning(f"Plant page not found: {url}")
        else:
            logging.error(f"HTTP error for {url}: {e}")
        return None
    except Exception as e:
        logging.error(f"Failed to retrieve the plant page at {url}: {e}")
        return None

    try:
        soup = BeautifulSoup(response.content, 'html.parser')

        # Initialize the plant data dictionary
        plant_data = {
            '_id': str(uuid.uuid4()),
            'name': plant.get('scientific_name'),
            'images': [],
            'latinName': '',
            'firstDescription': '',
            'sources': '',
            'height': '',
            'width': '',
            'temperature': '',
            'ph': '',
            'hardness': 'N/A',
            'light': '',
            'growthRate': '',
            'placement': '',
            'languages': {
                'he': {
                    'family': '',
                    'synonyms': '',
                    'etymology': '',
                    'distribution': '',
                    'notes': '',
                    'propagation': ''
                }
            }
        }

        # Extract the main table containing plant data
        tables = soup.find_all('table', {'width': '346', 'align': 'center'})
        if tables:
            main_table = tables[0]
            td = main_table.find('td', class_='StNameFish', align='center')
            if td:
                # Extract latinName and firstDescription
                text_lines = td.get_text(separator='\n').split('\n')
                plant_data['latinName'] = text_lines[0].strip()
                plant_data['firstDescription'] = text_lines[1].strip()

                # Extract image info
                img_tag = td.find('img')
                if img_tag:
                    img_src = img_tag['src'].replace('..', base_url).replace(' ', '%20')
                    img_alt = img_tag.get('alt', '')
                    plant_data['images'].append({
                        'src': img_src,
                        'alt': img_alt,
                        'creatorName': '',
                        'originalSource': ''
                    })

        # Extract the detailed data table
        detail_table = soup.find('table', class_='StTable')
        if detail_table:
            rows = detail_table.find_all('tr')
            for row in rows:
                tds = row.find_all('td')
                if len(tds) >= 2:
                    header = tds[-1].get_text(strip=True)
                    content = tds[0].get_text(separator='\n', strip=True)

                    # Handle specific headers
                    if header == 'משפחה':
                        plant_data['languages']['he']['family'] = content
                    elif header == 'שמות נוספים':
                        plant_data['languages']['he']['synonyms'] = content.replace('\n', ', ')
                    elif header == 'אטימולוגיה':
                        plant_data['languages']['he']['etymology'] = content.replace('\n', ' ')
                    elif header == 'הערות':
                        plant_data['languages']['he']['notes'] = content.replace('\n', ' ')
                    elif header == 'צורת ריבוי ושתילה':
                        plant_data['languages']['he']['propagation'] = content.replace('\n', ' ')
                    else:
                        # Extract general data from the table
                        images = row.find_all('img')
                        if images:
                            for img in images:
                                img_src = img['src']
                                if 'higth.gif' in img_src:
                                    plant_data['height'] = tds[0].get_text(strip=True)
                                elif 'width.gif' in img_src:
                                    plant_data['width'] = tds[2].get_text(strip=True)
                                elif 'planet' in img_src:
                                    plant_data['languages']['he']['distribution'] = tds[4].get_text(strip=True)
                                elif 'temperatura.gif' in img_src:
                                    plant_data['temperature'] = tds[0].get_text(strip=True)
                                elif 'ph.gif' in img_src:
                                    plant_data['ph'] = tds[2].get_text(strip=True)
                                elif 'dH.gif' in img_src:
                                    hardness = tds[4].get_text(strip=True)
                                    plant_data['hardness'] = hardness if hardness else 'N/A'
                                elif 'Sun11.gif' in img_src:
                                    plant_data['light'] = tds[2].get_text(strip=True)
                                elif 'nutrient.gif' in img_src:
                                    plant_data['growthRate'] = tds[4].get_text(strip=True)
                                elif 'place.gif' in img_src:
                                    plant_data['placement'] = tds[0].get_text(strip=True)

        return plant_data

    except Exception as e:
        logging.error(f"Error parsing the plant page at {url}: {e}")
        return None

def main():
    session = requests.Session()
    all_plant_data = []

    # Generate index page URLs from A to Z
    index_pages = [f"{base_url}LIndex{letter}.html" for letter in string.ascii_uppercase]

    # Fetch plant names and URLs from index pages
    for page_url in tqdm(index_pages, desc="Processing index pages"):
        logging.info(f"Fetching page: {page_url}")
        plants, success = get_plant_names_from_page(page_url, session)
        if not success:
            continue
        if plants:
            all_plant_data.extend(plants)

    detailed_plant_data = []

    # Fetch detailed data for each plant
    for plant in tqdm(all_plant_data, desc="Processing individual plant pages"):
        logging.info(f"Fetching details for plant: {plant['scientific_name']}")
        plant_details = get_plant_details(plant, session)
        if plant_details:
            detailed_plant_data.append(plant_details)

    try:
        with open('plant_data.json', 'w', encoding='utf-8') as f:
            json.dump(detailed_plant_data, f, ensure_ascii=False, indent=4)
        logging.info("Plant data saved to plant_data.json")
    except IOError as e:
        logging.error(f"Failed to write to file: {e}")

if __name__ == '__main__':
    main()
