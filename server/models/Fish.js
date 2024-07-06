// Fish.js

const mongoose = require('mongoose');
const { imageSchema } = require('./common');


const fishSchema = new mongoose.Schema(
  {
    // TODO - This need to be unique with no care for Lower/Upper case. A
    //        ex. canthicus adonis == Acanthicus Adonis
    name: { type: String, required: true, unique: true },
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

    maxTemp: { type: Number },
    minTemp: { type: Number },

    ph: { type: Number },
    dGH: { type: Number },

    additionalRequirements: { type: String },
    aquariumSetup: { type: String },
    intraspeciesCompatibility: { type: String },
    interspeciesCompatibility: { type: String },
    feeding: { type: String },
    sexualDimorphism: { type: String },
    breeding: { type: String },

    additionalInformation: { type: String },
    sources: { type: String },
  }, {
  timestamps: true,
});

const Fish = mongoose.model('Fish', fishSchema);


module.exports = Fish;
