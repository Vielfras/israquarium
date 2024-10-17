// usersControllers.js

const fs = require('fs');
const path = require('path');

const schemas = require("../schemas/fishSchemas");
const Fish = require("../models/Fish");
const FishIndex = require('../models/FishIndex');
const Err = require("../utils/errorHandling");
// const { createLogger } = require('vite');


const getFishByIndexAndLetter = async (req, res) => {
  try {
    const { index, letter } = req.query;

    if (!index || !letter) {
      return res.status(400).json({ success: false, message: 'Index and letter are required.' });
    }

    const fish = await Fish.find({
      fishIndices: index,
      name: { $regex: `^${letter}`, $options: 'i' }  // Case-insensitive match
    });

    if (fish.length === 0) {
      return res.status(404).json({ success: false, message: 'No fish found for this index and letter.' });
    }

    return res.status(200).json({ success: true, data: fish });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

const getRandomFish = async (req, res) => {
  try {
    const count = await Fish.countDocuments();
    const random = Math.floor(Math.random() * count);

    const fish = await Fish.findOne().skip(random);
    if (fish) {
      return res.status(200).json({ success: true, data: fish });
    }

    return res.status(404).json({ success: false, message: "No fish found." });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
};

const getFishById = async (req, res) => {
  try {
    const { id } = req.params;

    // TODO - Remove this comment once a getFishIdByLanguege is implemented
    // const { lang } = req.body;

    // const allowedLanguages = ['en', 'he', 'ru'];
    // if (!allowedLanguages.includes(lang)) {
    //   return res.status(400).json({ success: false, message: `Invalid language requested. Allowed languages are: ${allowedLanguages.join(', ')}.` });
    // }

    // const projection = {};
    // allowedLanguages.forEach(language => {
    //   if (language !== lang) {
    //     projection[`languages.${language}`] = 0;
    //   }
    // });

    const fish = await Fish.findById(id);
    if (fish) {
      return res.status(200).json({ success: true, data: fish });
    }

    return res.status(404).json({ success: false, message: `Fish id '${id}' not found.` });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
};

const getFishImage = async (req, res) => {
  try {
    const { id, imageName } = req.params;

    const fish = await Fish.findById(id);
    if (fish) {
      const image = fish.images.find(img => img.src === imageName);
      if (image) {
        const imagePath = path.join(__dirname, '../assets/fish_photo', image.src);
        if (fs.existsSync(imagePath)) {
          return res.sendFile(imagePath);
        } else {
          return res.status(404).json({
            success: false,
            message: `Image '${imageName}' not found.`,
          });
        }
      }

      return res.status(404).json({
        success: false,
        message: `Image '${imageName}' not found in fish with id '${id}'.`
      });
    }

    return res.status(404).json({
      success: false,
      message: `Fish id '${id}' not found.`
    });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
};

const createFish = async (req, res) => {
  try {
    const { fishIndices } = req.body;

    // Check if fishIndices is provided and is an array
    if (!Array.isArray(fishIndices) || fishIndices.length === 0) {
      return res.status(400).json({ success: false, message: 'fishIndices must be a non-empty array of IDs.' });
    }

    // Validate that all IDs in fishIndices are valid ObjectIDs
    // for (const id of fishIndices) {
    //   if (!mongoose.Types.ObjectId.isValid(id)) {
    //     return res.status(400).json({ success: false, message: `Invalid fish index ID: '${id}'.` });
    //   }
    // }

    const fishIndexDocs = await FishIndex.find({ _id: { $in: fishIndices } });

    if (fishIndexDocs.length !== fishIndices.length) {
      const existingIds = fishIndexDocs.map(doc => doc._id.toString());
      const missingIds = fishIndices.filter(id => !existingIds.includes(id));
      return res.status(404).json({ success: false, message: `Fish index IDs not found: ${missingIds.join(', ')}.` });
    }

    const { error, value } = schemas.fishSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ success: false, message: error.details.map(d => d.message).join(', ') });
    }

    const newFish = new Fish(value);
    await newFish.save();

    for (const fishIndex of fishIndexDocs) {
      fishIndex.fishes.push(newFish._id);
      await fishIndex.save();
    }

    return res.status(201).json({ success: true, data: newFish });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

const deleteFish = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedFish = await Fish.findByIdAndDelete(id);
    if (deletedFish) {
      return res.status(200).json({ success: true, message: `Fish id '${id}' deleted successfully.` });
    }

    // TODO - remove the fish id from its fishIndex

    return res.status(404).json({
      success: false,
      message: `Fish id '${id}' not found.`
    });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
};

const updateAFish = async (req, res) => {
  try {
    // TODO - Remove fields that aren't allowed to be updated, like _id, __v, createdAt, updatedAt, etc... 

    const { error, value } = schemas.updateFishSchema.validate(req.body);
    if (error) {
      return res.status(400).json(Err.multipleErrToString(error));
    }

    const { id } = req.params;
    const updatedFish = await Fish.findByIdAndUpdate(id, value, { new: true });
    if (updatedFish) {
      return res.status(200).json({ success: true, data: updatedFish });
    }

    return res.status(404).json({
      success: false,
      message: `Fish id '${id}' not found.`
    });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
};

const toggleFishLike = async (req, res) => {
  const { id } = req.params; 
  const userId = req.user.id; 

  try {
    const fish = await Fish.findById(id);
    if (!fish) {
      return res.status(404).json({ success: false, message: `Fish with id '${id}' not found.` });
    }

    const userIndex = fish.likes.indexOf(userId);

    if (userIndex === -1) {
      fish.likes.push(userId);
    } else {
      
      fish.likes.splice(userIndex, 1);
    }

    await fish.save();

    return res.status(200).json({
      success: true,
      likes: fish.likes,
    });
  } catch (err) {
    return res.status(500).json({ success: false, message: `Failed to toggle like due to: ${err.message}` });
  }
};

module.exports = {
  getFishByIndexAndLetter,
  getRandomFish,
  getFishById,
  getFishImage,
  createFish,
  deleteFish,
  updateAFish,
  toggleFishLike,
};
