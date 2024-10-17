//  fishSchemas.js

const Joi = require('joi');
const { imageSchema } = require('./commonSchemas');


const validationOptions = {
  stripUnknown: true,
  abortEarly: false,
};


const languageSchema = Joi.object({
  subclass: Joi.string().allow('').optional(),
  order: Joi.string().allow('').optional(),
  family: Joi.string().allow('').optional(),
  subfamily: Joi.string().allow('').optional(),
  synonyms: Joi.string().allow('').optional(),
  etymology: Joi.string().allow('').optional(),
  distribution: Joi.string().allow('').optional(),
  additionalRequirements: Joi.string().allow('').optional(),
  aquariumSetup: Joi.string().allow('').optional(),
  intraspeciesCompatibility: Joi.string().allow('').optional(),
  interspeciesCompatibility: Joi.string().allow('').optional(),
  feeding: Joi.string().allow('').optional(),
  sexualDimorphism: Joi.string().allow('').optional(),
  breeding: Joi.string().allow('').optional(),
  additionalInformation: Joi.string().allow('').optional(),
});



const fishSchema = Joi.object({
  name: Joi.string().required(),
  latinName: Joi.string().required(),
  images: Joi.array().items(imageSchema).optional(),
  tribe: Joi.string().allow('').optional(),
  firstDescription: Joi.string().allow('').optional(),
  sources: Joi.string().allow('').optional(),
  tankVolume: Joi.string().allow('').optional(),
  fishSize: Joi.string().allow('').optional(),
  maxTemp: Joi.number().allow(null).optional(),
  minTemp: Joi.number().allow(null).optional(),
  ph: Joi.number().allow(null).optional(),
  dGH: Joi.number().allow(null).optional(),
  languages: Joi.object({
    en: languageSchema,
    he: languageSchema,
    ru: languageSchema,
  }).optional(),
  fishIndices: Joi.array().items(Joi.string().pattern(/^[0-9a-fA-F]{24}$/)).min(1).required(),
}).options(validationOptions);

const updateFishSchema = Joi.object({
  name: Joi.string().optional(),
  latinName: Joi.string().optional(),
  images: Joi.array().items(imageSchema).optional(),
  tribe: Joi.string().allow('').optional(),
  firstDescription: Joi.string().allow('').optional(),
  sources: Joi.string().allow('').optional(),
  tankVolume: Joi.string().allow('').optional(),
  fishSize: Joi.string().allow('').optional(),
  maxTemp: Joi.number().optional(),
  minTemp: Joi.number().optional(),
  ph: Joi.number().optional(),
  dGH: Joi.number().optional(),
  languages: Joi.object({
    en: languageSchema.optional(),
    he: languageSchema.optional(),
    ru: languageSchema.optional(),
  }),
  fishIndices: Joi.array().items(Joi.string().pattern(/^[0-9a-fA-F]{24}$/)).optional(),
})
.options(validationOptions).min(1).messages({ 'object.min': "The request's body must include at least one valid key", 
});

module.exports = {
  fishSchema,
  updateFishSchema,
};
