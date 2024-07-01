const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const fish = [
    {
        _id: new mongoose.Types.ObjectId('60d5ec49f1b2f9a7d1234561'),
        name: 'Acanthicus adonis',
        images: [
            { src: '../assets/Acanthicus_adonis.jpg', alt: 'Acanthicus adonis 1' },
            { src: '../assets/Acanthicus_adonis1.jpg', alt: 'Acanthicus adonis 2' },
            { src: '../assets/Acanthicus_adonis2.jpg', alt: 'Acanthicus adonis 3' },
            { src: '../assets/Acanthicus_adonis4.jpg', alt: 'Acanthicus adonis 4' },
        ],
        subclass: 'Ray-finned (Actinopterygii)',
        order: 'Catfish-like (Siluriformes)',
        family: 'Armored Catfish (Loricariidae)',
        subfamily: 'Hypostomines (Hypostominae)',
        tribe: 'Ancistrini',
        latinName: 'Acanthicus adonis Isbrucker & Nijssen, 1988',
        firstDescription: 'Isbrucker, I. J. H. and Nijssen, H.',
        synonyms: 'Acanthicus adonis, Polka Dot Lyre Tail Pleco',
        etymology: 'Acanthicus: akantha (Greek): thorn, adonis (Greek): beautiful',
        distribution: 'Lower Amazon basin and Tocantins River (Tocantins), Brazil.',
        fishSize: 'up to 100 cm (SL)',
        tankVolume: 'from 500 liters',
        temp: '23 - 30°C',
        ph: '6.0-8.0',
        dGH: '5-15',
        additionalRequirements: 'N/A',
        aquariumSetup: 'Shelters from driftwood, rocks, etc. are necessary.',
        intraspeciesCompatibility: 'Expressed aggression towards individuals of its own species from a young age.',
        interspeciesCompatibility: 'Aggressive towards other large plecos.',
        feeding: 'Omnivorous. Eats frozen bloodworms, shrimp meat, mollusks, fish, dry food, vegetables.',
        sexualDimorphism: 'Both males and females of this species have well-developed odontodes all over the body, but males have them more developed.',
        breeding: 'Breeding in captivity is possible.',
        additionalInformation: 'Albino specimens of this species are known.',
        sources: 'FishBase, PlanetCatfish',
    }
];

module.exports = { fish };
