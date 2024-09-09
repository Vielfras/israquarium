// businessCardRoutes.js

const router = require('express').Router();
const { mustLogin, allowedRoles, ROLES } = require('../controllers/authControllers');
const { getAllBusinessCards, getBusinessCardById, searchInBusinessCards, getUserBusinessCards, createNewBusinessCard, deleteBusinessCard, editBusinessCard, toggleBusinessCardLike } = require('../controllers/businessCardsControllers');

/*
============================================
        BASE PATH  = "/api/cards"
============================================
*/

//  SPECIFIC
router.get('/', getAllBusinessCards);
router.post('/', mustLogin, allowedRoles([ROLES.BUSINESS, ROLES.ADMIN]), createNewBusinessCard);
router.get('/my_cards', mustLogin, getUserBusinessCards);
router.post('/search', searchInBusinessCards);

//  UNspecific
router.get('/:id', getBusinessCardById);
router.delete('/:id', mustLogin, deleteBusinessCard);
router.put('/:id', mustLogin, editBusinessCard);
router.patch('/:id', mustLogin, toggleBusinessCardLike);


module.exports = router;
