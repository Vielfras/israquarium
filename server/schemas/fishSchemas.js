// fishSchemas.js

const Joi = require('joi');


const validationOptions = {
  stripUnknown: true,
  abortEarly: false,
};

const imageSchema = Joi.object({
  src: Joi.string().optional(),
  alt: Joi.string().optional().default(''),
});

const fishSchema = Joi.object({
  name: Joi.string().required(),
  latinName: Joi.string().required(),
  synonyms: Joi.string().optional(),
  etymology: Joi.string().optional(),
  firstDescription: Joi.string().optional(),
  
  images: Joi.array().items(imageSchema).optional(),
  
  subclass: Joi.string().required(),
  order: Joi.string().required(),
  family: Joi.string().required(),
  subfamily: Joi.string().required(),
  tribe: Joi.string().required(),
  distribution: Joi.string().optional(),
  fishSize: Joi.string().required(),
  tankVolume: Joi.string().optional(),
  
  maxTemp: Joi.number().optional(),
  minTemp: Joi.number().optional(),
  
  ph: Joi.number().optional(),
  dGH: Joi.number().optional(),
  
  additionalRequirements: Joi.string().optional(),
  aquariumSetup: Joi.string().optional(),
  intraspeciesCompatibility: Joi.string().optional(),
  interspeciesCompatibility: Joi.string().optional(),
  feeding: Joi.string().optional(),
  sexualDimorphism: Joi.string().optional(),
  breeding: Joi.string().optional(),
  additionalInformation: Joi.string().optional(),
  sources: Joi.string().optional(),
  directProfileLink: Joi.string().optional(),
}).options(validationOptions);

const updateFishSchema = Joi.object({
  name: Joi.string().optional(),
  latinName: Joi.string().optional(),
  synonyms: Joi.string().optional(),
  etymology: Joi.string().optional(),
  firstDescription: Joi.string().optional(),
  
  images: Joi.array().items(imageSchema).optional(),
  
  subclass: Joi.string().optional(),
  order: Joi.string().optional(),
  family: Joi.string().optional(),
  subfamily: Joi.string().optional(),
  tribe: Joi.string().optional(),
  distribution: Joi.string().optional(),
  fishSize: Joi.string().optional(),
  tankVolume: Joi.string().optional(),
  
  maxTemp: Joi.number().optional(),
  minTemp: Joi.number().optional(),
  
  ph: Joi.number().optional(),
  dGH: Joi.number().optional(),
  
  additionalRequirements: Joi.string().optional(),
  aquariumSetup: Joi.string().optional(),
  intraspeciesCompatibility: Joi.string().optional(),
  interspeciesCompatibility: Joi.string().optional(),
  feeding: Joi.string().optional(),
  sexualDimorphism: Joi.string().optional(),
  breeding: Joi.string().optional(),
  additionalInformation: Joi.string().optional(),
  sources: Joi.string().optional(),
  directProfileLink: Joi.string().optional(),
}).options(validationOptions).min(1).messages({
  'object.min': "The request's body must include at least one valid key",
});

const schemas = {
  createFish: fishSchema,
  updateFish: updateFishSchema,
};


module.exports = schemas;
