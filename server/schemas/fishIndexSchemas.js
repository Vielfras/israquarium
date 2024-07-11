//  fishIndexSchemas.js

const Joi = require('joi');
const { imageSchema } = require('./commonSchemas');


const validationOptions = {
    stripUnknown: true,
    abortEarly: false,
};


const fishIndexSchema = Joi.object({
    hebrew: Joi.string().required(),
    english: Joi.string().required(),
    russian: Joi.string().required(),
    image: imageSchema.optional(),
}).options(validationOptions);


module.exports = { fishIndexSchema, };
