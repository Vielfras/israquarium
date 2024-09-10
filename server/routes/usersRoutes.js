//userRoutes.js

const router = require('express').Router();
const { getAllUsers, getUserById, getUserDetails, /*searchInUsers,*/ /*createNewUser,*/ deleteUser, updateUser, updateUserBusinessStatus } = require('../controllers/usersControllers');
const { login, register, mustLogin, allowedRoles, ROLES } = require('../controllers/authControllers');

/*
============================================
        BASE PATH  = "/api/users"
============================================
*/

// SPECIFIC
router.get('/', mustLogin, allowedRoles([ROLES.ADMIN]), getAllUsers);
router.post('/', register);
router.post('/login', login);
router.get('/me', mustLogin, getUserDetails);

// UNspecific
router.get('/:id', mustLogin, getUserById);
router.delete('/:id', mustLogin, deleteUser);
router.put('/:id', mustLogin, updateUser);
router.patch('/:id', mustLogin, updateUserBusinessStatus);


module.exports = router;
