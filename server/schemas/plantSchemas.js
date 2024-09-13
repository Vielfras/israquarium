//  fishSchemas.js

const Joi = require('joi');
const { imageSchema } = require('./commonSchemas');

const validationOptions = {
  stripUnknown: true,
  abortEarly: false,
};

const languageSchema = Joi.object({
  family: Joi.string().allow('').optional(),
  synonyms: Joi.string().allow('').optional(),
  etymology: Joi.string().allow('').optional(),
  distribution: Joi.string().allow('').optional(),
  notes: Joi.string().allow('').optional(),
  propagation: Joi.string().allow('').optional(),
});

const plantSchema = Joi.object({
  name: Joi.string().required(),
  latinName: Joi.string().allow('').optional(),
  images: Joi.array().items(imageSchema).optional(),
  firstDescription: Joi.string().allow('').optional(),
  sources: Joi.string().allow('').optional(),
  height: Joi.string().allow('').optional(),
  width: Joi.string().allow('').optional(),
  temperature: Joi.string().allow('').optional(),
  ph: Joi.string().allow('').optional(),
  hardness: Joi.string().allow('').optional(),
  light: Joi.string().allow('').optional(),
  growthRate: Joi.string().allow('').optional(),
  placement: Joi.string().allow('').optional(),
  languages: Joi.object({
    en: languageSchema.optional(),
    he: languageSchema.optional(),
    ru: languageSchema.optional(),
  }).optional(),
}).options(validationOptions);

const updatePlantSchema = Joi.object({
  name: Joi.string().allow('').optional(),
  latinName: Joi.string().allow('').optional(),
  images: Joi.array().items(imageSchema).optional(),
  firstDescription: Joi.string().allow('').optional(),
  sources: Joi.string().allow('').optional(),
  height: Joi.string().allow('').optional(),
  width: Joi.string().allow('').optional(),
  temperature: Joi.string().allow('').optional(),
  ph: Joi.string().allow('').optional(),
  hardness: Joi.string().allow('').optional(),
  light: Joi.string().allow('').optional(),
  growthRate: Joi.string().allow('').optional(),
  placement: Joi.string().allow('').optional(),
  languages: Joi.object({
    en: languageSchema.allow(null).optional(),
    he: languageSchema.allow(null).optional(),
    ru: languageSchema.allow(null).optional(),
  }).optional(),
}).options(validationOptions).min(1).messages({
  'object.min': "The request's body must include at least one valid key",
});


module.exports = {
  plantSchema,
  updatePlantSchema,
};
