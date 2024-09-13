// generatePlantData.js

const fs = require('fs');
const path = require('path');
const Joi = require('joi');
const { plantSchema } = require('../schemas/plantSchemas');
const mongoose = require('mongoose');

// Read the plant_data.json file
const plantDataPath = path.join(__dirname, '../../scrapper/plant_scrapper/plant_data.json');
const rawData = fs.readFileSync(plantDataPath, 'utf-8');
const plantData = JSON.parse(rawData);

// Helper functions
const translateField = (value, fieldName) => {
  const translations = {
    light: {
      'חזק - חזק מאוד': 'Strong to very strong',
      'חזק מאוד': 'Very strong',
      'בינוני-גבוה': 'Medium to high',
      'בינוני': 'Medium',
      'נמוך': 'Low',
      'חזק': 'Strong',
    },
    growthRate: {
      'בינונית': 'Moderate',
      'מהירה': 'Fast',
      'איטית': 'Slow',
    },
    placement: {
      'קדמי - אמצעי': 'Foreground to midground',
      'אמצעי - קדמי': 'Midground to foreground',
      'אמצעי': 'Midground',
      'קדמי': 'Foreground',
      'אמצעי - אחורי': 'Midground to background',
      'אחורי - אמצעי': 'Background to midground',
      'אחורי': 'Background',
    },
  };
  return translations[fieldName] && translations[fieldName][value] ? translations[fieldName][value] : value;
};

const cleanDimension = (value) => {
  return value.replace('sm.', 'cm').replace('ס"מ', 'cm').replace('.', '').trim();
};

const cleanHardness = (value) => {
  if (value === 'N/A') return 'N/A';
  return value.replace('°', 'dGH').trim();
};

const standardizePH = (value) => {
  return value.replace('-', ' - ').replace('–', ' - ').trim();
};

const standardizeTemperature = (value) => {
  return value.replace('°C', '°C').replace(' C', '°C').trim();
};

// Function to transform and validate each plant object
const transformPlantData = (plant) => {
  // Generate a new ObjectId if _id is missing or invalid
  let _id;
  try {
    _id = new mongoose.Types.ObjectId(plant._id);
  } catch (e) {
    _id = new mongoose.Types.ObjectId();
  }

  // Transform images
  const images = plant.images.map((img, index) => {
    // Remove base URL if present
    let imgSrc = img.src;
    if (imgSrc.startsWith('http://www.israquarium.co.il/PlantsPhoto/')) {
      imgSrc = imgSrc.replace('http://www.israquarium.co.il/PlantsPhoto/', '');
    } else if (imgSrc.startsWith('https://www.israquarium.co.il/PlantsPhoto/')) {
      imgSrc = imgSrc.replace('https://www.israquarium.co.il/PlantsPhoto/', '');
    }

    // Decode URL encoding
    imgSrc = decodeURIComponent(imgSrc);

    // Replace spaces with underscores
    imgSrc = imgSrc.replace(/\s+/g, '_');

    // Get the filename
    const filename = path.basename(imgSrc);

    return {
      src: filename,
      alt: `${plant.name} ${index + 1}`,
      creatorName: img.creatorName || '',
      originalSource: img.originalSource || '',
    };
  });

  // Map the languages object to include en, he, and ru (add empty objects if missing)
  const languages = {
    he: plant.languages.he || {},
    en: {}, // Placeholder for English translations
    ru: {}, // Placeholder for Russian translations
  };

  // Transform the plant object to match the schema
  const transformedPlant = {
    _id,
    name: plant.name || '',
    latinName: plant.latinName || '',
    images,
    firstDescription: plant.firstDescription || 'No specific description available',
    sources: plant.sources || '',
    height: cleanDimension(plant.height || ''),
    width: cleanDimension(plant.width || ''),
    temperature: standardizeTemperature(plant.temperature || ''),
    ph: standardizePH(plant.ph || ''),
    hardness: cleanHardness(plant.hardness || 'N/A'),
    light: translateField(plant.light || '', 'light'),
    growthRate: translateField(plant.growthRate || '', 'growthRate'),
    placement: translateField(plant.placement || '', 'placement'),
    languages,
  };

  return transformedPlant;
};

// Process all plant data
const transformedPlants = [];
const errors = [];

plantData.forEach((plant) => {
  const transformedPlant = transformPlantData(plant);

  // Validate the transformed plant data
  const { error, value } = plantSchema.validate(transformedPlant);

  if (error) {
    console.error(`Validation error for plant ${plant.name}:`, error.details);
    errors.push({ plant: plant.name, errors: error.details });
  } else {
    transformedPlants.push(value);
  }
});

// Write the transformed data to plantData.js
if (errors.length > 0) {
  console.error('Errors occurred during validation. Aborting write to plantData.js.');
} else {
  const outputPath = path.join(__dirname, 'plantData.js');
  const outputData = `
// plantData.js

const mongoose = require('mongoose');

const plants = ${JSON.stringify(transformedPlants, null, 2)};

module.exports = { plants };
  `;

  fs.writeFileSync(outputPath, outputData, 'utf-8');
  console.log('plantData.js has been successfully generated.');
}
