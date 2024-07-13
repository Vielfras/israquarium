# Final Project - WEB 2023

## Project Overview
This project involves developing a web application with both client-side and server-side components. The application should be fully functional, responsive, and include a content management system for site administrators to publish and manage content.

---

## Front End Requirements


### General Requirements
- [ ] **Use React** for building the client-side application.
- [ ] Ensure the site is responsive and adapts to various screen sizes.
- [ ] Clean and well-organized code: remove `console.log` statements and other commented-out code snippets.
- [ ] Adhere to coding conventions and ensure your code is readable and maintainable.
- [ ] Design is a crucial aspect: maintain a clean and attractive design that works across different devices.

### Specific Requirements
1. **Main Page**
   - [ ] Create a main content display page for viewing fish data.
   - [ ] Include a responsive design using a library like Bootstrap or Material Design.
   - [ ] Display a list or gallery of fish with images and basic details.

2. **Login System**
   - [ ] Implement a login page with access to the site management interface.
   - [ ] Use strong password policies and validation using regex.

3. **Content Management**
   - [ ] Allow adding, editing, and deleting fish data through an admin interface.
   - [ ] Ensure content is stored on the server.
   - [ ] Allow fish shops to add their business cards, including contact details and a brief description.

4. **Navigation**
   - [ ] Implement a dynamic navigation menu common to all pages.
   - [ ] Include a footer with logo, copyright, contact methods, and social media links.

5. **Accessibility and SEO**
   - [ ] Include `alt` attributes for all images.
   - [ ] Use meaningful `title` tags.

6. **Forms and Validation**
   - [ ] Ensure consistency in form design and include visual feedback for validation errors.
   - [ ] Enable form submission only when all required fields are filled out.

7. **User Profile and Preferences**
   - [ ] Allow users to mark fish data as favorites and maintain these preferences across sessions and devices.
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
- [ ] **Use Node.js** with Express for the server-side.
- [ ] **Use MongoDB** as the database.
- [ ] Clean and well-organized code: ensure code readability and maintainability.
- [ ] Include meaningful comments and documentation.

### Specific Requirements
1. **Setup**
   - [ ] Include `nodemon` in `devDependencies` and set up a `package.json` file with a `main` entry point.
   - [ ] Ensure proper folder structure with separate modules for routes, models, and controllers.

2. **API Development**
   - [ ] Develop a RESTful API for handling CRUD operations.
   - [ ] Use the Express library to handle HTTP requests.

3. **Authentication and Authorization**
   - [ ] Implement authentication to verify user identity.
   - [ ] Ensure that only admin users can add, edit, or delete content.

4. **Database Management**
   - [ ] Store application data in MongoDB.
   - [ ] Include validation logic using libraries like `joi` and `mongoose` to ensure data integrity.

5. **Logging and Error Handling**
   - [ ] Use a logging library like `morgan` to log HTTP requests and errors.
   - [ ] Implement proper error handling to catch and respond to client and server-side errors.

6. **Security**
   - [ ] Use JWT tokens for secure user authentication.
   - [ ] Store sensitive information securely and never include sensitive data in JWT tokens.

### Optional (Bonus) Features
- [ ] Develop a custom logging mechanism if needed.
- [ ] Implement an admin dashboard for managing user orders, inventory, and preferences.
- [ ] Create a feature for users to reset their passwords securely, including email verification.

---

## Project Submission
- [ ] Upload the project to a Git repository and share the link.
- [ ] Include a `README.md` file explaining the project, its features, and setup instructions.
- [ ] Ensure that the project is free from any sensitive files like `node_modules` or configuration files containing secrets.

---

### Notes
- Remember to maintain clean and aesthetic code and design, as this project will be part of your portfolio and represent your skills to potential employers.
- Test the application thoroughly to ensure all functionalities work as expected.
