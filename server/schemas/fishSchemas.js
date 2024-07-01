const mongoose = require('mongoose');

const FishSchema = new mongoose.Schema({
  name: { type: String, required: true },
  images: [
    {
      src: { type: String, required: true },
      alt: { type: String, required: true },
    },
  ],
  subclass: { type: String, required: true },
  order: { type: String, required: true },
  family: { type: String, required: true },
  subfamily: { type: String, required: true },
  tribe: { type: String, required: true },
  latinName: { type: String, required: true },
  firstDescription: { type: String, required: true },
  synonyms: { type: String, required: true },
  etymology: { type: String, required: true },
  distribution: { type: String, required: true },
  fishSize: { type: String, required: true },
  tankVolume: { type: String, required: true },
  temp: { type: String, required: true },
  ph: { type: String, required: true },
  dGH: { type: String, required: true },
  additionalRequirements: { type: String, required: true },
  aquariumSetup: { type: String, required: true },
  intraspeciesCompatibility: { type: String, required: true },
  interspeciesCompatibility: { type: String, required: true },
  feeding: { type: String, required: true },
  sexualDimorphism: { type: String, required: true },
  breeding: { type: String, required: true },
  additionalInformation: { type: String, required: true },
  sources: { type: String, required: true },
  directProfileLink: { type: String, required: true },
});

const Fish = mongoose.model('Fish', FishSchema);

module.exports = Fish;
