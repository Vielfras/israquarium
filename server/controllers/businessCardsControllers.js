// cardsController.js

const schemas = require("../schemas/businessCardsSchema");
const BusinessCard = require("../models/BusinessCard");
const Err = require("../utils/errorHandling");


const getAllBusinessCards = async (req, res) => {
  try {
    const allBusinessCards = await BusinessCard.find({});

    return res.status(200).json({
      success: true,
      data: allBusinessCards,
    });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message, });
  }
};

const getUserBusinessCards = async (req, res) => {
  try {
    const userId = req.user.id;
    const userBusinessCards = await BusinessCard.find({ user_id: userId });

    return res.status(200).json({
      success: true,
      data: userBusinessCards,
    });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message, });
  }
};

const getBusinessCardById = async (req, res) => {
  const { id } = req.params;

  try {
    const found = await BusinessCard.findById(id).populate('user_id').exec();
    if (found) {
      return res.status(200).json({
        success: true,
        data: found,
      });
    }

    return res.status(404).json({
      success: false,
      message: `BusinessCard id '${id}' not found.`,
    });
  } catch (err) {
    return res.status(400).json({ success: false, message: "Invalid format for card id.", });
  }
};

// TODO - Complete this api
// TODO - Add this to README and Postman docs
const searchInBusinessCards = async (req, res) => {
  const { error, value } = schemas.searchBusinessCard.validate(req.body);

  if (error) {
    return res.status(400).json(Err.multipleErrToString(error));
  }

  const { searchTerm, searchFields } = value;
  try {
    const found = await BusinessCard.multipleFieldsStringSearch(searchTerm, searchFields);

    return res.status(found.length !== 0 ? 200 : 204).json({
      success: true,
      data: found,
    });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
};

const createNewBusinessCard = async (req, res) => {
  const { error, value } = schemas.createNewBusinessCard.validate(req.body);

  if (error) {
    return res.status(400).json(Err.multipleErrToString(error));
  }

  try {
    const existingBusinessCard = await BusinessCard.findOne({ title: value.title, email: value.email, user_id: req.user.id });
    if (existingBusinessCard) {
      return res.status(409).json({ success: false, message: `You already have a business card with the title "${value.title}" and email "${value.email}".` });
    }


    const newBusinessCard = new BusinessCard(value);
    newBusinessCard.user_id = req.user.id;
    newBusinessCard.bizNumber = await BusinessCard.getNextBizNumber();

    const saved = await newBusinessCard.save();

    return res.status(201).json({
      success: true,
      created: saved,
    });
  } catch (err) {
    return res.status(500).json({ success: false, message: `Error saving card` });
  }
};

const deleteBusinessCard = async (req, res) => {
  const { id } = req.params;

  const userId = req.user.id;
  const isAdmin = req.user.isAdmin;

  try {
    let deleted;

    if (isAdmin) {
      deleted = await BusinessCard.findByIdAndDelete(id);
    } else {
      deleted = await BusinessCard.findOneAndDelete({ _id: id, user_id: userId });
    }

    if (!deleted) {
      return res.status(404).json({ success: false, message: `BusinessCard id ${id} not found or you are not authorized to delete it.` });
    }

    return res.status(200).json({ success: true, deleted: deleted });
  } catch (err) {
    return res.status(404).json({ success: false, message: `BusinessCard id ${id} not found.` });
  }
};

const editBusinessCard = async (req, res) => {
  const { error, value } = schemas.updateBusinessCard.validate(req.body);
  if (error) {
    return res.status(400).json(Err.multipleErrToString(error));
  }

  const { id } = req.params;

  const userId = req.user.id;
  const isAdmin = req.user.isAdmin;

  try {
    let editedBusinessCard;

    if (isAdmin) {
      editedBusinessCard = await BusinessCard.findByIdAndUpdate(id, value, { new: true });
    } else {
      editedBusinessCard = await BusinessCard.findOneAndUpdate({ _id: id, user_id: userId }, value, { new: true });
    }

    if (!editedBusinessCard) {
      return res.status(404).json({ success: false, message: `BusinessCard id ${id} was not found.` });
    }

    return res.status(200).json({
      success: true,
      editedBusinessCard: editedBusinessCard,
    });
  } catch (err) {
    return res.status(500).json({ success: false, message: `Failed to retrieve card due to: ${err.message}.` });
  }
};

const toggleBusinessCardLike = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;

  try {
    const card = await BusinessCard.findById(id);
    if (!card) {
      return res.status(404).json({ success: false, message: `BusinessCard id ${id} not found.` });
    }

    const userIndex = card.likes.indexOf(userId);

    if (userIndex === -1) {
      card.likes.push(userId);
    } else {
      card.likes.splice(userIndex, 1);
    }

    await card.save();

    return res.status(200).json({
      success: true,
      likes: card.likes,
    });
  } catch (err) {
    return res.status(500).json({ success: false, message: `Failed to toggle like due to: ${err.message}.` });
  }
};


module.exports = {
  getAllBusinessCards,
  getUserBusinessCards,
  getBusinessCardById,
  searchInBusinessCards,
  createNewBusinessCard,
  deleteBusinessCard,
  editBusinessCard,
  toggleBusinessCardLike,
};
