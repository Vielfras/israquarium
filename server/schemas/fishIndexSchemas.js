//  fishIndexSchemas.js

const Joi = require('joi');
const { imageSchema } = require('./commonSchemas');


const fishIndexSchema = Joi.object({
    hebrew: Joi.string().required(),
    english: Joi.string().required(),
    russian: Joi.string().required(),
    image: imageSchema.optional(),
    fishes: Joi.array().items(Joi.string().pattern(/^[0-9a-fA-F]{24}$/)),
});


module.exports = { fishIndexSchema, };
