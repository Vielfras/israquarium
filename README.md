# Final Project - WEB 2023

## Project Overview
This project involves developing a web application with both client-side and server-side components. The application should be fully functional, responsive, and include a content management system for site administrators to publish and manage content.

---

## Front End Requirements


### General Requirements
- [X] **Use React** for building the client-side application.
- [X] Ensure the site is responsive and adapts to various screen sizes.
- [ ] Clean and well-organized code: remove `console.log` statements and other commented-out code snippets.
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
   - [X] Ensure content is stored on the server.
   - [ ] Allow fish shops to add their business cards, including contact details and a brief description.

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
   - [ ] Provide a profile page where users can update their details and upload a profile picture.

8. **Business Card Management**
   - [ ] Allow fish shops to create and manage their business cards.
   - [ ] Display business cards in a dedicated section accessible to users.

### Optional (Bonus) Features
- [ ] Implement a logout feature that automatically logs out users after a set period of inactivity.
- [ ] Limit the number of server requests a user can make in a given timeframe to protect against potential abuse.
- [ ] Create a user management page for admins to view and manage user details and permissions.


---


## Back End Requirements

### General Requirements
- [X] **Use Node.js** with Express for the server-side.
- [X] **Use MongoDB** as the database.
- [] Clean and well-organized code: ensure code readability and maintainability.
- [ ] Include meaningful comments and documentation.

### Specific Requirements
1. **Setup**
   - [X] Include `nodemon` in `devDependencies` and set up a `package.json` file with a `main` entry point.
   - [X] Ensure proper folder structure with separate modules for routes, models, and controllers.

2. **API Development**
   - [X] Develop a RESTful API for handling CRUD operations.
   - [X] Use the Express library to handle HTTP requests.

3. **Authentication and Authorization**
   - [X] Implement authentication to verify user identity.
   - [X] Ensure that only admin users can add, edit, or delete content.

4. **Database Management**
   - [X] Store application data in MongoDB.
   - [X] Include validation logic using libraries like `joi` and `mongoose` to ensure data integrity.

5. **Logging and Error Handling**
   - [X] Use a logging library like `morgan` to log HTTP requests and errors.
   - [X] Implement proper error handling to catch and respond to client and server-side errors.

6. **Security**
   - [X] Use JWT tokens for secure user authentication.
   - [X] Store sensitive information securely and never include sensitive data in JWT tokens.

### Optional (Bonus) Features
- [ ] Develop a custom logging mechanism if needed.
- [ ] Implement an admin dashboard for managing user orders, inventory, and preferences.
- [ ] Create a feature for users to reset their passwords securely, including email verification.

---

## Project Submission
- [X] Upload the project to a Git repository and share the link.
- [ ] Include a `README.md` file explaining the project, its features, and setup instructions.
- [X] Ensure that the project is free from any sensitive files like `node_modules` or configuration files containing secrets.

---

### Notes
- Remember to maintain clean and aesthetic code and design, as this project will be part of your portfolio and represent your skills to potential employers.
- Test the application thoroughly to ensure all functionalities work as expected.
