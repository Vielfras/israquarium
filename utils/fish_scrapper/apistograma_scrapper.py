import os
import requests
from bs4 import BeautifulSoup
import json
import time

# Directory containing fish HTML files
fish_directory = '../../assets/israquarium.co.il/apistograma.israquarium.co.il/FishIndex/'

# Output files
output_file = './apistograma_fish_data.json'
output_file_no_duplicates = './apistograma_fish_data_no_duplicates.json'

# Base URL
base_url = 'http://www.apistogramma.israquarium.co.il/FishIndex/'

# Get the list of fish names
fish_names = []
for name in os.listdir(fish_directory):
    full_path = os.path.join(fish_directory, name)
    if os.path.isfile(full_path) or os.path.isdir(full_path):
        # Strip the .html extension if present
        fish_name, ext = os.path.splitext(name)
        if ext.lower() == '.html':
            fish_names.append(fish_name)
        else:
            fish_names.append(name)

# Ensure fish_names contains unique entries
fish_names = list(set(fish_names))

print(f"Found {len(fish_names)} fish names.")

# List to collect all fish data
all_fish_data = []

for fish_name in fish_names:
    # Construct the URL
    fish_url = f"{base_url}{fish_name}.html"
    print(f"Processing {fish_name} from {fish_url}")
    
    try:
        # Fetch the HTML content
        response = requests.get(fish_url)
        response.raise_for_status()  # Raise an HTTPError for bad responses
        
        # Handle encoding (assuming windows-1251)
        response.encoding = 'windows-1251'
        html_content = response.text
        
        # Parse the HTML content with BeautifulSoup
        soup = BeautifulSoup(html_content, 'html.parser')
        
        # Initialize the data dictionary
        fish_data = {
            'name': '',
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
            }
        }
        
        # Extract the name
        fish_data['name'] = soup.title.string.strip() if soup.title else fish_name
        
        # Extract images
        image_tables = soup.find_all('table', width="600", align="center")
        for image_table in image_tables:
            img_cells = image_table.find_all('td', class_='StNameFish')
            for cell in img_cells:
                img_tag = cell.find('img')
                if img_tag:
                    src = img_tag['src']
                    alt = img_tag.get('alt', '')
                    # Get creator name
                    creator_name = ''
                    small_tags = cell.find_all('small')
                    for small_tag in small_tags:
                        creator_link = small_tag.find('a')
                        if creator_link:
                            creator_name = creator_link.get_text(strip=True)
                            break
                    original_source = img_tag.parent.get('href', '')
                    fish_data['images'].append({
                        'src': src,
                        'alt': alt,
                        'creatorName': creator_name,
                        'originalSource': original_source
                    })
        
        # Extract data from the main table
        data_table = soup.find('table', class_='StTable2')
        if data_table:
            rows = data_table.find_all('tr')
            for row in rows:
                cells = row.find_all('td')
                if len(cells) != 2:
                    continue
                label_cell = cells[0]
                value_cell = cells[1]
                
                # Check if the label is an image (e.g., for temperature, pH, etc.)
                img = label_cell.find('img')
                if img:
                    img_src = img['src']
                    value_text = value_cell.get_text(separator=' ', strip=True)
                    if 'temperatura.gif' in img_src:
                        # Temperature
                        temp_values = value_text.replace('°C', '').split('-')
                        if len(temp_values) == 2:
                            fish_data['minTemp'] = temp_values[0].strip()
                            fish_data['maxTemp'] = temp_values[1].strip()
                        else:
                            fish_data['maxTemp'] = value_text.strip()
                    elif 'ph.gif' in img_src:
                        # pH
                        fish_data['ph'] = value_text
                    elif 'dH.gif' in img_src:
                        # dGH
                        fish_data['dGH'] = value_text
                    elif 'aqua-size.jpg' in img_src:
                        # Tank volume
                        fish_data['tankVolume'] = value_text
                    elif 'ApistoSize.jpg' in img_src:
                        # Fish size
                        fish_data['fishSize'] = value_text
                    elif 'planet 2.gif' in img_src:
                        # Distribution
                        fish_data['languages']['ru']['distribution'] = value_text
                else:
                    label = label_cell.get_text(strip=True).lower()
                    value = value_cell.get_text(separator='\n', strip=True)
                    # Map Russian labels to field names
                    label_mapping = {
                        'подкласс': 'subclass',
                        'отряд': 'order',
                        'семейство': 'family',
                        'подсемейство': 'subfamily',
                        'латинское название': 'latinName',
                        'первое описание': 'firstDescription',
                        'дополнительные названия': 'synonyms',
                        'группа': 'group',
                        'комплекс': 'complex',
                        'этимология': 'etymology',
                        'дополнительные условия': 'additionalRequirements',
                        'оформление аквариума': 'aquariumSetup',
                        'внутривидовая совместимость': 'intraspeciesCompatibility',
                        'межвидовая совместимость': 'interspeciesCompatibility',
                        'пища': 'feeding',
                        'сексуальный диморфизм': 'sexualDimorphism',
                        'размножение': 'breeding',
                        'дополнительная информация': 'additionalInformation',
                        'ссылки': 'links',
                        'использованные источники': 'sources',
                    }
                    field_name = label_mapping.get(label)
                    if field_name:
                        if field_name in fish_data:
                            fish_data[field_name] = value
                        else:
                            fish_data['languages']['ru'][field_name] = value
        
        # Append the fish data to the list
        all_fish_data.append(fish_data)
        print(f"Data for {fish_name} added to the list.")
        
        # Add a delay to be polite to the server
        # time.sleep(0.1)
    
    except requests.HTTPError as http_err:
        print(f"HTTP error occurred for {fish_name}: {http_err}")
    except Exception as err:
        print(f"An error occurred for {fish_name}: {err}")

# Write all fish data to a single JSON file (with potential duplicates)
with open(output_file, 'w', encoding='utf-8') as f:
    json.dump(all_fish_data, f, ensure_ascii=False, indent=2)
print(f"All fish data saved to {output_file}")

# # Remove duplicates based on the 'name' field
unique_fish_data = []
seen_names = set()
for fish in all_fish_data:
    name = fish['name']
    if name not in seen_names:
        unique_fish_data.append(fish)
        seen_names.add(name)
    else:
        print(f"Duplicate fish found: {name}")

# Write the unique data to a new JSON file
with open(output_file_no_duplicates, 'w', encoding='utf-8') as f:
    json.dump(unique_fish_data, f, ensure_ascii=False, indent=2)
print(f"Duplicates removed, new file created: {output_file_no_duplicates}")
