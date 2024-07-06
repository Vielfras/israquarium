// FishIndex.js

const mongoose = require('mongoose');
const { imageSchema } = require('./common');

const fishIndexSchema = new mongoose.Schema({
    hebrew: { type: String,  unique: true },
    english: { type: String,  unique: true },
    russian: { type: String,  unique: true },
    image:  imageSchema ,
    fishes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Fish' }],
});

const FishIndex = mongoose.model('FishIndex', fishIndexSchema);


module.exports = FishIndex;
