// fishRoutes.js

const router = require('express').Router();
// const { mustLogin, allowedRoles, ROLES } = require('../controllers/authControllers');
const { getRandomFish, getFishById, getFishImage } = require('../controllers/fishControllers');

/*
============================================
        BASE PATH  = "/api/fish"
============================================
*/


router.get('/', getRandomFish);
router.get('/:id', getFishById);
router.get('/image/:id/:imageName', getFishImage);

module.exports = router;
