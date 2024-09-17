# Israquarium - Backend


### Key Technologies and Libraries
- **Database**: MongoDB
- **Framework**: Express.js
- **Libraries**: mongoose, bcryptjs, joi, jsonwebtoken, config, morgan, cors, chalk

## Getting Started
1. Clone repo
2. Run `npm install`
3. Create a `logs` folder.
4. Create an .env file with the following fields:
```bash
IP="<desired_ipv4>"
#Port must be a number in range 1025 - 65535
PORT = <desired_port> 

LOG_FILE_PATH = "your_file_path"

JWT_SECRET = "secret_here"
JWT_EXPIRES_IN = "10m" 

# Example:
# MONGODB_URI_DEV = "mongodb://localhost:27017/bcards_01"
MONGODB_URI_DEV = "mongodb://<path_to_your_db>"
MONGODB_URI_PROD = "mongodb://<path_to_your_db>"
```

5. **[OPTIONAL]** Seed you project by running `node seed.js` with data found in `./data/data.js`
   - This may require setting ENV VARIABLE manually or updating packages.json with seed.js instead of server.js and then running the next step.
6. To start the server run:
`npm run dev` for development environment or `npm run prod` for production environment.





## Requirements

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

# Roadmap
## Version 0.2.0   
- [] API:
   - [ ] Admin

## Polish
- [ ] Instead or returning JPG imgs return webp.
- [ ] JWT Token should refresh on interactions before its timer runs out

---
# Archieved
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


