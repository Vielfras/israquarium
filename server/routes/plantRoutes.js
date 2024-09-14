// plantRoutes.js

const router = require('express').Router();
const { mustLogin, allowedRoles } = require('../controllers/authControllers');
const { getPlantsByLetter, getRandomPlant, getPlantById, getPlantImage, updateAPlant, createPlant, deletePlant, togglePlantLike } = require('../controllers/plantControllers');

/*
============================================
        BASE PATH  = "/api/plant"
============================================
*/


router.get('/', getPlantsByLetter);
router.get('/:id', getPlantById);
router.get('/image/:id/:imageName', getPlantImage);
router.get('/random', getRandomPlant);

router.post('/', mustLogin, allowedRoles(["admin"]), createPlant);
router.put('/:id', mustLogin, allowedRoles(["admin"]), updateAPlant);
router.delete('/:id', mustLogin, allowedRoles(["admin"]), deletePlant);
router.patch('/:id', mustLogin, togglePlantLike);

// TOOD - Remove after automated tests are written
// router.post('/', createPlant);
// router.put('/:id', updateAPlant);
// router.delete('/:id', deletePlant);

module.exports = router;
