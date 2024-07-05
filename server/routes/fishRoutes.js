// fishRoutes.js

const router = require('express').Router();
// const { mustLogin, allowedRoles, ROLES } = require('../controllers/authControllers');
const { getRandomFish, getFishById } = require('../controllers/fishControllers');

/*
============================================
        BASE PATH  = "/api/fish"
============================================
*/

//  SPECIFIC

//  UNspecific
router.get('/', getRandomFish);
router.get('/:id', getFishById);

module.exports = router;
