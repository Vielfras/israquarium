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
  },
  {
    _id: new mongoose.Types.ObjectId('669250722a39a728cb8ae20e'),
    name: 'Bacopa caroliniana',
    images: [
      { 
        src: 'Bacopa_caroliniana.jpg', 
        alt: 'Bacopa caroliniana 1',
        creatorName: 'Yakov Oksman',
        originalSource: 'http://www.israquarium.co.il', 
      }
    ],
    latinName: 'Bacopa caroliniana Walter (1788)',
    firstDescription: 'Walter, 1788',
    sources: 'Israquarium',
    height: '20 - 60 cm',
    width: '5 - 12 cm',
    temperature: '20 - 26°C',
    ph: '6.4 - 7.5',
    hardness: '2 - 10 dGH',
    light: 'Strong to very strong',
    growthRate: 'Moderate',
    placement: 'Foreground to midground',
    languages: {
      en: {
        family: 'Scrophulariaceae',
        synonyms: 'Obolaria caroliniana Walter, Monniera amplexicaulis Michaux, Bacopa amplexicaulis (Michaux) Wettstein',
        etymology: 'Bacopa: name used by the people of Guyana, caroliniana: from Carolina',
        distribution: 'Southern and Central United States',
        notes: 'Relatively easy to grow, but requires strong light. Under strong light, leaves develop a reddish hue. Prefers soft water.',
        propagation: 'Trimming and replanting. Cut about 10 cm.'
      },
      he: {
        family: 'לועניתיים',
        synonyms: 'אובולאריה קרוליניאנה וולטר, מונירה אמפלקסיקוליס מישו, בקופה אמפלקסיקוליס (מישו) וטשטיין',
        etymology: 'בקופה: כך קוראים לצמח תושבי גאיאנה, קרוליניאנה: מקרולינה',
        distribution: 'דרום ומרכז ארצות הברית',
        notes: '.צמח קל יחסית לגידול, אך דורש אור חזק. באור חזק מופיעים עלים בגוון צבע אדום. אוהב מים רכים',
        propagation: 'גיזום ושתילה מחדש. מספיק לחתוך כ-10 ס"מ.'
      },
      ru: {
        family: 'Норичниковые',
        synonyms: 'Оболария каролиниана Уолтер, Моньера амплексикаулис Мишо, Бакопа амплексикаулис (Мишо) Веттштейн',
        etymology: 'Bacopa: название растения в Гайане, caroliniana: из Каролины',
        distribution: 'Юг и центральная часть Соединённых Штатов',
        notes: 'Относительно легко выращивать, но требует сильного освещения. При ярком свете листья приобретают красноватый оттенок. Предпочитает мягкую воду.',
        propagation: 'Обрезка и пересадка. Достаточно обрезать около 10 см.'
      }
    }
  },
  {
    _id: new mongoose.Types.ObjectId('669250722a39a728cb8ae20d'),
    name: 'Bacopa lanigera',
    images: [
      { 
        src: 'Bacopa_lanigera.jpg', 
        alt: 'Bacopa lanigera 1',
        creatorName: 'Yakov Oksman',
        originalSource: 'http://www.israquarium.co.il',
      }
    ],
    latinName: 'Bacopa lanigera',
    firstDescription: 'No specific description available',
    sources: 'Israquarium',
    height: '15 - 40 cm',
    width: '5 - 8 cm',
    temperature: '20 - 26°C',
    ph: '6.3 - 7.4',
    hardness: '4 - 16 dGH',
    light: 'Strong to very strong',
    growthRate: 'Fast',
    placement: 'Foreground, midground, background',
    languages: {
      en: {
        family: 'Scrophulariaceae',
        synonyms: 'No additional names available',
        etymology: 'Bacopa: name used by the people of Guyana, lanigera: specific epithet meaning "woolly"',
        distribution: 'South America',
        notes: 'Relatively easy to grow but requires strong light, soft acidic water, and CO2 nutrition. It quickly grows out of the water and is suitable for paludarium growth.',
        propagation: 'Trimming and replanting. Cut about 10 cm.'
      },
      he: {
        family: 'לועניתיים',
        synonyms: 'אין שמות נוספים',
        etymology: 'בקופה: כך קוראים לצמח תושבי גאיאנה, לניגרה: שם ספציפי שמשמעותו "צמרירי"',
        distribution: 'דרום אמריקה',
        notes: '. קל יחסית לגידול, אך יש לדאוג לאור חזק, מים רכים וחומציים ותזונה (CO2). מהר יוצא מהמים. מתאים לגידול בפלודריום',
        propagation: 'גיזום ושתילה מחדש. מספיק לגזום כ-10 ס"מ.'
      },
      ru: {
        family: 'Норичниковые',
        synonyms: 'Нет дополнительных названий',
        etymology: 'Bacopa: название растения в Гайане, lanigera: видовой эпитет, означающий "шерстистый"',
        distribution: 'Южная Америка',
        notes: 'Относительно легко выращивать, но требуется яркий свет, мягкая кислая вода и CO2. Быстро растет из воды. Подходит для палюдариума.',
        propagation: 'Обрезка и пересадка. Обрезать около 10 см.'
      }
    }
  }
  
];

module.exports = { plants };
