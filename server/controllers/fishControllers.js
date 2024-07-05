// usersControllers.js
const fs = require('fs');
const path = require('path');

const schemas = require("../schemas/fishSchemas");
// const User = require("../models/User");
const Fish = require("../models/Fish");
const Err = require("../utils/errorHandling");
const Auth = require("../utils/authorisation");


const getRandomFish = async (req, res) => {
  try {
    const count = await Fish.countDocuments();
    const random = Math.floor(Math.random() * count);
    const fish = await Fish.findOne().skip(random);
    if (fish) {
      return res.status(200).json({ success: true, data: fish });
    }
    return res.status(404).json({ success: false, 
      message: "No fish found." 
    });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
};

const getFishById = async (req, res) => {
  try {
    const { id } = req.params;

    const fish = await Fish.findById(id);
    if (fish) {
      return res.status(200).json({ success: true, data: fish });
    }

    return res.status(404).json({
      success: false,
      message: `Fish id '${id}' not found.`,
    });
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
        console.log(__dirname);
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
        message: `Image '${imageName}' not found in fish with id '${id}'.`,
      });
    }

    return res.status(404).json({
      success: false,
      message: `Fish id '${id}' not found.`,
    });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
};

module.exports = {
  getRandomFish,
  getFishById,
  getFishImage,
};
