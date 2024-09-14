# Israquarium




### Bridge:
- Add backend functionality for liking and reporting Fish
 
- Move CreateFish and CreatePlant to Admin Dashboard

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
    - [ ] Admin 
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
    - [ ] Edit Fish 
    - [X] Edit Plant
    - [ ] Edit Shop
    - [X] Publications
    - [ ] Error Page
    - [ ] Page Not found
    - [X] Favorite Icon

### Issues
- [ ] Incorrect form field validation causes the size of the parent container to increase suddenly
- [ ] Replace the login alert with a toast.

### Version 0.3.0 - Functionality
- [X] Authorization 
    - [X] Login/Logout
    - [X] Registration
    - [X] User Profile when logged in
- [ ] Toggle likes:
    - [ ] Plants
    - [ ] Fish
    - [ ] Shops
- [ ] Services.ts
    - [X] FishService.ts
    - [X] PlantServices.ts
    - [X] BusinessCardServices.ts
- [ ] Dispaly Data:
    - [X] FishIndices
    - [ ] Fish
    - [X] Plant
    - [ ] Shop
- [ ] Create Data:
    - [ ] Fish
    - [ ] Plant
    - [ ] Shop
- [ ] Edit Data:
    - [ ] Fish
    - [X] Plant
    - [ ] Shop
- [ ] Improve the error shown when content from server is loading or inaccecible:
    - Currently its a simple text "Error: Failed to fetch" with no CSS

### Version 0.4.0 - Responsivity and Accessibility
- [ ] Directional Support
- [ ] Finalise localisation
- [ ] Add Accessibility

### Version 0.5.0 - Polish
- [ ] Refactor form field to accept styles as props. 
- [ ] Rename all CardServices.ts functions to work with businessCard convention
- [ ] Add a "Back to XXXX" button for the fish, plants and shops.
- [ ] Add button at top of card to allow adding it to "My Aquarium"
- [ ] Remove all empty scss files
- [ ] Refactor IFishImage and IPlantImage to be a single IImage interface
- [ ] Pressing outside of dropdown menus should close the dropdown menu.
- [ ] Add a toast for many actions.

--- 

## Version 0.1.0
- [X] Add Tailwind
- [X] Create a Fish Display Component
- [X] Fetch data to display from server.
- [X] Add INext Localisation
