const mongoose = require('mongoose');
const { imageSchema } = require('./common');

const languageSchema = new mongoose.Schema({
    family: String,
    synonyms: String,
    etymology: String,
    distribution: String,
    notes: String,
    propagation: String,
});

const plantSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    latinName: { type: String },
    images: [imageSchema],
    firstDescription: { type: String },
    sources: { type: String },
    height: String,
    width: String,
    temperature: String,
    ph: String,
    hardness: String,
    light: String,
    growthRate: String,
    placement: String,
    languages: {
        en: languageSchema,
        he: languageSchema,
        ru: languageSchema,
    },
    likes: [mongoose.SchemaTypes.ObjectId],
}, {
    timestamps: true,
});

const Plant = mongoose.model('Plant', plantSchema);

module.exports = Plant;
