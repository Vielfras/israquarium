// Fish.js

const mongoose = require('mongoose');
const { imageSchema } = require('./common');

const languageSchema = new mongoose.Schema({
  subclass: String,
  order: String,
  family: String,
  subfamily: String,
  synonyms: String,
  etymology: String,
  distribution: String,
  additionalRequirements: String,
  aquariumSetup: String,
  intraspeciesCompatibility: String,
  interspeciesCompatibility: String,
  feeding: String,
  sexualDimorphism: String,
  breeding: String,
  additionalInformation: String,
});

const fishSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  latinName: { type: String },
  images: [imageSchema],
  tribe: { type: String },
  firstDescription: { type: String },
  sources: { type: String },
  tankVolume: { type: String },
  fishSize: { type: String },
  maxTemp: { type: Number },
  minTemp: { type: Number },
  ph: { type: Number },
  dGH: { type: Number },
  languages: {
    en: languageSchema,
    he: languageSchema,
    ru: languageSchema,
  },
  likes: [mongoose.SchemaTypes.ObjectId],
  fishIndices: [{ type: mongoose.Schema.Types.ObjectId, ref: 'FishIndex', required: true }]
}, {
  timestamps: true,
});

const Fish = mongoose.model('Fish', fishSchema);

module.exports = Fish;
