// Plant.js

const mongoose = require('mongoose');
const { imageSchema } = require('./common');

const languageSchema = new mongoose.Schema({
});

const plantSchema = new mongoose.Schema({
}, {
  timestamps: true,
});

const Plant = mongoose.model('Plant', plantSchema);

module.exports = Plant;
