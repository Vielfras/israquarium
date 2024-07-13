// plantData.js

const mongoose = require('mongoose');

const plants = [
  {
    _id: new mongoose.Types.ObjectId('669250722a39a728cb8ae20f'),
    name: 'Acorus gramineus',
    images: [
      { 
        src: 'Acorus_gramineus.jpg', 
        alt: 'Acorus gramineus 1',
        creatorName: 'John Doe',
        originalSource: 'http://example.com/image1',
      }
    ],
    latinName: 'Acorus gramineus Solander (1789)',
    firstDescription: 'Solander, 1789',
    sources: 'PlantBase',
    height: '15 - 30 cm',
    width: '10 - 20 cm',
    temperature: '18 - 23°C',
    ph: '6.5 - 7.5',
    hardness: 'N/A',
    light: 'Medium to high',
    growthRate: 'Moderate',
    placement: 'Foreground to midground',
    languages: {
      en: {
        family: 'Acoraceae',
        synonyms: 'Acorus calamus Loureiro, Acorus humilis Salisbury, Acorus tatarinowii Schott, Acorus pusillus Siebold',
        etymology: 'Acorus: Greek name for the plant, gramineus: resembling grass',
        distribution: 'Southeast Asia',
        notes: 'Usually dies within a few months in an aquarium. More suitable for paludarium or terrarium. Prefers cooler water.',
        propagation: 'Trimming and replanting. Trim about 10 cm.'
      },
      he: {
        family: 'אקורוסיים',
        synonyms: 'אקורוס קלמוס לוריירו, אקורוס הומיליס סליסבורי, אקורוס טטרינואי שוט, אקורוס פוסילוס סיבולד',
        etymology: 'אקורוס: שם יווני של הצמח, גרמינאוס: דומה לתבואה',
        distribution: 'דרום-מזרח אסיה',
        notes: 'בדרך כלל מת לאחר מספר חודשים באקווריום. מתאים יותר לפלודריום או לטראריום. מעדיף מים קרים.',
        propagation: 'גיזום ושתילה מחדש. מספיק לגזול כ-10 ס"מ.'
      },
      ru: {
        family: 'Акорусовые',
        synonyms: 'Акорус каламус Лурейро, Акорус хумилис Солсбери, Акорус татариноуи Шотт, Акорус пусиллус Зибольд',
        etymology: 'Акорус: греческое название растения, граминиус: похожий на траву',
        distribution: 'Юго-Восточная Азия',
        notes: 'Обычно умирает в течение нескольких месяцев в аквариуме. Более подходит для палюдариума или террариума. Предпочитает более прохладную воду.',
        propagation: 'Обрезка и пересадка. Обрезать около 10 см.'
      }
    },
  }
];

module.exports = { plants };
