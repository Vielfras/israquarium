// fishRoutes.js

const router = require('express').Router();
const { mustLogin, allowedRoles } = require('../controllers/authControllers');
const { getFishByIndexAndLetter, getRandomFish, getFishById, getFishImage, updateAFish, createFish, deleteFish, toggleFishLike } = require('../controllers/fishControllers');

/*
============================================
        BASE PATH  = "/api/fish"
============================================
*/

router.get('/', getFishByIndexAndLetter);
router.get('/random', getRandomFish);
router.get('/image/:id/:imageName', getFishImage);
router.get('/:id', getFishById);

router.post('/', mustLogin, allowedRoles(["admin"]), createFish);
router.put('/:id', mustLogin, allowedRoles(["admin"]), updateAFish);
router.delete('/:id', mustLogin, allowedRoles(["admin"]), deleteFish);
router.patch('/:id', mustLogin, toggleFishLike);

module.exports = router;
