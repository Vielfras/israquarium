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
        fishes: []
    },
    {
        _id: new mongoose.Types.ObjectId(),
        hebrew: "ברבוסים",
        english: "Barbs",
        russian: "Барбусы",
        fishes: []
    },
    {
        _id: new mongoose.Types.ObjectId(),
        hebrew: "דגי קשת",
        english: "Rainbowfish",
        russian: "Радужные рыбы",
        fishes: []
    },
    {
        _id: new mongoose.Types.ObjectId(),
        hebrew: "אפרונונים",
        english: "Nannostomus",
        russian: "Нанностомус",
        fishes: []
    },
    {
        _id: new mongoose.Types.ObjectId(),
        hebrew: "בוטיות",
        english: "Botia",
        russian: "Боции",
        fishes: []
    },
    {
        _id: new mongoose.Types.ObjectId(),
        hebrew: "דגי קרב",
        english: "Betta",
        russian: "Бетта",
        fishes: []
    },
    {
        _id: new mongoose.Types.ObjectId(),
        hebrew: "גרזנים",
        english: "Gasteropelecus",
        russian: "Гастропелекус",
        fishes: []
    },
    {
        _id: new mongoose.Types.ObjectId(),
        hebrew: "למפרולוגוסים",
        english: "Lamprologus",
        russian: "Лампрологусы",
        fishes: []
    },
    {
        _id: new mongoose.Types.ObjectId(),
        hebrew: "פיקוקים",
        english: "Aulonocara",
        russian: "Аулонокара",
        fishes: []
    },
    {
        _id: new mongoose.Types.ObjectId(),
        hebrew: "ג'ולידוכרומיס",
        english: "Julidochromis",
        russian: "Жюлидохромис",
        fishes: []
    },
    {
        _id: new mongoose.Types.ObjectId(),
        hebrew: "אוטוסינקלוס",
        english: "Otocinclus",
        russian: "Отоцинклюс",
        fishes: []
    },
    {
        _id: new mongoose.Types.ObjectId(),
        hebrew: "טרופיאוס",
        english: "Tropheus",
        russian: "Трофеус",
        fishes: []
    },
    {
        _id: new mongoose.Types.ObjectId(),
        hebrew: "דיקרוסיס",
        english: "Dicrossus",
        russian: "Дикроссус",
        fishes: []
    }
];

module.exports = { fishIndex };
