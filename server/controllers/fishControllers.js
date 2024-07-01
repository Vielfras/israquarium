// usersControllers.js

const schemas = require("../schemas/fishSchemas");
const User = require("../models/User");
const Err = require("../utils/errorHandling");
const Auth = require("../utils/authorisation");


const getFishById = async (req, res) => {
  try {
    
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message, });
  }
};




module.exports = {
};
