//  commonSchemas.js

const Joi = require('joi');


const imageSchema = Joi.object({
    src: Joi.string().required(),
    alt: Joi.string().required(),
    creatorName: Joi.string().optional(),
    originalSource: Joi.string().optional(),
});


module.exports = { imageSchema, };
