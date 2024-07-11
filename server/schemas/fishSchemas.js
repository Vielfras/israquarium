//  fishSchemas.js

const Joi = require('joi');
const {imageSchema} = require('./commonSchemas');


const validationOptions = {
  stripUnknown: true,
  abortEarly: false,
};


const languageSchema = Joi.object({
  subclass: Joi.string().optional(),
  order: Joi.string().optional(),
  family: Joi.string().optional(),
  subfamily: Joi.string().optional(),
  synonyms: Joi.string().optional(),
  etymology: Joi.string().optional(),
  distribution: Joi.string().optional(),
  additionalRequirements: Joi.string().optional(),
  aquariumSetup: Joi.string().optional(),
  intraspeciesCompatibility: Joi.string().optional(),
  interspeciesCompatibility: Joi.string().optional(),
  feeding: Joi.string().optional(),
  sexualDimorphism: Joi.string().optional(),
  breeding: Joi.string().optional(),
  additionalInformation: Joi.string().optional(),
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
  }).optional(),
  fishIndices: Joi.array().items(Joi.string().pattern(/^[0-9a-fA-F]{24}$/)).required()
}).options(validationOptions);

const updateFishSchema = Joi.object({
  name: Joi.string().optional(),
  latinName: Joi.string().optional(),
  images: Joi.array().items(imageSchema).optional(),
  tribe: Joi.string().optional(),
  firstDescription: Joi.string().optional(),
  sources: Joi.string().optional(),
  tankVolume: Joi.string().optional(),
  fishSize: Joi.string().optional(),
  maxTemp: Joi.number().optional(),
  minTemp: Joi.number().optional(),
  ph: Joi.number().optional(),
  dGH: Joi.number().optional(),
  languages: Joi.object({
    en: languageSchema.optional(),
    he: languageSchema.optional(),
    ru: languageSchema.optional(),
  }),
  fishIndices: Joi.array().items(Joi.string().pattern(/^[0-9a-fA-F]{24}$/)).optional()
}).options(validationOptions).min(1).messages({
  'object.min': "The request's body must include at least one valid key",
});

module.exports = { 
  fishSchema,
  updateFishSchema,
 };
