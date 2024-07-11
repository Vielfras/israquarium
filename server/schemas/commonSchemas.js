//  commonSchemas.js

const Joi = require('joi');

const validationOptions = {
    stripUnknown: true,
    abortEarly: false,
};


const imageSchema = Joi.object({
    src: Joi.string().required(),
    alt: Joi.string().required(),
    creatorName: Joi.string().optional(),
    originalSource: Joi.string().optional(),
}).options(validationOptions);


module.exports = { imageSchema, };
