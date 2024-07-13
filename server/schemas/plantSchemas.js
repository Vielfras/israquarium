//  fishSchemas.js

const Joi = require('joi');
const { imageSchema } = require('./commonSchemas');


const validationOptions = {
    stripUnknown: true,
    abortEarly: false,
};


const languageSchema = Joi.object({

});

// TODO - Make everything but the name and fishIndices optional?
const plantSchema = Joi.object({

}).options(validationOptions);

const updatePlantSchema = Joi.object({

}).options(validationOptions).min(1).messages({
    'object.min': "The request's body must include at least one valid key",
});

module.exports = {
    plantSchema,
    updatePlantSchema,
};
