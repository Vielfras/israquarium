# Israquarium - Server
A freshwater fish encyclopedia.

## Back End Requirements

### General Requirements
- [X] **Use Node.js** with Express for the server-side.
- [X] **Use MongoDB** as the database.
- [X] Clean and well-organized code: ensure code readability and maintainability.
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


## Version 0.1.0:
- API's:
   - [X] Users
   - [X] Fish
   - [X] Plants
   - [X] Shops
- [X] Logging
- [X] Seeding
- [X] JWT
- [X] Mongoose integration
   
## Polish
- [ ] JWT Token should refresh on interactions before its timer runs out


