// fishRoutes.js

const router = require('express').Router();
const { mustLogin, allowedRoles } = require('../controllers/authControllers');
const { getRandomFish, getFishById, getFishImage, updateAFish, createFish, deleteFish } = require('../controllers/fishControllers');

/*
============================================
        BASE PATH  = "/api/fish"
============================================
*/

router.get('/', getRandomFish);
router.get('/:id', getFishById);
router.get('/image/:id/:imageName', getFishImage);

router.post('/', mustLogin, allowedRoles(["admin"]), createFish);
router.put('/:id', mustLogin, allowedRoles(["admin"]), updateAFish);
router.delete('/:id', mustLogin, allowedRoles(["admin"]), deleteFish);


module.exports = router;
