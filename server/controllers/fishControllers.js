// usersControllers.js

const fs = require('fs');
const path = require('path');

const schemas = require("../schemas/fishSchemas");
// const User = require("../models/User");
const Fish = require("../models/Fish");
const Err = require("../utils/errorHandling");


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
    console.log(req.query);
    const { lang } = req.query;

    const allowedLanguages = ['en', 'he', 'ru'];
    if (!allowedLanguages.includes(lang)) {
      return res.status(400).json({ success: false, message: `Invalid language requested. Allowed languages are: ${allowedLanguages.join(', ')}.` });
    }

    const projection = { 'languages': {} };
    allowedLanguages.forEach(language => {
      if (language !== lang) {
        projection[`languages.${language}`] = 0;
      }
    });

    const fish = await Fish.findById(id, projection);
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

// const createFish = async (req, res) => {
//   try {
//     const { error, value } = schemas.createFish.validate(req.body);
//     if (error) {
//       return res.status(400).json(Err.multipleErrToString(error));
//     }

//     const newFish = new Fish(value);
//     await newFish.save();

//     return res.status(201).json({ success: true, data: newFish });
//   } catch (err) {
//     return res.status(400).json({ success: false, message: err.message });
//   }
// };

const createFish = async (req, res) => {
  try {
    const { indexId } = req.body;
    const fishIndex = await FishIndex.findById(indexId);
    if (!fishIndex) {
      return res.status(404).json({ success: false, message: `Fish index with id '${indexId}' not found.` });
    }

    const { error, value } = schemas.createFish.validate(req.body);
    if (error) {
      return res.status(400).json({ success: false, message: error.details.map(d => d.message).join(', ') });
    }

    const newFish = new Fish(value);
    await newFish.save();

    // Add the new fish to the specified index
    fishIndex.fishes.push(newFish._id);
    await fishIndex.save();

    return res.status(201).json({ success: true, data: newFish });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
};

const deleteFish = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedFish = await Fish.findByIdAndDelete(id);
    if (deletedFish) {
      return res.status(200).json({ success: true, message: `Fish id '${id}' deleted successfully.` });
    }

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
    const { error, value } = schemas.updateFish.validate(req.body);
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



module.exports = {
  getRandomFish,
  getFishById,
  getFishImage,
  createFish,
  deleteFish,
  updateAFish,
};
