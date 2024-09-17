# Israquarium - Front End

---

## Requirements
### General Requirements
- [X] **Use React** for building the client-side application.
- [X] Ensure the site is responsive and adapts to various screen sizes.
- [X] Clean and well-organized code: remove `console.log` statements and other commented-out code snippets.
- [X] Adhere to coding conventions and ensure your code is readable and maintainable.
- [X] Design is a crucial aspect: maintain a clean and attractive design that works across different devices.

### Specific Requirements
1. **Main Page**
   - [X] Create a main content display page for viewing fish data.
   - [X] Include a responsive design using a library like Bootstrap or Material Design.
      - I chose to go with Tailwind.
   - [X] Display a list or gallery of fish and plants with images and basic details.

2. **Login System**
   - [X] Implement a login page with access to the site management interface.
   - [X] Use strong password policies and validation using regex.

3. **Content Management**
   - [X] Allow adding, editing, and deleting fish/plant data through an admin interface.
   - [ ] Allow fish shops to add their business cards, including contact details and a brief description.
   - [X] Ensure content is stored on the server.

4. **Navigation**
   - [X] Implement a dynamic navigation menu common to all pages.
   - [X] Include a footer with logo, copyright, contact methods, and social media links.

5. **Accessibility and SEO**
   - [X] Include `alt` attributes for all images.
   - [X] Use meaningful `title` tags.

6. **Forms and Validation**
   - [X] Ensure consistency in form design and include visual feedback for validation errors.
   - [X] Enable form submission only when all required fields are filled out.

7. **User Profile and Preferences**
   - [X] Allow users to mark fish data as favorites and maintain these preferences across sessions and devices.
   - [X] Provide a profile page where users can update their details and upload a profile picture.

8. **Fresh Water Fish Management**
   - [X] Allow fish to be created and managed their business cards.
   - [X] Display fish to cards in a dedicated section accessible to users.

9. **Fresh Water Plant Management**
   - [X] Allow plant to be created and managed their business cards.
   - [X] Display plant to cards in a dedicated section accessible to users.

10. **Business Card Management**
   - [ ] Allow fish shops to create and manage their business cards.
   - [ ] Display business cards in a dedicated section accessible to users.

### Optional (Bonus) Features
- [X] Implement a logout feature that automatically logs out users after a set period of inactivity.
- [ ] Limit the number of server requests a user can make in a given timeframe to protect against potential abuse.
- [ ] Create a user management page for admins to view and manage user details and permissions.


---

## Roadmap

### Bridge:
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
- [ ] Use Spinner component instead of copy pasted code
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

## Archieved

## Version 0.1.0
- [X] Add Tailwind
- [X] Create a Fish Display Component
- [X] Fetch data to display from server.
- [X] Add INext Localisation
