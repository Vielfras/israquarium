// generateFishData.js

const fs = require('fs');
const path = require('path');
const Joi = require('joi');
const { fishSchema } = require('../schemas/fishSchemas');
const mongoose = require('mongoose');

// Read the apistograma_data.json file
const fishDataPath = path.join(__dirname, '../../utils/fish_scrapper/apistograma_fish_data.json');
const rawData = fs.readFileSync(fishDataPath, 'utf-8');
const fishData = JSON.parse(rawData);


// Helper functions
const parseTemperature = (minTemp, maxTemp) => {
  const parseValue = (value) => {
    if (!value) return null;
    const num = parseFloat(value.replace(',', '.'));
    return isNaN(num) ? null : num;
  };

  const min = parseValue(minTemp);
  const max = parseValue(maxTemp);

  return { minTemp: min, maxTemp: max };
};

const parsePh = (phValue) => {
  if (!phValue) return null;

  const phRange = phValue.replace(',', '.').split('-').map((v) => v.trim());
  if (phRange.length === 2) {
    const minPh = parseFloat(phRange[0]);
    const maxPh = parseFloat(phRange[1]);
    return { minPh, maxPh };
  }
  const ph = parseFloat(phRange[0]);
  return { ph };
};

const parseDGH = (dghValue) => {
  if (!dghValue) return null;

  const dghRange = dghValue.replace(',', '.').split('-').map((v) => v.trim());
  if (dghRange.length === 2) {
    const minDGH = parseFloat(dghRange[0]);
    const maxDGH = parseFloat(dghRange[1]);
    return { minDGH, maxDGH };
  }
  const dgh = parseFloat(dghRange[0]);
  return { dGH: dgh };
};

const cleanDimension = (value) => {
  return value.replace('см', 'cm').replace('.', '').trim();
};

const standardizeVolume = (value) => {
  return value.replace('от', 'from').replace('см', 'cm').trim();
};

// Function to transform and validate each fish object
const transformFishData = (fish) => {
  // Split the name into genus and species
  const nameParts = fish.name ? fish.name.trim().split(/\s+/) : [];
  const genus = nameParts[0] || '';
  const species = nameParts.slice(1).join(' ') || '';

  // Transform images
  const images = fish.images.map((img, index) => {
    // Remove base URL if present
    let imgSrc = img.src;
    if (imgSrc.startsWith('http://www.israquarium.co.il/FishPhoto/')) {
      imgSrc = imgSrc.replace('http://www.israquarium.co.il/FishPhoto/', '');
    } else if (imgSrc.startsWith('https://www.israquarium.co.il/FishPhoto/')) {
      imgSrc = imgSrc.replace('https://www.israquarium.co.il/FishPhoto/', '');
    }

    // Decode URL encoding
    imgSrc = decodeURIComponent(imgSrc);

    // Replace spaces with underscores
    imgSrc = imgSrc.replace(/\s+/g, '_');

    const filename = path.basename(imgSrc).replace(/\.(jpg|jpeg)$/i, '.webp');

    return {
      src: filename,
      alt: `${fish.name} ${index + 1}`,
      creatorName: img.creatorName || '',
      originalSource: img.originalSource || '',
    };
  });

  // Parse temperatures
  const { minTemp, maxTemp } = parseTemperature(fish.minTemp, fish.maxTemp);

  // Parse pH
  const phParsed = parsePh(fish.ph);
  const minPh = phParsed ? phParsed.minPh : null;

  // Parse dGH
  const dghParsed = parseDGH(fish.dGH);
  const minDGH = dghParsed ? dghParsed.minDGH : null;

  // Generate a valid fishIndex ObjectId
  const fishIndexId = '668acc05985732c151744bf6';

  // Transform the fish object to match the new schema
  const transformedFish = {
    genus,
    species,
    latinName: fish.latinName || '',
    images,
    tribe: fish.tribe || '',
    firstDescription: fish.firstDescription || 'No specific description available',
    sources: fish.sources || '',
    tankVolume: standardizeVolume(fish.tankVolume || ''),
    fishSize: cleanDimension(fish.fishSize || ''),
    maxTemp: maxTemp !== undefined ? maxTemp : null,
    minTemp: minTemp !== undefined ? minTemp : null,
    ph: minPh !== undefined ? minPh : null,
    dGH: minDGH !== undefined ? minDGH : null,
    languages: fish.languages || {},
    fishIndices: [fishIndexId], // Provide at least one valid ObjectId
  };

  return transformedFish;
};

// Process all fish data
const transformedFishList = [];
const errors = [];
const fishSet = new Set(); // Set to track unique genus-species combinations

fishData.forEach((fish) => {
  const transformedFish = transformFishData(fish);

  // Validate the transformed fish data
  const { error, value } = fishSchema.validate(transformedFish);

  if (error) {
    console.error(`Validation error for fish ${fish.name}:`, error.details);
    errors.push({ fish: fish.name, errors: error.details });
  } else {
    // Create a unique key based on genus and species
    const genus = value.genus || '';
    const species = value.species || '';
    const key = `${genus.toLowerCase().trim()} ${species.toLowerCase().trim()}`;

    if (fishSet.has(key)) {
      // Duplicate found
      console.warn(`Duplicate fish found and skipped: ${genus} ${species}`);
    } else {
      // No duplicate, add to set and list
      fishSet.add(key);
      transformedFishList.push(value);
    }
  }
});

// Write the transformed data to fishData.js
if (errors.length > 0) {
  console.error('Errors occurred during validation. Aborting write to apistogramaData.js.');
  // Optionally, write the errors to a log file or handle them as needed
} else {
  const outputPath = path.join(__dirname, 'apistogramaData.js');
  const outputData = `
  // apistogramaData.js

  const mongoose = require('mongoose');

  const apistograma = ${JSON.stringify(transformedFishList, null, 2)};

  module.exports = { apistograma };
  `;

  fs.writeFileSync(outputPath, outputData, 'utf-8');
  console.log('apistogramaData.js has been successfully generated.');
}
