//fish_index_data.js

const mongoose = require('mongoose');

const fishIndex = [
    {
        _id: new mongoose.Types.ObjectId(),
        hebrew: "קורידורוסים",
        english: "Corydoras",
        russian: "Коридорасы",
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
        hebrew: "דגי קשקשת",
        english: "Rainbowfish",
        russian: "Радужные рыбы",
        fishes: []
    },
    {
        _id: new mongoose.Types.ObjectId(),
        hebrew: "אפרו נוניס",
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
        hebrew: "בטה",
        english: "Betta",
        russian: "Бетта",
        fishes: []
    },
    {
        _id: new mongoose.Types.ObjectId(),
        hebrew: "גסטרופלקוס",
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
        hebrew: "אולונקרה",
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
