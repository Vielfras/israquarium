//  fishSchemas.js

const Joi = require('joi');
const { imageSchema } = require('./commonSchemas');

const validationOptions = {
  stripUnknown: true,
  abortEarly: false,
};

const languageSchema = Joi.object({
  family: Joi.string().optional(),
  synonyms: Joi.string().optional(),
  etymology: Joi.string().optional(),
  distribution: Joi.string().optional(),
  notes: Joi.string().optional(),
  propagation: Joi.string().optional(),
});

const plantSchema = Joi.object({
  name: Joi.string().required(),
  latinName: Joi.string().required(),
  images: Joi.array().items(imageSchema).required(),
  firstDescription: Joi.string().required(),
  sources: Joi.string().required(),
  height: Joi.string().required(),
  width: Joi.string().required(),
  temperature: Joi.string().required(),
  ph: Joi.string().required(),
  hardness: Joi.string().required(),
  light: Joi.string().required(),
  growthRate: Joi.string().required(),
  placement: Joi.string().required(),
  languages: Joi.object({
    en: languageSchema,
    he: languageSchema,
    ru: languageSchema,
  }).optional(),
}).options(validationOptions);

const updatePlantSchema = Joi.object({
  name: Joi.string().optional(),
  latinName: Joi.string().optional(),
  images: Joi.array().items(imageSchema).optional(),
  firstDescription: Joi.string().optional(),
  sources: Joi.string().optional(),
  height: Joi.string().optional(),
  width: Joi.string().optional(),
  temperature: Joi.string().optional(),
  ph: Joi.string().optional(),
  hardness: Joi.string().optional(),
  light: Joi.string().optional(),
  growthRate: Joi.string().optional(),
  placement: Joi.string().optional(),
  languages: Joi.object({
    en: languageSchema.optional(),
    he: languageSchema.optional(),
    ru: languageSchema.optional(),
  }),
}).options(validationOptions).min(1).messages({
  'object.min': "The request's body must include at least one valid key",
});

module.exports = {
  plantSchema,
  updatePlantSchema,
};
