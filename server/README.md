# Israquarium - Server
A freshwater fish encyclopedia.

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
