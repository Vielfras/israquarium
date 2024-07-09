const mongoose = require('mongoose');

const fish = [
    {
        _id: new mongoose.Types.ObjectId('60d5ec49f1b2f9a7d1234561'),
        name: 'Acanthicus adonis',
        images: [
            { 
                src: 'Acanthicus_adonis.jpg', 
                alt: 'Acanthicus adonis 1',
                creatorName: 'John Doe',
                originalSource: 'http://example.com/image1',
            },
            { 
                src: 'Acanthicus_adonis1.jpg', 
                alt: 'Acanthicus adonis 2',
                creatorName: 'Jane Doe',
                originalSource: 'http://example.com/image2',
            },
            { 
                src: 'Acanthicus_adonis2.jpg', 
                alt: 'Acanthicus adonis 3',
                creatorName: 'John Doe',
                originalSource: 'http://example.com/image3',
            },
            { 
                src: 'Acanthicus_adonis4.jpg', 
                alt: 'Acanthicus adonis 4',
                creatorName: 'John Doe',
                originalSource: 'http://example.com/image4',
            },
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
        maxTemp: 30, 
        minTemp: 23, 
        ph: 7.0,     
        dGH: 10,     
        additionalRequirements: 'N/A',
        aquariumSetup: 'Shelters from driftwood, rocks, etc. are necessary.',
        intraspeciesCompatibility: 'Expressed aggression towards individuals of its own species from a young age.',
        interspeciesCompatibility: 'Aggressive towards other large plecos.',
        feeding: 'Omnivorous. Eats frozen bloodworms, shrimp meat, mollusks, fish, dry food, vegetables.',
        sexualDimorphism: 'Both males and females of this species have well-developed odontodes all over the body, but males have them more developed.',
        breeding: 'Breeding in captivity is possible.',
        additionalInformation: 'Albino specimens of this species are known.',
        sources: 'FishBase, PlanetCatfish',

        fishIndices: [new mongoose.Types.ObjectId('668acc05985732c151744bf4')]
    }
];

module.exports = { fish };
