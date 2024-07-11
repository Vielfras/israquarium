//  fishSchemas.js

const Joi = require('joi');

const imageSchema = Joi.object({
  src: Joi.string().uri().required(),
  alt: Joi.string().required(),
  creatorName: Joi.string().required(),
  originalSource: Joi.string().uri().required()
});

const languageSchema = Joi.object({
  subclass: Joi.string().required(),
  order: Joi.string().required(),
  family: Joi.string().required(),
  subfamily: Joi.string().required(),
  synonyms: Joi.string().required(),
  etymology: Joi.string().required(),
  distribution: Joi.string().required(),
  additionalRequirements: Joi.string().required(),
  aquariumSetup: Joi.string().required(),
  intraspeciesCompatibility: Joi.string().required(),
  interspeciesCompatibility: Joi.string().required(),
  feeding: Joi.string().required(),
  sexualDimorphism: Joi.string().required(),
  breeding: Joi.string().required(),
  additionalInformation: Joi.string().required(),
});

const fishSchema = Joi.object({
  _id: Joi.string().pattern(/^[0-9a-fA-F]{24}$/).required(),
  name: Joi.string().required(),
  latinName: Joi.string().required(),
  images: Joi.array().items(imageSchema).required(),
  tribe: Joi.string().required(),
  firstDescription: Joi.string().required(),
  sources: Joi.string().required(),
  tankVolume: Joi.string().required(),
  fishSize: Joi.string().required(),
  maxTemp: Joi.number().required(),
  minTemp: Joi.number().required(),
  ph: Joi.number().required(),
  dGH: Joi.number().required(),
  languages: Joi.object({
    en: languageSchema,
    he: languageSchema,
    ru: languageSchema,
  }).required(),
  fishIndices: Joi.array().items(Joi.string().pattern(/^[0-9a-fA-F]{24}$/)).required()
});

module.exports = { fishSchema };
