//fish_index_data.js

const mongoose = require('mongoose');

const fishIndex = [
    {
        _id: new mongoose.Types.ObjectId('668acc05985732c151744bf4'),
        hebrew: "שרייניים",
        english: "Loricariidae",
        russian: "Лорика́риевые",
        image: {
            src: 'Loricariidae.jpg',
            alt: 'Loricariidae',
            creatorName: 'John Doe',
            originalSource: 'http://example.com/image1',
        },
        fishes: [new mongoose.Types.ObjectId('60d5ec49f1b2f9a7d1234561')]
    },
    {
        _id: new mongoose.Types.ObjectId('668acc05985732c151744bf5'),
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
        _id: new mongoose.Types.ObjectId('668acc05985732c151744bf6'),
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
        _id: new mongoose.Types.ObjectId('668acc05985732c151744bf7'),
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
        _id: new mongoose.Types.ObjectId('668acc05985732c151744bf8'),
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
        _id: new mongoose.Types.ObjectId('668acc05985732c151744bf9'),
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
        _id: new mongoose.Types.ObjectId('668acc05985732c151744bfa'),
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
        _id: new mongoose.Types.ObjectId('668acc05985732c151744bfb'),
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
        _id: new mongoose.Types.ObjectId('668acc05985732c151744bfc'),
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
        _id: new mongoose.Types.ObjectId('668acc05985732c151744bfd'),
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
        _id: new mongoose.Types.ObjectId('668acc05985732c151744bfe'),
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
        _id: new mongoose.Types.ObjectId('668acc05985732c151744bff'),
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
        _id: new mongoose.Types.ObjectId('668acc05985732c151744c00'),
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
        _id: new mongoose.Types.ObjectId('668acc05985732c151744c01'),
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
        _id: new mongoose.Types.ObjectId('668acc05985732c151744c02'),
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
