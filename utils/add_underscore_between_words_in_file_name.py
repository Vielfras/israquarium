import os
from PIL import Image

DELETE_ORIGINAL_IMAGE = True
QUALITY = 70

folders = [
    '../server/assets/fish_photo',
]

def add_underscores_to_filename(filename):
    # Replace spaces and hyphens with underscores
    new_filename = filename.replace(' ', '_')
    # Remove any multiple consecutive underscores
    while '__' in new_filename:
        new_filename = new_filename.replace('__', '_')
    return new_filename

if __name__ == '__main__':
    for folder in folders:
        for root, dirs, files in os.walk(folder):
            for filename in files:
                # Rename the file first
                name, ext = os.path.splitext(filename)
                new_name = add_underscores_to_filename(name) + ext.lower()
                if new_name != filename:
                    old_file = os.path.join(root, filename)
                    new_file = os.path.join(root, new_name)
                    try:
                        os.rename(old_file, new_file)
                        print(f'Renamed {old_file} to {new_file}')
                        filename = new_name  # Update filename to the new name
                    except Exception as e:
                        print(f'Failed to rename {old_file}: {e}')
                        continue  # Skip to next file if renaming failed

                # Proceed with image conversion
                if filename.lower().endswith(('.jpg', '.jpeg')):
                    jpg_path = os.path.join(root, filename)
                    webp_path = os.path.splitext(jpg_path)[0] + '.webp'
                    try:
                        with Image.open(jpg_path) as img:
                            img.save(webp_path, 'webp', quality=QUALITY)
                            if DELETE_ORIGINAL_IMAGE:
                                os.remove(jpg_path)
                        print(f'Converted {jpg_path} to {webp_path}')
                    except Exception as e:
                        print(f'Failed to convert {jpg_path}: {e}')
