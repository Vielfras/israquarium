// fishIndexRoutes.js

const router = require('express').Router();
const { mustLogin, allowedRoles } = require('../controllers/authControllers');
    
const { getFishIndexes, getIndexById, getFishIndexImage } = require('../controllers/fishIndexController');

/*
============================================
        BASE PATH  = "/api/fishIndex"
============================================
*/

router.get('/', getFishIndexes);
router.get('/:id', getIndexById);
router.get('/image/:id/:imageName', getFishIndexImage);

// router.post('/', mustLogin, allowedRoles(["admin"]), createFishIndex);
// router.put('/:id', mustLogin, allowedRoles(["admin"]), updateAFishIndex);
// router.delete('/:id', mustLogin, allowedRoles(["admin"]), deleteFishIndex);

// TOOD - Remove after automated tests are written
// router.post('/', createFishIndex);
// router.put('/:id', updateAFishIndex);
// router.delete('/:id', deleteFishIndex);


module.exports = router;
