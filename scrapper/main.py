#!/usr/bin/env python3.10

import os
import json
from requests_html import HTMLSession

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

base_url = "http://www.israquarium.co.il/ru/Fish"

session = HTMLSession()

def get_fish_names_from_page(url):
    try:
        response = session.get(url)
        response.raise_for_status()
    except Exception as e:
        print(f"Failed to retrieve the page at {url}: {e}")
        return [], False

    try:
        table = response.html.find('table[style="FONT: 12pt David"]', first=True)
        if not table:
            print(f"No table found on page at {url}")
            return [], True  # Return True to indicate we successfully fetched the page, but found no table

        fish_names = []
        rows = table.find('tr[align="left"]')
        for row in rows:
            # Find fish name in either a > b or a
            fish_name_tag = row.find('a b', first=True) or row.find('a', first=True)
            if fish_name_tag:
                fish_name = fish_name_tag.text.strip()
                fish_names.append(fish_name)

        return fish_names, True
    except Exception as e:
        print(f"Error parsing the page at {url}: {e}")
        return [], False
    
    
def extract_fish_names(fish_index):
    all_fish_names = []
    page_number = 1

    while True:
        page_url = f"{base_url}/{fish_index}/{fish_index}ABC{page_number}.html"
        print(f"Fetching page: {page_url}")
        fish_names, success = get_fish_names_from_page(page_url)
        if not success:
            break
        all_fish_names.extend(fish_names)
        if not fish_names:
            break
        page_number += 1

    return all_fish_names

if __name__ == '__main__':
    all_fish_names = {}
    non_existing_indices = []

    # for fish_index in fish_indices:
    fish_names = extract_fish_names("Corydoras")
    if not fish_names:
        non_existing_indices.append("Corydoras")
    else:
        all_fish_names["Corydoras"] = fish_names

    for index, names in all_fish_names.items():
        print(f"{index}: {names}")

    if non_existing_indices:
        print(f"Non-existing indices: {', '.join(non_existing_indices)}")

    formatted_fish_names = []
    for family, names in all_fish_names.items():
        for name in names:
            formatted_fish_names.append({
                "name": name,
                "family": family
            })

    try:
        with open('fish_names.json', 'w', encoding='utf-8') as f:
            json.dump(formatted_fish_names, f, ensure_ascii=False, indent=4)
        print("Fish names saved to fish_names.json")
    except IOError as e:
        print(f"Failed to write to file: {e}")

    print("hello world")
