//fish_index_data.js

const mongoose = require('mongoose');

const fishIndex = [
    {
        _id: new mongoose.Types.ObjectId(),
        hebrew: "קורידורוסים",
        english: "Corydoras",
        russian: "Коридорасы",
        image: {
            src: 'Corydoras.jpg',
            alt: 'Corydoras',
            creatorName: 'John Doe',
            originalSource: 'http://example.com/image1',
        },
        fishes: []
    },
    {
        _id: new mongoose.Types.ObjectId(),
        hebrew: "אפיסטוגרמה",
        english: "Apistogramma",
        russian: "Апистограмма",
        image: {
            src: 'Apistogramma.jpg',
            alt: 'Apistogramma',
            creatorName: 'John Doe',
            originalSource: 'http://example.com/image1',
        },
        fishes: []
    },
    {
        _id: new mongoose.Types.ObjectId(),
        hebrew: "ברבוסים",
        english: "Barbus",
        russian: "Барбусы",
        image: {
            src: 'Barbus.jpg',
            alt: 'Barbus',
            creatorName: 'John Doe',
            originalSource: 'http://example.com/image1',
        },
        fishes: []
    },
    {
        _id: new mongoose.Types.ObjectId(),
        hebrew: "דגי קשת",
        english: "Rainbowfish",
        russian: "Радужные рыбы",
        image: {
            src: 'Rainbowfish.jpg',
            alt: 'Rainbowfish',
            creatorName: 'John Doe',
            originalSource: 'http://example.com/image1',
        },
        fishes: []
    },
    {
        _id: new mongoose.Types.ObjectId(),
        hebrew: "אפרונונים",
        english: "Nannostomus",
        russian: "Нанностомус",
        image: {
            src: 'Nannostomus.jpg',
            alt: 'Nannostomus',
            creatorName: 'John Doe',
            originalSource: 'http://example.com/image1',
        },
        fishes: []
    },
    {
        _id: new mongoose.Types.ObjectId(),
        hebrew: "בוטיות",
        english: "Botia",
        russian: "Боции",
        image: {
            src: 'Botia.jpg',
            alt: 'Botia',
            creatorName: 'John Doe',
            originalSource: 'http://example.com/image1',
        },
        fishes: []
    },
    {
        _id: new mongoose.Types.ObjectId(),
        hebrew: "דגי קרב",
        english: "Betta",
        russian: "Бетта",   image: {
            src: 'Betta.jpg',
            alt: 'Betta',
            creatorName: 'John Doe',
            originalSource: 'http://example.com/image1',
        },
        fishes: []
    },
    {
        _id: new mongoose.Types.ObjectId(),
        hebrew: "גרזנים",
        english: "Gasteropelecus",
        russian: "Гастропелекус",
        image: {
            src: 'Gasteropelecus.jpg',
            alt: 'Gasteropelecus',
            creatorName: 'John Doe',
            originalSource: 'http://example.com/image1',
        },
        fishes: []
    },
    {
        _id: new mongoose.Types.ObjectId(),
        hebrew: "למפרולוגוסים",
        english: "Lamprologus",
        russian: "Лампрологусы",
        image: {
            src: 'Lamprologus.jpg',
            alt: 'Lamprologus',
            creatorName: 'John Doe',
            originalSource: 'http://example.com/image1',
        },
        fishes: []
    },
    {
        _id: new mongoose.Types.ObjectId(),
        hebrew: "פיקוקים",
        english: "Aulonocara",
        russian: "Аулонокара",
        image: {
            src: 'Aulonocara.jpg',
            alt: 'Aulonocara',
            creatorName: 'John Doe',
            originalSource: 'http://example.com/image1',
        },
        fishes: []
    },
    {
        _id: new mongoose.Types.ObjectId(),
        hebrew: "ג'ולידוכרומיס",
        english: "Julidochromis",
        russian: "Жюлидохромис",   image: {
            src: 'Julidochromis.jpg',
            alt: 'Julidochromis',
            creatorName: 'John Doe',
            originalSource: 'http://example.com/image1',
        },
        fishes: []
    },
    {
        _id: new mongoose.Types.ObjectId(),
        hebrew: "אוטוסינקלוס",
        english: "Otocinclus",
        russian: "Отоцинклюс",
        image: {
            src: 'Otocinclus.jpg',
            alt: 'Otocinclus',
            creatorName: 'John Doe',
            originalSource: 'http://example.com/image1',
        },
        fishes: []
    },
    {
        _id: new mongoose.Types.ObjectId(),
        hebrew: "טרופיאוס",
        english: "Tropheus",
        russian: "Трофеус",
        image: {
            src: 'Tropheus.jpg',
            alt: 'Tropheus',
            creatorName: 'John Doe',
            originalSource: 'http://example.com/image1',
        },
        fishes: []
    },
    {
        _id: new mongoose.Types.ObjectId(),
        hebrew: "דיקרוסיס",
        english: "Dicrossus",
        russian: "Дикроссус",
        image: {
            src: 'Dicrossus.jpg',
            alt: 'Dicrossus',
            creatorName: 'John Doe',
            originalSource: 'http://example.com/image1',
        },
        fishes: []
    }
];

module.exports = { fishIndex };
