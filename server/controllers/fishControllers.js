// usersControllers.js

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


module.exports = {
  getRandomFish,
  getFishById,
};
