#!/usr/bin/env python3

import requests
from bs4 import BeautifulSoup
import json
import logging
from tqdm import tqdm
import os

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(levelname)s: %(message)s')

# Base URL for the fish data
base_url = "http://www.israquarium.co.il/Fish"

# List of fish indices to scrape
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

def get_fish_title_page(fish_index, session):
    """
    Fetches and parses the title page content for a given fish index.

    Args:
        fish_index (str): The fish index to scrape.
        session (requests.Session): The session object for HTTP requests.

    Returns:
        dict: A dictionary containing the title and content of the fish index page.
    """
    # Construct the URL to the title page
    title_page_url = f"{base_url}/{fish_index}/{fish_index}Title.html"
    logging.info(f"Fetching title page: {title_page_url}")

    try:
        response = session.get(title_page_url)
        response.raise_for_status()
    except requests.exceptions.HTTPError as e:
        if response.status_code == 404:
            logging.warning(f"Title page not found: {title_page_url}")
        else:
            logging.error(f"HTTP error for {title_page_url}: {e}")
        return None
    except Exception as e:
        logging.error(f"Failed to retrieve the title page at {title_page_url}: {e}")
        return None

    try:
        soup = BeautifulSoup(response.content, 'html.parser')

        # Extract the title
        title_font = soup.find('font', attrs={'color': '#162e7c', 'style': 'FONT: 22pt David'})
        if title_font:
            title_div = title_font.find('div', align='center')
            title_text = title_div.get_text(strip=True) if title_div else title_font.get_text(strip=True)
        else:
            title_text = fish_index

        # Extract the subtitle (if any)
        subtitle_div = soup.find('div', align='center')
        if subtitle_div and subtitle_div.find('b'):
            subtitle_text = subtitle_div.get_text(strip=True)
        else:
            subtitle_text = ''

        # Extract the main content
        main_table = soup.find('table', align='center', width='510')
        content = ''
        if main_table:
            td = main_table.find('td')
            if td:
                content = td.get_text(separator='\n', strip=True)
        else:
            # Fallback to extract all text
            content = soup.get_text(separator='\n', strip=True)

        # Build the data dictionary
        fish_data = {
            'fish_index': fish_index,
            'title': title_text,
            'subtitle': subtitle_text,
            'content': content
        }

        return fish_data

    except Exception as e:
        logging.error(f"Error parsing the title page at {title_page_url}: {e}")
        return None

def main():
    session = requests.Session()
    fish_indices_data = []

    for fish_index in tqdm(fish_indices, desc="Processing fish indices"):
        fish_data = get_fish_title_page(fish_index, session)
        if fish_data:
            fish_indices_data.append(fish_data)
        else:
            logging.warning(f"Skipping fish index due to errors: {fish_index}")

    # Save the data into a JSON file
    output_file = 'fish_indices_data.json'
    try:
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(fish_indices_data, f, ensure_ascii=False, indent=4)
        logging.info(f"Fish indices data saved to {output_file}")
    except IOError as e:
        logging.error(f"Failed to write to file: {e}")

if __name__ == '__main__':
    main()
