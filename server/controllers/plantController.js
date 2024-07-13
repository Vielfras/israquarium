// usersControllers.js

const fs = require('fs');
const path = require('path');

const schemas = require("../schemas/plantSchemas");
// const User = require("../models/User");
const Plant = require("../models/Plant");
const Err = require("../utils/errorHandling");


const getRandomPlant = async (req, res) => {
  try {
    const count = await Plant.countDocuments();
    const random = Math.floor(Math.random() * count);

    const plant = await Plant.findOne().skip(random);
    if (plant) {
      return res.status(200).json({ success: true, data: plant });
    }

    return res.status(404).json({ success: false, message: "No plant found." });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
};

const getPlantById = async (req, res) => {
  try {
    const { id } = req.params;
    const { lang } = req.body;

    const allowedLanguages = ['en', 'he', 'ru'];
    if (!allowedLanguages.includes(lang)) {
      return res.status(400).json({ success: false, message: `Invalid language requested. Allowed languages are: ${allowedLanguages.join(', ')}.` });
    }

    const projection = {};
    allowedLanguages.forEach(language => {
      if (language !== lang) {
        projection[`languages.${language}`] = 0;
      }
    });

    const plant = await Plant.findById(id, projection);
    if (plant) {
      return res.status(200).json({ success: true, data: plant });
    }

    return res.status(404).json({ success: false, message: `Plant id '${id}' not found.` });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
};

const getPlantImage = async (req, res) => {
  try {
    const { id, imageName } = req.params;

    const plant = await Plant.findById(id);
    if (plant) {
      const image = plant.images.find(img => img.src === imageName);
      if (image) {
        const imagePath = path.join(__dirname, '../assets/plant_photo', image.src);
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
        message: `Image '${imageName}' not found in plant with id '${id}'.`
      });
    }

    return res.status(404).json({
      success: false,
      message: `Plant id '${id}' not found.`
    });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
};

// const createPlant = async (req, res) => {
//   try {
//     const { error, value } = schemas.createPlant.validate(req.body);
//     if (error) {
//       return res.status(400).json(Err.multipleErrToString(error));
//     }

//     const newPlant = new Plant(value);
//     await newPlant.save();

//     return res.status(201).json({ success: true, data: newPlant });
//   } catch (err) {
//     return res.status(400).json({ success: false, message: err.message });
//   }
// };

const createPlant = async (req, res) => {
  try {
    const { error, value } = schemas.plantSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ success: false, message: error.details.map(d => d.message).join(', ') });
    }

    const newPlant = new Plant(value);
    await newPlant.save();

    return res.status(201).json({ success: true, data: newPlant });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
};

const deletePlant = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPlant = await Plant.findByIdAndDelete(id);
    if (deletedPlant) {
      return res.status(200).json({ success: true, message: `Plant id '${id}' deleted successfully.` });
    }

    return res.status(404).json({
      success: false,
      message: `Plant id '${id}' not found.`
    });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
};

const updateAPlant = async (req, res) => {
  try {
    // TODO - Remove fields that aren't allowed to be updated, like _id, __v, createdAt, updatedAt, etc... 
    const { error, value } = schemas.updatePlantSchema.validate(req.body);
    if (error) {
      return res.status(400).json(Err.multipleErrToString(error));
    }

    const { id } = req.params;
    const updatedPlant = await Plant.findByIdAndUpdate(id, value, { new: true });
    if (updatedPlant) {
      return res.status(200).json({ success: true, data: updatedPlant });
    }

    return res.status(404).json({
      success: false,
      message: `Plant id '${id}' not found.`
    });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
};



module.exports = {
  getRandomPlant,
  getPlantById,
  getPlantImage,
  createPlant,
  deletePlant,
  updateAPlant,
};
