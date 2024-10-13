#!/bin/python3

import os
import json

file_path = "hello_world.json"

if os.path.exists(file_path):
    with open(file_path, "r") as file:
        contents = json.load(file) 
        print("File already exists. Contents:")
        print(contents)
else:
    data = {"message": "Hello, World!"}
    
    with open(file_path, "w") as file:
        json.dump(data, file, indent=4)
    
    print("File didn't exist, created and written 'Hello, World!' to it.")
