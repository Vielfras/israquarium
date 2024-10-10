#!./venv/bin/python3

import os
from PIL import Image


QUALITY = 70


folders = [
    '../server/assets/fish_photo',
]

if __name__ == '__main__':
    for folder in folders:
        for root, dirs, files in os.walk(folder):
            for filename in files:
                if filename.lower().endswith(('.jpg', '.jpeg')):
                    jpg_path = os.path.join(root, filename)
                    webp_path = os.path.splitext(jpg_path)[0] + '.webp'
                    try:
                        with Image.open(jpg_path) as img:
                            img.save(webp_path, 'webp', quality=QUALITY)
                        print(f'Converted {jpg_path} to {webp_path}')
                    except Exception as e:
                        print(f'Failed to convert {jpg_path}: {e}')
