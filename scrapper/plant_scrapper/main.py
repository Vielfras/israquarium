#!/usr/bin/env python3

import requests
from bs4 import BeautifulSoup
import json
import string
import logging
from tqdm import tqdm

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

# Base URL for the plant data
base_url = "http://www.israquarium.co.il/Plants/"

def get_plant_names_from_page(url, session):
    """
    Fetches and parses plant names from the given URL.

    Args:
        url (str): The URL of the page to scrape.
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
                # Extract scientific name
                scientific_name_div = tds[0].find('div', align='left')
                scientific_name = scientific_name_div.get_text(strip=True) if scientific_name_div else tds[0].get_text(strip=True)

                # Extract common name
                common_name_div = tds[1].find('div', align='right')
                common_name = common_name_div.get_text(strip=True) if common_name_div else tds[1].get_text(strip=True)

                # Clean up names
                scientific_name = scientific_name.strip('\xa0').strip()
                common_name = common_name.strip('\xa0').strip()

                plant_data.append({'scientific_name': scientific_name, 'common_name': common_name})

        return plant_data, True

    except Exception as e:
        logging.error(f"Error parsing the page at {url}: {e}")
        return [], False

def main():
    session = requests.Session()
    all_plant_data = []

    # Generate index page URLs from A to Z
    index_pages = [f"{base_url}LIndex{letter}.html" for letter in string.ascii_uppercase]

    for page_url in tqdm(index_pages, desc="Processing index pages"):
        logging.info(f"Fetching page: {page_url}")
        plant_data, success = get_plant_names_from_page(page_url, session)
        if not success:
            continue
        if plant_data:
            all_plant_data.extend(plant_data)

    try:
        with open('plant_data.json', 'w', encoding='utf-8') as f:
            json.dump(all_plant_data, f, ensure_ascii=False, indent=4)
        logging.info("Plant data saved to plant_data.json")
    except IOError as e:
        logging.error(f"Failed to write to file: {e}")

if __name__ == '__main__':
    main()
