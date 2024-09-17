# Israquarium




### Bridge:
- Add a watchdog that signs user out due to inactivity
- Incorrect form field validation causes the size of the parent container to increase suddenly



## Version 0.2.0 - Visuals
- [X] NavBar
- [ ] SearchBar
- [X] Footer
- [X] Dark / Light Mode
- [X] Contexts / Hooks
    - [X] Langeuge 
        - [X] Ltr / Rtl
        - [X] Eng / Russian / Heb
- [ ] Pages Scaffolding:
    - [X] About
    - [X] Home 
    - [X] Registration
    - [X] Login
    - [X] Admin 
    - [X] User
    - [X] Logout
    - [X] Shops 
    - [X] Fish Indecies
    - [X] Business Card
    - [X] Fish Card
    - [X] Plant Card
    - [X] Create Fish
    - [X] Create Plant
    - [X] Create shop
    - [X] Edit Fish 
    - [X] Edit Plant
    - [X] Edit User
    - [ ] Edit Shop
    - [X] Publications
    - [X] Page Not found
    - [X] Favorite Icon


### Issues

### Version 0.3.0 - Functionality
- [X] Authorization 
    - [X] Login/Logout
    - [X] Registration
    - [X] User Profile when logged in
- [X] Watchdog for signout on inactivity.
- [ ] Toggle likes:
    - [X] Plants
    - [X] Fish
    - [ ] Shops
- [X] Services.ts
    - [X] FishService.ts
    - [X] PlantServices.ts
    - [X] BusinessCardServices.ts
- [ ] Dispaly Data:
    - [X] FishIndices
    - [X] Fish
    - [X] Plant
    - [ ] Shop
- [ ] Create Data:
    - [X] Fish
    - [X] Plant
    - [ ] Shop
- [ ] Edit Data:
    - [X] Fish
    - [X] Plant
    - [X] User
    - [ ] Shop
- [ ] Improve the error shown when content from server is loading or inaccecible:
    - Currently its a simple text "Error: Failed to fetch" with no CSS

### Version 0.4.0 - Responsivity and Accessibility
- [X] Directional Support
- [ ] Finalise localisation
- [ ] Add Accessibility

### Version 0.5.0 - Polish
- [ ] Replace the login alert with a toast.
- [ ] Add the favorite icon to Plant/FishMinicards
- [ ] When token runs out and auth fails, need to notify user and handle problem
- [ ] Refactor form field to accept styles as props. 
- [ ] Rename all CardServices.ts functions to work with businessCard convention
- [ ] Add a "Back to XXXX" button for the fish, plants and shops.
- [ ] Remove all empty scss files
- [ ] Refactor IFishImage and IPlantImage to be a single IImage interface
- [X] Pressing outside of dropdown menus should close the dropdown menu.
- [X] Add a toast for many actions.
- [ ] Better looking fetch error instead of just "Failed to fetch" in red.
- [] Make 404 not found text and button float independantly of each other

--- 

## Version 0.1.0
- [X] Add Tailwind
- [X] Create a Fish Display Component
- [X] Fetch data to display from server.
- [X] Add INext Localisation
