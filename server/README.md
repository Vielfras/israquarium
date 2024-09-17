# Israquarium - Backend

## Table of Contents
- [User Endpoints](#1-user-endpoints)
- [Fish Endpoints](#2-fish-endpoints)
- [Plant Endpoints](#3-plant-endpoints)
- [Business Cards Endpoints](#4-business-cards-endpoints)
- [Fish Index Endpoints](#5-fish-index-endpoints)


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
# MONGODB_URI_DEV = "mongodb://localhost:27017/israquarium"
MONGODB_URI_DEV = "mongodb://<path_to_your_db>"
MONGODB_URI_PROD = "mongodb://<path_to_your_db>"
```

5. **[OPTIONAL]** Seed you project by running `node seed.js` with data found in `./data/data.js`
   - This may require setting ENV VARIABLE manually or updating packages.json with seed.js instead of server.js and then running the next step.
6. To start the server run:
`npm run dev` for development environment or `npm run prod` for production environment.


---
## API
### 1. User Endpoints

- **Register User**: `POST /api/users`  
  Register a new user account.

- **Login User**: `POST /api/users/login`  
  Authenticate a user and provide access tokens.  
  *Note: After 3 failed attempts, the user will be blocked for 24 hours.*

- **Get All Users**: `GET /api/users`  
  Retrieve a list of all users.  
  *Access: Admin only.*

- **Get User by ID**: `GET /api/users/:id`  
  Retrieve detailed information about a specific user by their ID.  
  *Access: Admin or the user themselves.*

- **Get Current User Details**: `GET /api/users/me`  
  Retrieve details of the currently authenticated user.  
  *Access: Logged-in users.*

- **Edit User**: `PUT /api/users/:id`  
  Update information of a specific user by their ID.  
  *Access: Registered users.*

- **Change Business Status**: `PATCH /api/users/:id`  
  Update the business status of a user.  
  *Access: Admin or the user themselves.*

- **Delete User**: `DELETE /api/users/:id`  
  Remove a user account by their ID.  
  *Access: Admin or the user themselves.*

---

### 2. Fish Endpoints

- **Get Fish by Index and Letter**: `GET /api/fish`  
  Retrieve fish data filtered by index and starting letter.

- **Get Random Fish**: `GET /api/fish/random`  
  Retrieve a random fish entry.

- **Get Fish Image**: `GET /api/fish/image/:id/:imageName`  
  Retrieve a specific image for a fish by ID and image name.

- **Get Fish by ID**: `GET /api/fish/:id`  
  Retrieve detailed information about a specific fish by its ID.

- **Create Fish**: `POST /api/fish`  
  Add a new fish entry to the database.  
  *Access: Admin only.*

- **Update Fish**: `PUT /api/fish/:id`  
  Update information of a specific fish by its ID.  
  *Access: Admin only.*

- **Delete Fish**: `DELETE /api/fish/:id`  
  Remove a fish entry by its ID.  
  *Access: Admin only.*

- **Toggle Fish Like**: `PATCH /api/fish/:id`  
  Like or unlike a fish entry.  
  *Access: Registered users.*

---

### 3. Plant Endpoints

- **Get Plants by Letter**: `GET /api/plant`  
  Retrieve plant data filtered by starting letter.

- **Get Plant by ID**: `GET /api/plant/:id`  
  Retrieve detailed information about a specific plant by its ID.

- **Get Plant Image**: `GET /api/plant/image/:id/:imageName`  
  Retrieve a specific image for a plant by ID and image name.

- **Get Random Plant**: `GET /api/plant/random`  
  Retrieve a random plant entry.

- **Create Plant**: `POST /api/plant`  
  Add a new plant entry to the database.  
  *Access: Admin only.*

- **Update Plant**: `PUT /api/plant/:id`  
  Update information of a specific plant by its ID.  
  *Access: Admin only.*

- **Delete Plant**: `DELETE /api/plant/:id`  
  Remove a plant entry by its ID.  
  *Access: Admin only.*

- **Toggle Plant Like**: `PATCH /api/plant/:id`  
  Like or unlike a plant entry.  
  *Access: Registered users.*

---

### 4. Business Cards Endpoints

- **Get All Business Cards**: `GET /api/cards`  
  Retrieve a list of all business cards.

- **Get User Business Cards**: `GET /api/cards/my_cards`  
  Retrieve business cards created by the authenticated user.  
  *Access: Registered users.*

- **Search Business Cards**: `POST /api/cards/search`  
  Search for business cards based on specific criteria.

- **Get Business Card by ID**: `GET /api/cards/:id`  
  Retrieve detailed information about a specific business card by its ID.

- **Create New Business Card**: `POST /api/cards`  
  Add a new business card to the database.  
  *Access: Business Users and Admins.*

- **Edit Business Card**: `PUT /api/cards/:id`  
  Update information of a specific business card by its ID.  
  *Access: Admin or the card creator.*

- **Delete Business Card**: `DELETE /api/cards/:id`  
  Remove a business card by its ID.  
  *Access: Admin or the card creator.*

- **Toggle Business Card Like**: `PATCH /api/cards/:id`  
  Like or unlike a business card entry.  
  *Access: Registered users.*

---

### 5. Fish Index Endpoints

- **Get Fish Indexes**: `GET /api/fishIndex`  
  Retrieve a list of all fish indexes.

- **Get Fish Index by ID**: `GET /api/fishIndex/:id`  
  Retrieve detailed information about a specific fish index by its ID.

- **Get Fish Index Image**: `GET /api/fishIndex/image/:id/:imageName`  
  Retrieve a specific image for a fish index by ID and image name.

- **Create Fish Index**: `POST /api/fishIndex`  
  Add a new fish index to the database.  
  *Access: Admin only.*

- **Update Fish Index**: `PUT /api/fishIndex/:id`  
  Update information of a specific fish index by its ID.  
  *Access: Admin only.*

- **Delete Fish Index**: `DELETE /api/fishIndex/:id`  
  Remove a fish index by its ID.  
  *Access: Admin only.*

---

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


