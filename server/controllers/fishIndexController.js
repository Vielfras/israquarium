// fishIndexControllers.js

const fs = require('fs');
const path = require('path');

const schemas = require("../schemas//fishIndexSchemas");
// const User = require("../models/User");
const FishIndex = require("../models/FishIndex");
const Err = require("../utils/errorHandling");


const getFishIndexes = async (req, res) => {
  try {
    const indexes = await FishIndex.find({});
    if (indexes) {
      return res.status(200).json({ success: true, data: indexes });
    }

    return res.status(404).json({ success: false, message: "No indexes found." });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
};

const getFishIndexImage = async (req, res) => {
    try {
      const { id, imageName } = req.params;
  
      const fishIndex = await FishIndex.findById(id);
      if (fishIndex) {
        if (fishIndex.image.src === imageName ) {
          const imagePath = path.join(__dirname, '../assets/fish_index_photo', fishIndex.image.src);
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
          message: `Image '${imageName}' not found in fish index with id '${id}'.`
        });
      }
  
      return res.status(404).json({
        success: false,
        message: `Fish index id '${id}' not found.`
      });
    } catch (err) {
        console.log("Huh?")
      return res.status(400).json({ success: false, message: err.message });
    }
  };


module.exports = {
    getFishIndexes,
    getFishIndexImage
};
