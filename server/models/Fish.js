// Fish.js

const mongoose = require('mongoose');
const { imageSchema } = require('./common');


const fishSchema = new mongoose.Schema(
  {
    name: { type: String, unique:true },
    latinName: { type: String },
    synonyms: { type: String },
    etymology: { type: String },
    firstDescription: { type: String },

    images: [imageSchema],
    
    subclass: { type: String },
    order: { type: String },
    family: { type: String },
    subfamily: { type: String },
    tribe: { type: String },
    
    distribution: { type: String },
    
    fishSize: { type: String },
    tankVolume: { type: String },

    // TODO - Change this to be numbers and have maxTemp and minTemp
    temp: { type: String },

    // TODO - Change this to be a number
    ph: { type: String },

    // TODO - Change this to be a number
    dGH: { type: String },

    additionalRequirements: { type: String },
    aquariumSetup: { type: String },
    intraspeciesCompatibility: { type: String },
    interspeciesCompatibility: { type: String },
    feeding: { type: String },
    sexualDimorphism: { type: String },
    breeding: { type: String },

    additionalInformation: { type: String },
    sources: { type: String },
  },
  {
    timestamps: true,
  }
);

const Fish = mongoose.model('Fish', fishSchema);


module.exports = Fish;
