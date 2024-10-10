
// plantData.js

const mongoose = require('mongoose');

const plants = [
  {
    "name": "Acorus gramineus",
    "latinName": "Acorus gramineus",
    "images": [
      {
        "src": "Acorus_gramineus.webp",
        "alt": "Acorus gramineus 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "15 - 30 cm",
    "width": "10 - 20 cm",
    "temperature": "18 - 23°C",
    "ph": "6.5 - 7.5",
    "hardness": "N/A",
    "light": "Medium to high",
    "growthRate": "Moderate",
    "placement": "Foreground to midground",
    "languages": {
      "he": {
        "family": "Acoraceae",
        "synonyms": "אקורוס גרמינאוס, Acorus calamus, Loureiro, Acorus humilis, Salisbury, Acorus tatarinowii, Schott, Acorus pusillus, Siebold",
        "etymology": "Acorus - שם יווני של הצמח gramineus - דומה לתבואה עקב עלה דומה לתבואה",
        "distribution": "דרום-מזרח אסיה",
        "notes": "באקווריום בדרך כלל מת לאחר מספר חודשים .מתאים לפלודריום או לטראריום לך .מעדיף מיים קרים",
        "propagation": "גיזום ושתילה מחדש. מספיק לגזול כ-10 . ס\"מ"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Alternanthera ocipus",
    "latinName": "Alternanthera ocipus",
    "images": [
      {
        "src": "Alternanthera_ocipus.webp",
        "alt": "Alternanthera ocipus 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "25 - 50 cm",
    "width": "5 - 10  cm",
    "temperature": "22 - 28°C",
    "ph": "6.0  -  7.2",
    "hardness": "2.0 - 10.0dGH",
    "light": "Strong to very strong",
    "growthRate": "Moderate",
    "placement": "Midground",
    "languages": {
      "he": {
        "family": "Amaranthaceae",
        "synonyms": "אלטרננטרה אוסיפוס, Golden Water Hedge",
        "etymology": "alternus - משתנה anthera - אבקן מצביע על אבקנים עקרים ופריונים ocipus -",
        "distribution": "דרום אמריקה",
        "notes": "צמח נדיר יחסית וקשה לגידול. דורש מים . רכים וחומציים",
        "propagation": "גיזום ושתילה מחדש. מספיק לגזום כ-10 . ס\"מ"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Ammannia auriculata",
    "latinName": "Ammannia auriculata",
    "images": [
      {
        "src": "Ammannia_auriculata.webp",
        "alt": "Ammannia auriculata 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "10 - 50 cm",
    "width": "5 - 15 cm",
    "temperature": "20 - 25°C",
    "ph": "6.4  -  7.8",
    "hardness": "4 - 18dGHd",
    "light": "בינוני-חזק-חזק מאד",
    "growthRate": "בינונית - גבוהה",
    "placement": "אמצעי , אחורי",
    "languages": {
      "he": {
        "family": "Lythraceae",
        "synonyms": "אמניה אאוריקולטה, redstem, eared redstem, earleaf ammannia",
        "etymology": "Ammannia - בשם בוטניקאי P.Ammann (1634-1691) auriculata :",
        "distribution": "צפון אמריקה",
        "notes": ". צמח נדיר",
        "propagation": "גיזום ושתילה מחדש. מספיק לגזול כ-10 . ס\"מ"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Ammannia gracilis",
    "latinName": "Ammannia gracilis",
    "images": [
      {
        "src": "Ammannia_gracilis.webp",
        "alt": "Ammannia gracilis 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "30 - 60 cm",
    "width": "10 - 15 cm",
    "temperature": "22 - 28°C",
    "ph": "6.0  -  7.5",
    "hardness": "2 - 10dGHd",
    "light": "חזק-חזק מאד",
    "growthRate": "גבוהה - גבוהה מאוד",
    "placement": "אמצעי , אחורי",
    "languages": {
      "he": {
        "family": "Lythraceae",
        "synonyms": "אמניה גרסיליס, Ammannia diffusa, Hiern (non Willdenow)",
        "etymology": "Ammannia - בשם בוטניקאי P.Ammann (1634-1691) gracilis - אלגנטית",
        "distribution": "סנגל וגמביה, אפריקה",
        "notes": "צמח קשה לגידול. אוהב מים רכים וחומציים.\r\t   מראה את היופי שלו תחת תאורה חזקה מאוד, אז העלים מקבלים גוון אדום.\r\t   סימן לחוסר אור - השחרת ונפילת העלים . תחתונים",
        "propagation": "גיזום ושתילה מחדש. מספיק לגזול כ-10 . ס\"מ"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Ammannia senegalensis",
    "latinName": "Ammannia senegalensis",
    "images": [
      {
        "src": "Ammannia_senegalensis.webp",
        "alt": "Ammannia senegalensis 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "20 - 50 cm",
    "width": "8 - 13 cm",
    "temperature": "22 - 28°C",
    "ph": "6.0  -  7.5",
    "hardness": "2 - 10dGHd",
    "light": "חזק-חזק מאד",
    "growthRate": "גבוהה - גבוהה מאוד",
    "placement": "אמצעי , אחורי",
    "languages": {
      "he": {
        "family": "Lythraceae",
        "synonyms": "אמניה סנגלית, Red Ammannia, Ammannia diffusa, Willdenow non Hiern, A. filiformis, De Candole, A. salsuginosa, Guillemin & Perrottet",
        "etymology": "Ammannia - בשם בוטניקאי P.Ammann (1634-1691) senegalensis - מסנגל",
        "distribution": "אפריקה",
        "notes": "צמח קשה לגידול, דורש אור חזק וישיר ותוספות תזונה. אם אין מספיק אור העלים התחתונים\r\t   משחירים ונופלים. תחת אור מאוד . חזק העלים נעשים אדומים",
        "propagation": "גיזום ושתילה מחדש. מספיק לגזול כ-10 . ס\"מ"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Anubias afzelii",
    "latinName": "Anubias afzelii",
    "images": [
      {
        "src": "Anubias_afzelii.webp",
        "alt": "Anubias afzelii 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "20 - 70 cm",
    "width": "10 - 30 cm",
    "temperature": "22 - 26°C",
    "ph": "6.4  -  7.5",
    "hardness": "2 - 12dGHd",
    "light": "בינוני - נמוך",
    "growthRate": "Moderate",
    "placement": "אמצעי , אחורי",
    "languages": {
      "he": {
        "family": "Araceae",
        "synonyms": "אנוביאס אפצלי",
        "etymology": "Anubias - בשם אל מצריים עתיקה אנוביס afzelii - בשם בוטניקאי שוודי Adam Afzelius (1750-1837)",
        "distribution": "סנגל, גבינאיה, מלי, סיארה-לאונה",
        "notes": ".צומח מאוד איטי יותר טוב לקנות צמחים צעירים בגודל קטן-בינוני, כי הם נקלטים טוב יותר.\r\t   בשתילת הצמח יש לדאוג שהגבעול יהיה מעל המצא . ורק השורשים להשתיל בתוך המצע",
        "propagation": "מתפשת לצדדים מהגבעול המרכזי. ניתן . לחתוך ענף צדדי להשתילו מחדש"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Anubias barteri var. angustifolia",
    "latinName": "Anubias barteri",
    "images": [
      {
        "src": "Anubias_barteri_var_angustifolia.webp",
        "alt": "Anubias barteri var. angustifolia 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "10 - 25 cm",
    "width": "10 - 20 cm",
    "temperature": "22 - 26°C",
    "ph": "6.2  -  7.8",
    "hardness": "2 - 14dGHd",
    "light": "Medium",
    "growthRate": "Moderate",
    "placement": "Midground",
    "languages": {
      "he": {
        "family": "Araceae",
        "synonyms": "אנוביאס אנגוסטיפוליה, Anubias lanceolata f. angustifolia, Engler (1915)",
        "etymology": "Anubias - בשם אל מצריים עתיקה אנוביס angustifolia - עלים צרים",
        "distribution": "גבינאיה, ליבריה, קמרון",
        "notes": ".צומח מאוד איטי יותר טוב לקנות צמחים צעירים בגודל קטן-בינוני, כי הם נקלטים טוב יותר.\r\t   בשתילת הצמח יש לדאוג שהגבעול יהיה מעל המצא . ורק השורשים להשתיל בתוך המצע",
        "propagation": "מתפשת לצדדים מהגבעול המרכזי. ניתן . לחתוך ענף צדדי להשתילו מחדש"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Anubias barteri var. barteri",
    "latinName": "Anubias barteri",
    "images": [
      {
        "src": "Anubias_barteri_var_barteri.webp",
        "alt": "Anubias barteri var. barteri 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "15 - 30 cm",
    "width": "15 - 40 cm",
    "temperature": "22 - 26°C",
    "ph": "6.4  -  7.8",
    "hardness": "2 - 14dGHd",
    "light": "בינוני - נמוך",
    "growthRate": "Moderate",
    "placement": "Midground",
    "languages": {
      "he": {
        "family": "Araceae",
        "synonyms": "אנוביאס ברטרי",
        "etymology": "Anubias - בשם אל מצריים עתיקה אנוביס barteri - בשם נטורליסט Charles Barter",
        "distribution": "דרום-מזרח ניגריה, קמרון, גבינאיה אקבטוריאלית",
        "notes": "נפוץ מאוד. בגלל עלים הקשים ניתן להשתמש בו לעיצוב אקווריום עם . ציקלידים צמחוניים .לא אוהב אור חזק\r\t\t.צומח מאוד איטי יותר טוב לקנות צמחים צעירים בגודל קטן-בינוני, כי הם נקלטים טוב יותר.\r\t   בשתילת הצמח יש לדאוג שהגבעול יהיה מעל המצא . ורק השורשים להשתיל בתוך המצע",
        "propagation": "מתפשת לצדדים מהגבעול המרכזי. ניתן . לחתוך ענף צדדי להשתילו מחדש"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Anubias barteri var. caladiifolia",
    "latinName": "Anubias barteri",
    "images": [
      {
        "src": "Anubias_barteri_var_caladiifolia.webp",
        "alt": "Anubias barteri var. caladiifolia 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "15 - 65 cm",
    "width": "20 - 70 cm",
    "temperature": "22 - 26°C",
    "ph": "6.2  -  7.8",
    "hardness": "2 - 14dGHd",
    "light": "Medium",
    "growthRate": "Moderate",
    "placement": "Midground",
    "languages": {
      "he": {
        "family": "Araceae",
        "synonyms": "אנוביאס קלדיפוליה",
        "etymology": "Anubias - בשם אל מצריים עתיקה אנוביס caladiifolia - עלים דומים לצמח (Caladium) קלדיום",
        "distribution": "ניגריה, קמרון",
        "notes": "הגדול בין האנוביאסים ברטרי, מומלץ . לאקווריומים מאוד גבוהים .צומח איטי יותר טוב לקנות צמחים צעירים בגודל קטן-בינוני, כי הם נקלטים טוב יותר.\r\t   בשתילת הצמח יש לדאוג שהגבעול יהיה מעל המצא . ורק השורשים להשתיל בתוך המצע",
        "propagation": "מתפשת לצדדים מהגבעול המרכזי. ניתן . לחתוך ענף צדדי להשתילו מחדש"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Anubias barteri var. glabra",
    "latinName": "Anubias barteri",
    "images": [
      {
        "src": "Anubias_barteri_var_glabra.webp",
        "alt": "Anubias barteri var. glabra 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "10 - 35 cm",
    "width": "15 - 35 cm",
    "temperature": "22 - 26°C",
    "ph": "6.2  -  7.2",
    "hardness": "2 - 10dGHd",
    "light": "Medium",
    "growthRate": "Moderate",
    "placement": "אמצעי , קדמי",
    "languages": {
      "he": {
        "family": "Araceae",
        "synonyms": "אנוביאס גלברה",
        "etymology": "Anubias - בשם אל מצריים עתיקה אנוביס glabra - חלק , ערום",
        "distribution": "אפריקה",
        "notes": ".צומח מאוד איטי יותר טוב לקנות צמחים צעירים בגודל קטן-בינוני, כי הם נקלטים טוב יותר.\r\t   בשתילת הצמח יש לדאוג שהגבעול יהיה מעל המצא . ורק השורשים להשתיל בתוך המצע",
        "propagation": "מתפשת לצדדים מהגבעול המרכזי. ניתן . לחתוך ענף צדדי להשתילו מחדש"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Anubias barteri var. nana",
    "latinName": "Anubias barteri",
    "images": [
      {
        "src": "Anubias_barteri_var_nana.webp",
        "alt": "Anubias barteri var. nana 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "5 - 15 cm",
    "width": "5 - 20 cm",
    "temperature": "22 - 28°C",
    "ph": "6.6  -  7.8",
    "hardness": "4 - 14dGH",
    "light": "בינוני , נמוך",
    "growthRate": "נמוכה, בינונית",
    "placement": "Foreground",
    "languages": {
      "he": {
        "family": "Araceae",
        "synonyms": "אנוביאס ננה, Anubias nana, Engler (1899)",
        "etymology": "Anubias - בשם אל מצריים עתיקה אנוביס nana - ננסי",
        "distribution": "קמרון",
        "notes": ". אנוביאס נפוץ מאוד, קל לגידול .לא מומלץ אור חזק צומח די איטי.\r\t   השורשים חייבים להיות מעט מעל החצץ , אם הם עמוק בחצץ הצמיחה גרועה יותר והשורשים נרקבים.\r\t   ניתן אף להשאיר צמח מעל חצץ או באקווריום ללא . חצץ. ניתן גם לחזק את הצמח לגזע עץ",
        "propagation": "מתפשת לצדדים מהגבעול המרכזי. ניתן . לחתוך ענף צדדי להשתילו מחדש"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Anubias gigantea",
    "latinName": "Anubias gigantea",
    "images": [
      {
      "src": "Anubias gigantea.webp",
      "alt": "Unavailabe",
      "creatorName": "",
      "originalSource": ""
    }
  ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "30 - 105 cm",
    "width": "25 - 80 cm",
    "temperature": "22 - 28°C",
    "ph": "",
    "hardness": "N/A",
    "light": "",
    "growthRate": "",
    "placement": "",
    "languages": {
      "he": {
        "family": "Araceae",
        "synonyms": "אנוביאס ענק, Anubias gigantea, Chevalier, var., tripartita, Chevalier, (nomen nundum), Anubias hastifolia, Engler, var., robusta, Engler",
        "etymology": "Anubias - בשם אל מצריים עתיקה אנוביס gigantea - ענקי, עקב עלים גדולים",
        "distribution": "אפריקה",
        "notes": "בדרך כלל לא מגדלים אותו באקווריום , אלא . בפלודריומים",
        "propagation": "מתפשת לצדדים מהגבעול המרכזי. ניתן . לחתוך ענף צדדי להשתילו מחדש"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Anubias gilletii",
    "latinName": "Anubias gilletii",
    "images": [
      {
        "src": "Anubias_gilletii.webp",
        "alt": "Anubias gilletii 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "10 - 30 cm",
    "width": "10 - 25 cm",
    "temperature": "22 - 26°C",
    "ph": "6.4  -  7.4",
    "hardness": "4 - 12",
    "light": "Medium",
    "growthRate": "Moderate",
    "placement": "קדמי, אמצעי",
    "languages": {
      "he": {
        "family": "Araceae",
        "synonyms": "אנוביאס ג'ילטה",
        "etymology": "Anubias - בשם אל מצריים עתיקה אנוביס gilletii - בשם נטורליסט J.Gillet (1866-1943)",
        "distribution": "ניגריה, קמרון, גבון, קונגו, זאיר",
        "notes": "סוג שגודל במים. מאוד דומה לסוגי של .אנוביאס ברטרי .צומח איטי יותר טוב לקנות צמחים צעירים בגודל קטן-בינוני, כי הם נקלטים טוב יותר.\r\t   בשתילת הצמח יש לדאוג שהגבעול יהיה מעל המצא . ורק השורשים להשתיל בתוך המצע",
        "propagation": "מתפשת לצדדים מהגבעול המרכזי. ניתן . לחתוך ענף צדדי להשתילו מחדש"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Anubias gracilis",
    "latinName": "Anubias gracilis",
    "images": [
      {
        "src": "Anubias_gracilis.webp",
        "alt": "Anubias gracilis 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "10 - 30 cm",
    "width": "10 - 25 cm",
    "temperature": "22 - 26°C",
    "ph": "6.4  -  7.4",
    "hardness": "4 - 12",
    "light": "Medium",
    "growthRate": "Moderate",
    "placement": "אמצעי , אחורי",
    "languages": {
      "he": {
        "family": "Araceae",
        "synonyms": "אנוביאס גרציליס",
        "etymology": "Anubias - בשם אל מצריים עתיקה אנוביס gracilis - תמיר",
        "distribution": "סיארה-לאונה",
        "notes": "לא מתאים לאקווריום, במים מת תוך חודשים . ספורים .מתאים לגידול בפלודריום",
        "propagation": "מתפשת לצדדים מהגבעול המרכזי. ניתן . לחתוך ענף צדדי להשתילו מחדש"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Aponogeton abyssinicus",
    "latinName": "Aponogeton abyssinicus",
    "images": [
      {
        "src": "Aponogeton_abyssinicus.webp",
        "alt": "Aponogeton abyssinicus 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "10 - 15 cm",
    "width": "10 - 15 cm",
    "temperature": "24 - 28°C",
    "ph": "6.0  -  7.2",
    "hardness": "1 - 6",
    "light": "Strong to very strong",
    "growthRate": "גבוהה",
    "placement": "Foreground",
    "languages": {
      "he": {
        "family": "Aponogetonaceae",
        "synonyms": "Aponogeton leptostachyus, E. Meyer, var. abyssinicus, (Hochstetter ex A. Richard), A. boehmii, Engler, A. braunlii, Krause, A. oblongus, A. Peter, Ouvirandra hildebrandtii, Eichler",
        "etymology": "Aponogeton - השם נוצר ממשפחת (Potamogeton) פוטמוגטון abyssinicus - (מאביסיניה (אטיופיה",
        "distribution": "מזרח אפריקה",
        "notes": "עלים העולים על פני המים צריך לגזור כדי . שעלים הבאים ישארו מתחת לפני המים",
        "propagation": ""
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Aponogeton boivinianus",
    "latinName": "Aponogeton boivinianus",
    "images": [
      {
        "src": "Aponogeton_boivinianus.webp",
        "alt": "Aponogeton boivinianus 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "30 - 90 cm",
    "width": "10 - 20 cm",
    "temperature": "22 - 25°C",
    "ph": "6.5  -  7.4",
    "hardness": "2 - 10",
    "light": "Strong to very strong",
    "growthRate": "גבוהה",
    "placement": "אמצי , אחורי",
    "languages": {
      "he": {
        "family": "Aponogetonaceae",
        "synonyms": "",
        "etymology": "Aponogeton - השם נוצר ממשפחת (Potamogeton) פוטמוגטון boivinianus - Boivin בשם נטורליסט",
        "distribution": "צפון מדגסקר",
        "notes": ".אוהב זרימת מים חזקה בתקופה שמתחיל להוריד עלים מומלץ לעבור לאור פחות חזק ולהוריד את הטמפרטורה של . המים ב2-3 מעלות .פקעת יש להחזיק מעט לחה בטמפרטורת חדר",
        "propagation": ""
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Aponogeton capuronii",
    "latinName": "Aponogeton capuronii",
    "images": [
      {
        "src": "Aponogeton_capuronii.webp",
        "alt": "Aponogeton capuronii 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "30 - 90 cm",
    "width": "10 - 20 cm",
    "temperature": "22 - 25°C",
    "ph": "6.0  -  6.8",
    "hardness": "1 - 6",
    "light": "בינוני , חזק",
    "growthRate": "גבוהה",
    "placement": "אמצי , אחורי",
    "languages": {
      "he": {
        "family": "Aponogetonaceae",
        "synonyms": "",
        "etymology": "Aponogeton - השם נוצר ממשפחת (Potamogeton) פוטמוגטון capuronii - R.P.R. Capuron בשם (1921-1971)",
        "distribution": "צפון מדגסקר",
        "notes": ".אוהב זרימת מים חזקה .גודל איטי , לא דורש תקופת מנוחה",
        "propagation": ""
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Aponogeton crispus",
    "latinName": "Aponogeton crispus",
    "images": [
      {
        "src": "Aponogeton_crispus.webp",
        "alt": "Aponogeton crispus 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "30 - 50 cm",
    "width": "10 - 20 cm",
    "temperature": "25 - 32°C",
    "ph": "6.4  -  7.0",
    "hardness": "2 - 10",
    "light": "בינוני , חזק",
    "growthRate": "גבוהה",
    "placement": "אמצי , אחורי",
    "languages": {
      "he": {
        "family": "Aponogetonaceae",
        "synonyms": "Aponogeton echinatum, Roxburg",
        "etymology": "Aponogeton - השם נוצר ממשפחת (Potamogeton) פוטמוגטון crispus - מקורזל , עקב גבול עלה",
        "distribution": "דרום הודו , שרי-לנקה",
        "notes": "למרות שלגידול צמח לא נידרשת תקופת המנוחה מומלץ פעם בכמה שנים להוציא פקעת\r\t   מהמים ולהחזיקה במקום יבש - זה . מונע התשה של הצמח",
        "propagation": ""
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Aponogeton elongatus",
    "latinName": "Aponogeton elongatus",
    "images": [
      {
        "src": "Aponogeton_elongatus.webp",
        "alt": "Aponogeton elongatus 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "25 - 50 cm",
    "width": "10 - 25 cm",
    "temperature": "23 - 28°C",
    "ph": "7  -  8",
    "hardness": "5 - 12",
    "light": "חזק , חזק מאוד",
    "growthRate": "גבוהה",
    "placement": "אמצי , אחורי",
    "languages": {
      "he": {
        "family": "Aponogetonaceae",
        "synonyms": "",
        "etymology": "Aponogeton - השם נוצר ממשפחת (Potamogeton) פוטמוגטון elongatus - מאורך",
        "distribution": "אבסטרליה",
        "notes": "אחרי 6-8 חודשים של צמיחה נדרשת תקופת מנוחה עד מספר חודשים.\r\t   במידה ואין תקופת . המנוחה פקעת נרקבת מהר",
        "propagation": ""
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Aponogeton longiplumulosus",
    "latinName": "Aponogeton longiplumulosus",
    "images": [
      {
        "src": "Aponogeton_longiplumulosus.webp",
        "alt": "Aponogeton longiplumulosus 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "25 - 70 cm",
    "width": "10 - 35 cm",
    "temperature": "22 - 26°C",
    "ph": "5.8  -  6.9",
    "hardness": "1 - 10",
    "light": "חזק , חזק מאוד",
    "growthRate": "גבוהה",
    "placement": "אמצי , אחורי",
    "languages": {
      "he": {
        "family": "Aponogetonaceae",
        "synonyms": "",
        "etymology": "Aponogeton - השם נוצר ממשפחת (Potamogeton) פוטמוגטון longiplumulosus: longi - ארוך plumulosis - אם נוצות, שערות מרובות",
        "distribution": "צפון-מערב מדגסקר",
        "notes": "קיימת תקופת מנוחה סדירה למספר חודשים .\r\t   לא חייבים להוציא פקעת מין המים",
        "propagation": ""
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Aponogeton madagascariensis",
    "latinName": "Aponogeton madagascariensis",
    "images": [
      {
        "src": "Aponogeton_madagascariensis.webp",
        "alt": "Aponogeton madagascariensis 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "25 - 100 cm",
    "width": "15 - 45 cm",
    "temperature": "18 - 26°C",
    "ph": "5.0  -  7.3",
    "hardness": "0 - 6",
    "light": "בינוני , חזק",
    "growthRate": "גבוהה",
    "placement": "אמצי",
    "languages": {
      "he": {
        "family": "Aponogetonaceae",
        "synonyms": "Uvirandra madagascariensis, Mirbel (1803), Aponogeton fenestralis, Hooker, A. henkelianus, H. Baum, A. guillotii, Hochreutiner",
        "etymology": "Aponogeton - השם נוצר ממשפחת (Potamogeton) פוטמוגטון madagascariensis - ממדגסקר",
        "distribution": "מדגסקר",
        "notes": ".לא מומלץ למתחילים .דורש זרימת מים טובה .דורש תקופות מנוחה סדירות",
        "propagation": ""
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Aponogeton natans",
    "latinName": "Aponogeton natans",
    "images": [
      {
        "src": "Aponogeton_natans.webp",
        "alt": "Aponogeton natans 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "15 - 50 cm",
    "width": "10 - 25 cm",
    "temperature": "26 - 30°C",
    "ph": "6.9  -  8.8",
    "hardness": "1 - 12",
    "light": "Very strong",
    "growthRate": "גבוהה",
    "placement": "Foreground",
    "languages": {
      "he": {
        "family": "Aponogetonaceae",
        "synonyms": "Saururus natans, Linné (1771), Aponogeton monostachyon, Linné",
        "etymology": "Aponogeton - השם נוצר ממשפחת (Potamogeton) פוטמוגטון natans - צף",
        "distribution": "שרי-לנקה , הודו",
        "notes": "לא כל כך מתאים לגידול באקווריום כי רק עלים ראשונים נמצאים\r\t   מתחת לפני המים , אך . שאר העלים כולם על פני המים",
        "propagation": ""
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Aponogeton rigidifolius",
    "latinName": "Aponogeton rigidifolius",
    "images": [
      {
        "src": "Aponogeton_rigidifolius.webp",
        "alt": "Aponogeton rigidifolius 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "40 - 120 cm",
    "width": "10 - 25 cm",
    "temperature": "23 - 28°C",
    "ph": "6.2  -  6.9",
    "hardness": "1 - 6",
    "light": "Strong to very strong",
    "growthRate": "גבוהה",
    "placement": "אחורי , אמצעי",
    "languages": {
      "he": {
        "family": "Aponogetonaceae",
        "synonyms": "",
        "etymology": "Aponogeton - השם נוצר ממשפחת (Potamogeton) פוטמוגטון rigidifolius - עלים קשים",
        "distribution": "שרי-לנקה",
        "notes": "יש לקנות צמחים יותר מ-10 ס\"מ.\r\t   לא דורש תקופת מנוחה.\r\t   מיקום אכי טוב - ליד הפילטר , כי צמח צריך זרימת מים טובה ורגיש מאוד .למים עומדים",
        "propagation": ""
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Aponogeton ulvaceus",
    "latinName": "Aponogeton ulvaceus",
    "images": [
      {
        "src": "Aponogeton_ulvaceus.webp",
        "alt": "Aponogeton ulvaceus 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "20 - 60 cm",
    "width": "10 - 45 cm",
    "temperature": "24 - 27°C",
    "ph": "6.2  -  7.2",
    "hardness": "2 - 10",
    "light": "Strong to very strong",
    "growthRate": "גבוהה",
    "placement": "אחורי , אמצעי",
    "languages": {
      "he": {
        "family": "Aponogetonaceae",
        "synonyms": "A. ambongensis, Jumelle, A. ulvaceus var. ambongensis, Jumelle, A. violaceus, Lagerheim",
        "etymology": "Aponogeton - השם נוצר ממשפחת (Potamogeton) פוטמוגטון ulvaceus - משם אולבה , משפחת אצות ים",
        "distribution": "מדגסקר",
        "notes": "צמח מאוד יפה.\r\t   צמחים אם פרחים סגולים לא דורשים תקופת מנוחה ויכולים לכלול עד כ-50 עלים.\r\t   צמחים אם פרחים לבנים וצהובים דורשים תקופות מנוחה סדירות.\r\t   מאוד רגיש לחוסר תזונה , לכן רצוי לתת לו תוספות תזונה .מתחת לשורשים",
        "propagation": ""
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Aponogeton undulatus",
    "latinName": "Aponogeton undulatus",
    "images": [
      {
        "src": "Aponogeton_undulatus.webp",
        "alt": "Aponogeton undulatus 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "20 - 60 cm",
    "width": "10 - 25 cm",
    "temperature": "22 - 28°C",
    "ph": "6.4  -  7.6",
    "hardness": "2 - 12",
    "light": "Strong to very strong",
    "growthRate": "מאוד גבוהה",
    "placement": "Midground",
    "languages": {
      "he": {
        "family": "Aponogetonaceae",
        "synonyms": "A. stachyosporus, de Wit",
        "etymology": "Aponogeton - השם נוצר ממשפחת (Potamogeton) פוטמוגטון undulatus - גלי",
        "distribution": "הודו , בנגלדש, בורמה, תאילנד, מלאיזיה, אינדונזיה",
        "notes": "לא דורש תקופת מנוחה.\r\t   בניגוד לשאר אפונוגטונים לאונדולטוס יש גם רבייה .ווגטטיבית",
        "propagation": ""
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Bacopa caroliniana",
    "latinName": "Bacopa caroliniana",
    "images": [
      {
        "src": "Bacopa_caroliniana.webp",
        "alt": "Bacopa caroliniana 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "20 - 60 cm",
    "width": "5 - 12 cm",
    "temperature": "20 - 26°C",
    "ph": "6.4  -  7.5",
    "hardness": "2 - 10",
    "light": "Strong to very strong",
    "growthRate": "Moderate",
    "placement": "קדמי , אמצעי",
    "languages": {
      "he": {
        "family": "Scrophulariaceae",
        "synonyms": "בקופה קרוליניאנה, Obolaria caroliniana, Walter, (1788), Monniera amplexicaulis, Michaux, Bacopa amplexicaulis, (Michaux) Wettstein",
        "etymology": "Bacopa : כך קוראים לצמח תושבי גאיאנה caroliniana : מקרולינה",
        "distribution": "דרום ומרכז ארצות הברית",
        "notes": ". צמח קל יחסית לגידול, אך דורש אור חזק . באור חזק מופיעים עלים בגוון צבע אדום .\r\t   אוהב מים רכים",
        "propagation": "גיזום ושתילה מחדש. מספיק לחתוך כ-10 . ס\"מ"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Bacopa lanigera",
    "latinName": "Bacopa lanigera",
    "images": [
      {
        "src": "Bacopa_lanigera.webp",
        "alt": "Bacopa lanigera 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "15 - 40 cm",
    "width": "5 - 8 cm",
    "temperature": "20 - 26°C",
    "ph": "6.3  -  7.4",
    "hardness": "4 - 16",
    "light": "Strong to very strong",
    "growthRate": "בינונית , גבוהה",
    "placement": "קדמי , אמצעי, אחורי",
    "languages": {
      "he": {
        "family": "Scrophulariaceae",
        "synonyms": "",
        "etymology": "Bacopa : כך קוראים לצמח תושבי גאיאנה lanigera :",
        "distribution": "דרום אמריקה",
        "notes": ", קל יחסית לגידול, אך יש לדאוג לאור חזק . (CO2)  מים רכים וחומציים ותזונה . מהר יוצא מהמים . מתאים לגידול בפלודריום",
        "propagation": "גיזום ושתילה מחדש. מספיק לגזום כ-10 . ס\"מ"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Bacopa madagascariensis",
    "latinName": "Bacopa madagascariensis",
    "images": [
      {
        "src": "Bacopa_madagascariensis.webp",
        "alt": "Bacopa madagascariensis 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "5 - 20 cm",
    "width": "3 - 6 cm",
    "temperature": "24 - 28°C",
    "ph": "4.8  -  7.4",
    "hardness": "2 - 10",
    "light": "Strong to very strong",
    "growthRate": "בינונית , גבוהה",
    "placement": "קדמי , אמצעי",
    "languages": {
      "he": {
        "family": "Scrophulariaceae",
        "synonyms": "בקופה מדגסקריאנסיס, Herpestis madagascariensis, Bentham, (1788)",
        "etymology": "Bacopa : כך קוראים לצמח תושבי גאיאנה madagascariensis :ממדגסקר",
        "distribution": "אי מדגסקר",
        "notes": "קשה לגידול. דורש אור חזק מאוד ומים רכים וחומציים. בחוסר אור עלים התחתונים\r\t   נופלים . וצמח נעשה שביר . מתאים לגידול בפלודריום",
        "propagation": "גיזום ושתילה מחדש. מספיק לגזום כ-10 . ס\"מ"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Bacopa monnieri",
    "latinName": "Bacopa monnieri",
    "images": [
      {
        "src": "Bacopa_monnieri.webp",
        "alt": "Bacopa monnieri 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "20 - 40 cm",
    "width": "5 - 8 cm",
    "temperature": "15 - 30°C",
    "ph": "6.0  -  7.9",
    "hardness": "2 - 16",
    "light": "בינוני - חזק",
    "growthRate": "Moderate",
    "placement": "קדמי , אמצעי",
    "languages": {
      "he": {
        "family": "Scrophulariaceae",
        "synonyms": "בקופה מוניארי, Lysimachia monnieri, Linné, (1756), Gratiola monnieri, Linné, Gratiola monnieria, Linné, Herpestis monnieria, Kunth, Bacopa monnieria, Wettstein",
        "etymology": "Bacopa - כך קוראים לצמח תושבי גאיאנה monnieri - G. L. Le. Monnier בשם",
        "distribution": "בכל העולם",
        "notes": ". צמח קל יחסית לגידול, אך דורש אור חזק . באור חזק מופיעים עלים בגוון צבע אדום .\r\t   אוהב מים רכים",
        "propagation": "גיזום ושתילה מחדש. מספיק לחתוך כ-10 . ס\"מ"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Bacopa myriophylloides",
    "latinName": "Bacopa myriophylloides",
    "images": [
      {
        "src": "Bacopa_myriophylloides.webp",
        "alt": "Bacopa myriophylloides 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "15 - 40 cm",
    "width": "4 - 8 cm",
    "temperature": "23 - 28°C",
    "ph": "5.5  -  6.8",
    "hardness": "0 - 8",
    "light": "Strong to very strong",
    "growthRate": "גבוהה מאוד",
    "placement": "קדמי , אמצעי, אחורי",
    "languages": {
      "he": {
        "family": "Scrophulariaceae",
        "synonyms": "בקופה מיריופילואידס, Herpestis myriophylloides, Bentham (1846)",
        "etymology": "Bacopa : כך קוראים לצמח תושבי גאיאנה myriophylloides : דומה למשפחת מיריופילום (Myriophyllum)",
        "distribution": "ברזיל",
        "notes": "רגיש מאוד לחוסר תזונה ומפסיק לצמוח וגם העלים נעשים שבורים מאוד\r\t   גודל טוב רק . במים רכים וחומציים. דורש אור חזק",
        "propagation": "גיזום ושתילה מחדש. מספיק לחתוך כ-10 . ס\"מ"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Bacopa reflexa",
    "latinName": "Bacopa reflexa",
    "images": [
      {
        "src": "Bacopa_reflexa.webp",
        "alt": "Bacopa reflexa 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "20 - 50 cm",
    "width": "3 - 6 cm",
    "temperature": "24 - 28°C",
    "ph": "4.8  -  7.4",
    "hardness": "2 - 10",
    "light": "Strong to very strong",
    "growthRate": "גבוהה",
    "placement": "Midground",
    "languages": {
      "he": {
        "family": "Scrophulariaceae",
        "synonyms": "בקופה רפלקסה, Herpestis reflexa, Bentham",
        "etymology": "Bacopa : כך קוראים לצמח תושבי גאיאנה reflexa :",
        "distribution": "מרכז ודרום אמריקה",
        "notes": ". קשה לגידול, דורש אור חזק ותוספת תזונה",
        "propagation": "גיזום ושתילה מחדש. מספיק לגזום כ-10 . ס\"מ"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Barclaya longifolia",
    "latinName": "Barclaya longifolia",
    "images": [
      {
        "src": "Barclaya_longifolia.webp",
        "alt": "Barclaya longifolia 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "15 - 55 cm",
    "width": "10 - 25 cm",
    "temperature": "25 - 28°C",
    "ph": "5.9  -  7.2",
    "hardness": "2 - 10",
    "light": "Strong",
    "growthRate": "גבוהה מאוד",
    "placement": "Midground",
    "languages": {
      "he": {
        "family": "Nymphaeaceae",
        "synonyms": "Hydrostemma longifolium, (Wallich) Mabberley, Barclaya pierreana, Gagnepain, B. oblonga, Wall",
        "etymology": "Barclaya - לכבוד בוטניקאי אנגלי Robert Barclay (1751 - 1830) longifolia -  עלים ארוכים",
        "distribution": "בורמה, תאילנד, סומטרה, דרום אינדוסטאן",
        "notes": ".מומלצ לתת תוספות תזונה מתחת לצמח . העלים העדינים אהובים מאוד על ידי חלזונות בדרך כלל לאחר תקופת צמיחה חזקה לכמה . שבועות הצמיחה נעצרת ואז מתחדשת",
        "propagation": ""
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Barclaya motleyi",
    "latinName": "Barclaya motleyi",
    "images": [
      {
        "src": "Barclaya_motleyi.webp",
        "alt": "Barclaya motleyi 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "10 - 30 cm",
    "width": "8 - 15 cm",
    "temperature": "23 - 27°C",
    "ph": "5.5  -  6.8",
    "hardness": "0 - 5",
    "light": "בינוני - חזק",
    "growthRate": "גבוהה מאוד",
    "placement": "Foreground",
    "languages": {
      "he": {
        "family": "Nymphaeaceae",
        "synonyms": "Hydrostemma motleyi, (Wall.), Mabberley",
        "etymology": "Barclaya - לכבוד בוטניקאי אנגלי Robert Barclay (1751 - 1830) motleyi -  J. Motley בשם",
        "distribution": "סומטרה, בורנאו",
        "notes": "",
        "propagation": ""
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Blyxa alternifolia",
    "latinName": "Blyxa alternifolia",
    "images": [
      {
        "src": "Blyxa_alternifolia.webp",
        "alt": "Blyxa alternifolia 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "15 - 40 cm",
    "width": "5 - 15 cm",
    "temperature": "22 - 28°C",
    "ph": "5.5  -  7.5",
    "hardness": "2 - 10dGHd",
    "light": "בינוני-חזק-חזק מאד",
    "growthRate": "Moderate",
    "placement": "Midground",
    "languages": {
      "he": {
        "family": "Hydrocharitaceae",
        "synonyms": "",
        "etymology": "Blyxa (יווני) : blyzein : לזרום עקב המצעותו בטבע בנחלים זורמים alternifolia : עלים שונים",
        "distribution": "אסיה : הודו, סין",
        "notes": "",
        "propagation": ""
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Blyxa aubertii",
    "latinName": "Blyxa aubertii",
    "images": [
      {
        "src": "Blyxa_aubertii.webp",
        "alt": "Blyxa aubertiii 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "15 - 60 cm",
    "width": "5 - 15 cm",
    "temperature": "22 - 32°C",
    "ph": "5.5  -  7.5",
    "hardness": "1 - 15dGHd",
    "light": "חזק-חזק מאד",
    "growthRate": "גבוהה",
    "placement": "Midground",
    "languages": {
      "he": {
        "family": "Hydrocharitaceae",
        "synonyms": "Blyxa echinosperma (, C.B. Clarke, )",
        "etymology": "Blyxa (יווני) : blyzein : לזרום עקב המצעותו בטבע בנחלים זורמים aubertii : בשם איש שמצא צמח Louis-Marie Aubert du Petit-Thouars (1758 - 1831)",
        "distribution": "אסיה, אוסטרליה",
        "notes": "צמח יפה , גודל מהר אם יש מספיק אור ותוספת תזונתית מתחת לצמח, אז יכולים\r\t   ליהות עד 100 עלים. בטבע זמן החיים שלו הוא שנה בלבד, אך באקווריום יכול לחיות עד . כשנתיים",
        "propagation": ""
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Blyxa japonica",
    "latinName": "Blyxa japonica",
    "images": [
      {
        "src": "Blyxa_japonica.webp",
        "alt": "Blyxa japonica 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "10 - 20 cm",
    "width": "5 - 15 cm",
    "temperature": "22 - 26°C",
    "ph": "6.0  -  7.0",
    "hardness": "1 - 8dGHd",
    "light": "חזק-חזק מאד",
    "growthRate": "גבוהה",
    "placement": "Foreground",
    "languages": {
      "he": {
        "family": "Hydrocharitaceae",
        "synonyms": "Hydrilla japonica, Miquel, (1866)",
        "etymology": "Blyxa (יווני) : blyzein : לזרום עקב המצעותו בטבע בנחלים זורמים japonica : מיפן",
        "distribution": "אסיה וניו גווינאה",
        "notes": "צמח עדין, צומח טוב רק במים רכים מאוד . וחומציים",
        "propagation": ""
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Blyxa novoguineensis",
    "latinName": "Blyxa novoguineensis",
    "images": [
      {
        "src": "Blyxa_novoguineensis.webp",
        "alt": "Blyxa novoguineensis 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "10 - 30 cm",
    "width": "5 - 15 cm",
    "temperature": "22 - 26°C",
    "ph": "6.0  -  7.0",
    "hardness": "4 - 15dGHd",
    "light": "חזק-חזק מאד",
    "growthRate": "גבוהה",
    "placement": "קדמי , אמצעי",
    "languages": {
      "he": {
        "family": "Hydrocharitaceae",
        "synonyms": "",
        "etymology": "Blyxa (יווני) : blyzein : לזרום עקב המצעותו בטבע בנחלים זורמים novoguineensis : מניו גווינאה",
        "distribution": "ניו גווינאה",
        "notes": "",
        "propagation": ""
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Bolbitis heteroclita",
    "latinName": "Bolbitis heteroclita",
    "images": [
      {
        "src": "Bolbitis_heteroclita.webp",
        "alt": "Bolbitis heteroclita 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "15 - 50 cm",
    "width": "10 - 35 cm",
    "temperature": "21 - 25°C",
    "ph": "5.8  -  7.0",
    "hardness": "1 - 7",
    "light": "בינוני - חזק",
    "growthRate": "בינונית - גבוהה",
    "placement": "Midground",
    "languages": {
      "he": {
        "family": "Lomariopsidaceae",
        "synonyms": "Acrostichum heteroclitum, Presl, (1825)",
        "etymology": "Bolbitis : bolbos - פקעת heteroclita -  נשמר שונה",
        "distribution": "אסיה",
        "notes": ". צמח קשה לגידול . לא לשתול לתוך החצץ אלא מעל המצע",
        "propagation": ""
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Bolbitis heudelotii",
    "latinName": "Bolbitis heudelotii",
    "images": [
      {
        "src": "Bolbitis_heudelotii.webp",
        "alt": "Bolbitis heudelotii 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "15 - 70 cm",
    "width": "15 - 45 cm",
    "temperature": "21 - 25°C",
    "ph": "6.0  -  6.8",
    "hardness": "1 - 8",
    "light": "בינוני - חזק",
    "growthRate": "Moderate",
    "placement": "Midground to background",
    "languages": {
      "he": {
        "family": "Lomariopsidaceae",
        "synonyms": "Gymnopteris heudelotii, Fée, (1845)",
        "etymology": "Bolbitis : bolbos - פקעת heudelotii - J.-P. Heudelot   בשם (1802-1837)",
        "distribution": "אפריקה",
        "notes": ". אוהב מים חומציים במים בסיסיים עלים נעשים בצבע שחור או . מנומר . במים CO2 דורש ריכוז גבוה של גודל טוב יותר במים זורמים , לכן אכי טוב . למקם אותו ליד יציאה מהפילטר",
        "propagation": ""
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Cabomba aquatica",
    "latinName": "Cabomba aquatica",
    "images": [
      {
        "src": "Cabomba_aquatica.webp",
        "alt": "Cabomba aquatica 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "25 - 150 cm",
    "width": "8 - 18 cm",
    "temperature": "23 - 25°C",
    "ph": "6.4  -  7.2",
    "hardness": "1 - 10",
    "light": "Very strong",
    "growthRate": "בינונית - גבוהה",
    "placement": "Midground to background",
    "languages": {
      "he": {
        "family": "Cabombaceae",
        "synonyms": "קבומבה אקווטיקה, Nectris aquatica, (Aublet) Willdenov, Cabomba schwartzii, Rataj",
        "etymology": "Cabomba : שם שנתנו לצמח תושבי גאיאנה aquatica : גר במים",
        "distribution": "דרום אמריקה",
        "notes": "צמח בדרגת קושי בינונית לגידול. ללא תאורה חזקה מעבד את כל היופי שלו, מרחקים בין\r\t   העלים מתארכים מאוד ועלים התחתונים נופלים. תחת אור חזק וישיר אם דישון ופד\"חצמיחתו מהירה מאוד \r\t   ועלים . נעשים אדמדמים . אוהב מים נקיים  ורכים לציין שקיימים הרבה סוגים עם הבדלים . קטנים בגודל ובצבע עלים",
        "propagation": "גיזום ושתילה מחדש. מספיק לגזול כ-10 . ס\"מ"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Cabomba caroliniana",
    "latinName": "Cabomba caroliniana",
    "images": [
      {
        "src": "Cabomba_caroliniana.webp",
        "alt": "Cabomba caroliniana 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "25 - 150 cm",
    "width": "6 - 12 cm",
    "temperature": "22 - 26°C",
    "ph": "5.8  -  6.8",
    "hardness": "2 - 14",
    "light": "בינוני - חזק - חזק מאוד",
    "growthRate": "בינונית - גבוהה",
    "placement": "Midground to background",
    "languages": {
      "he": {
        "family": "Cabombaceae",
        "synonyms": "קבומבה קרוליניאנה, Cabomba aubletii, Mich, Cabomba australis, Spegazzini, Cabomba pulcherrima, (Harpet) Fasset",
        "etymology": "Cabomba : שם שנתנו לצמח תושבי גאיאנה caroliniana : מקרולינה",
        "distribution": "דרום אמריקה , מזרח ארצות הברית",
        "notes": "צמח קל לגידול. צומח מהר מאוד, במיוחד תחת אור חזק וישיר. \r\t   בחוסר אור מרחקים בין\r\t   העלים מתארכים מאוד ועלים התחתונים . נופלים",
        "propagation": "גיזום ושתילה מחדש. מספיק לגזול כ-10 . ס\"מ"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Cabomba furcata",
    "latinName": "Cabomba furcata",
    "images": [
      {
        "src": "Cabomba_furcata.webp",
        "alt": "Cabomba furcata 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "25 - 100 cm",
    "width": "4 - 10 cm",
    "temperature": "24 - 30°C",
    "ph": "5.2  -  6.8",
    "hardness": "0 - 4",
    "light": "Very strong",
    "growthRate": "גבוהה",
    "placement": "Midground",
    "languages": {
      "he": {
        "family": "Cabombaceae",
        "synonyms": "קבומבה פורקטה, קבומבה אדומה, Red cabomba, Nectris furcata, Leandro, Cabomba piauhyensis, Gardner, (1844), Cabomba warmingii, Caspary, Cabomba pubescens, Ule",
        "etymology": "Cabomba : שם שנתנו לצמח תושבי גאיאנה furcata : מפוצל , עקב צורת העלה",
        "distribution": "דרום אמריקה",
        "notes": "צמח בדרגת קושי בינונית לגידול. ללא תאורה חזקה מעבד את כל היופי שלו, מרחקים בין\r\t   העלים מתארכים מאוד ועלים התחתונים נופלים. תחת אור חזק וישיר אם דישון ופד\"ח צמיחתו מהירה מאוד \r\t   ועלים נעשים אדמדמים",
        "propagation": "גיזום ושתילה מחדש. מספיק לגזול כ-10 . ס\"מ"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Callitriche palustris",
    "latinName": "Callitriche palustris",
    "images": [
      {
        "src": "Callitriche_palustris.webp",
        "alt": "Callitriche palustris 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "20 - 70 cm",
    "width": "5 - 10 cm",
    "temperature": "18 - 26°C",
    "ph": "6.0  -  8.0",
    "hardness": "2 - 16dGHd",
    "light": "בינוני - חזק-חזק מאד",
    "growthRate": "Moderate",
    "placement": "Midground",
    "languages": {
      "he": {
        "family": "Callitrichaceae",
        "synonyms": "קליטריצ'ה פלוסטריס, Callitriche verna Linne (1755), Callitriche anceps Fernald",
        "etymology": "Callitriche : palustris :",
        "distribution": "צפון אמריקה",
        "notes": "צמח קל לגידול וצומח מאוד מהר , אך לא אוהב טמפרטורות גבוהות",
        "propagation": "גיזום ושתילה מחדש. מספיק לגזול כ-10 . ס\"מ"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Cardamina lyrata",
    "latinName": "Cardamina lyrata",
    "images": [
      {
        "src": "Cardamina_lyrata.webp",
        "alt": "Cardamina lyrata 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "15 - 40 cm",
    "width": "4 - 8 cm",
    "temperature": "18 - 23°C",
    "ph": "6.4  -  7.4",
    "hardness": "2 - 14",
    "light": "Strong",
    "growthRate": "בינונית - גבוהה",
    "placement": "Foreground to midground",
    "languages": {
      "he": {
        "family": "Brassicaceae",
        "synonyms": "קרדמינה לירטה",
        "etymology": "Cardamina (יווני) : kardamon : (קרס (סוג צמח lyrata : בצורת לירה",
        "distribution": "מזרח סיביר, צפון סין, יפן",
        "notes": ", צמח יפה וצומח מהר יחסית. דורש אור חזק . אך לא אוהב טמפרטורות גבוהות",
        "propagation": "גיזום ושתילה מחדש. מספיק לגזול כ-10 . ס\"מ"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Ceratophyllum demersum",
    "latinName": "Ceratophyllum demersum",
    "images": [
      {
        "src": "Ceratophyllum_demersum.webp",
        "alt": "Ceratophyllum demersum 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "15 - 120 cm",
    "width": "3 - 6 cm",
    "temperature": "23 - 30°C",
    "ph": "6.2  -  7.8",
    "hardness": "2 - 16",
    "light": "בינוני - חזק",
    "growthRate": "Moderate",
    "placement": "Midground",
    "languages": {
      "he": {
        "family": "Ceratophyllaceae",
        "synonyms": "צרטופילום דמרסום",
        "etymology": "Ceratophyllum : keras - קרן phylon - עלה demersum - מוצף , שקוע",
        "distribution": "בכל העולם",
        "notes": "קל מאוד לגידול בכל התנאים. צומח מהר מאוד. ניתן להשתמש בצמח בטור סטרטר . באקווריום צמחייה",
        "propagation": "גיזום ושתילה מחדש. מספיק לגזום כ-10 . ס\"מ"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Ceratophyllum submersum",
    "latinName": "Ceratophyllum submersum",
    "images": [
      {
        "src": "Ceratophyllum_submersum.webp",
        "alt": "Ceratophyllum submersum 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "15 - 120 cm",
    "width": "3 - 6 cm",
    "temperature": "23 - 30°C",
    "ph": "6.2  -  7.8",
    "hardness": "2 - 16",
    "light": "בינוני - חזק - חזק מאוד",
    "growthRate": "בינונית , גבוהה",
    "placement": "אמצעי, אחורי",
    "languages": {
      "he": {
        "family": "Ceratophyllaceae",
        "synonyms": "צרטופילום סבמרסום",
        "etymology": "Ceratophyllum : keras - קרן phylon - עלה submersum - שקוע",
        "distribution": "בכל העולם",
        "notes": "קל מאוד לגידול בכל התנאים. צומח מהר מאוד. ניתן להשתמש בצמח בטור סטרטר . באקווריום צמחייה",
        "propagation": "גיזום ושתילה מחדש. מספיק לגזום כ-10 . ס\"מ"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Ceratopteris cornuta",
    "latinName": "Ceratopteris cornuta",
    "images": [
      {
        "src": "Ceratopteris_cornuta.webp",
        "alt": "Ceratopteris cornuta 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "15 - 80 cm",
    "width": "15 - 35 cm",
    "temperature": "22 - 28°C",
    "ph": "6.2  -  7.8",
    "hardness": "2 - 16",
    "light": "בינוני - חזק",
    "growthRate": "נמוכה - בינונית",
    "placement": "Midground",
    "languages": {
      "he": {
        "family": "Pteridaceae",
        "synonyms": "צרטופטריס קורנוטה, שרך הודי, Pteris cornuta, P. Beauvois (1806)",
        "etymology": "Ceratopteris : keras - קרן pteris - שרכים נקרא כך עקב צורת העלים cornuta - בעל קרניים",
        "distribution": "אפריקה, מדגסקר, אירק, בורמה, אינדונזיה, צפון אוסטרליה",
        "notes": "קל מאוד לגידול בכל התנאים. תחת תאורה חזקה מתפתח מהר וחזק. ניתן להשתמש בו . גם\r\t   בשתילה לתוך החצץ וגם בתור צמח צף",
        "propagation": "צמחים חדשים על העלים הישנים. ניתן להפריד מהעלה בהגעת צמח חדש לגודל של . כ-3 - 4 ס\"מ"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Ceratopteris pteridoides",
    "latinName": "Ceratopteris pteridoides",
    "images": [
      {
        "src": "Ceratopteris_pteridoides.webp",
        "alt": "Ceratopteris pteridoides 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "15 - 60 cm",
    "width": "15 - 35 cm",
    "temperature": "22 - 28°C",
    "ph": "6.5  -  7.2",
    "hardness": "2 - 8",
    "light": "Strong",
    "growthRate": "נמוכה - בינונית",
    "placement": "צמח צף",
    "languages": {
      "he": {
        "family": "Pteridaceae",
        "synonyms": "Parkeria pteridoides, Hooker (1825)",
        "etymology": "Ceratopteris : keras - קרן pteris - שרכים נקרא כך עקב צורת העלים pteridoides - דומה לצמח (Pteridium) פטרידיום",
        "distribution": "דרום אמריקה",
        "notes": ". די קשה לגידול. מתאים לגידול בפלודריום",
        "propagation": "צמחים חדשים על העלים הישנים. ניתן להפריד מהעלה בהגעת צמח חדש לגודל של . כ-3 - 4 ס\"מ"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Ceratopteris thalictroides",
    "latinName": "Ceratopteris thalictroides",
    "images": [
      {
        "src": "Ceratopteris_thalictroides.webp",
        "alt": "Ceratopteris thalictroides 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "15 - 80 cm",
    "width": "15 - 45 cm",
    "temperature": "22 - 28°C",
    "ph": "6.5  -  8.4",
    "hardness": "2 - 14",
    "light": "Strong",
    "growthRate": "Moderate",
    "placement": "Midground to background",
    "languages": {
      "he": {
        "family": "Pteridaceae",
        "synonyms": "צרטופטריס טליקטרוידס, Indian Fern, Fine leaf Watersprite, Acrostichum thalictroides, Linné(1753)",
        "etymology": "Ceratopteris : keras - קרן pteris - שרכים נקרא כך עקב צורת העלים thalictroides - דומה לצמחים Thalictrum ממשפחת",
        "distribution": "באזורים טרופיים בכל העולם",
        "notes": "צמח מאוד נפוץ. קל מאוד לגידול בכל התנאים. תחת תאורה חזקה מתפתח מהר וחזק. ניתן להשתמש בו גם\r\t   בשתילה . לתוך החצץ וגם בתור צמח צף",
        "propagation": "צמחים חדשים על העלים הישנים. ניתן להפריד מהעלה בהגעת צמח חדש לגודל של . כ-3 - 4 ס\"מ"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Crassula helmsii",
    "latinName": "Crassula helmsii",
    "images": [
      {
        "src": "Crassula_helmsii.webp",
        "alt": "Crassula helmsii 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "7 - 15 cm",
    "width": "2 - 4 cm",
    "temperature": "20 - 24°C",
    "ph": "6.5  -  7.8",
    "hardness": "2 - 14",
    "light": "Very strong",
    "growthRate": "בינונית - גבוהה",
    "placement": "Foreground",
    "languages": {
      "he": {
        "family": "Crassulaceae",
        "synonyms": "קרסולה הלמסה, Tillaea helmsii, Kirk (1899), Tillaea recurva, Hooker, Crassula recurva, (Hooker) Ostenfeld, Bulliardia recurva, Hooker",
        "etymology": "Crassula : crassus : עבה helmsii : R. Helms  בשם (1842-1914)",
        "distribution": "אוסטרליה, ניו-זילנד",
        "notes": "לא אוהב טמפרטורות גבוהות, דורש אור חזק . מאוד וישיר . מתאים לגידול בפלודריום ובבריכות",
        "propagation": "גיזום ושתילה מחדש. מספיק לגזול כ-10 . ס\"מ"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Crinum calamistratum",
    "latinName": "Crinum calamistratum",
    "images": [
      {
        "src": "Crinum_calamistratum.webp",
        "alt": "Crinum calamistratum 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "25 - 200 cm",
    "width": "10 - 25 cm",
    "temperature": "20 - 24°C",
    "ph": "6.8  -  7.2",
    "hardness": "2 - 10",
    "light": "בינוני - חזק",
    "growthRate": "גבוהה",
    "placement": "Midground to background",
    "languages": {
      "he": {
        "family": "Amaryllidaceae",
        "synonyms": "Crinum natans \"crispus\"",
        "etymology": "Crinum : krinon - חבצלת calamistratum - מקורזל, גלי",
        "distribution": "מערב קמרון",
        "notes": "חצץ צריך ליהות בגובה לפחות 8 ס\"מ ומזין . מאוד . זרימת מים טובה עוזרת לגידול צמח צמיחתו די איטית לעומת . Crinum natans ו Crinum thaianum",
        "propagation": ""
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Crinum natans",
    "latinName": "",
    "images": [],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "",
    "width": "",
    "temperature": "",
    "ph": "",
    "hardness": "N/A",
    "light": "",
    "growthRate": "",
    "placement": "",
    "languages": {
      "he": {
        "family": "",
        "synonyms": "",
        "etymology": "",
        "distribution": "",
        "notes": "",
        "propagation": ""
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Crinum thaianum",
    "latinName": "",
    "images": [],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "",
    "width": "",
    "temperature": "",
    "ph": "",
    "hardness": "N/A",
    "light": "",
    "growthRate": "",
    "placement": "",
    "languages": {
      "he": {
        "family": "",
        "synonyms": "",
        "etymology": "",
        "distribution": "",
        "notes": "",
        "propagation": ""
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Cryptocoryne",
    "latinName": "",
    "images": [],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "",
    "width": "",
    "temperature": "",
    "ph": "",
    "hardness": "N/A",
    "light": "",
    "growthRate": "",
    "placement": "",
    "languages": {
      "he": {
        "family": "",
        "synonyms": "",
        "etymology": "",
        "distribution": "",
        "notes": "",
        "propagation": ""
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Cyperus helferi",
    "latinName": "",
    "images": [],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "",
    "width": "",
    "temperature": "",
    "ph": "",
    "hardness": "N/A",
    "light": "",
    "growthRate": "",
    "placement": "",
    "languages": {
      "he": {
        "family": "",
        "synonyms": "",
        "etymology": "",
        "distribution": "",
        "notes": "",
        "propagation": ""
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Didiplis diandra",
    "latinName": "Didiplis diandra",
    "images": [
      {
        "src": "Didiplis_diandra.webp",
        "alt": "Didiplis diandra 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "10 - 40 cm",
    "width": "2 - 5 cm",
    "temperature": "22 - 26°C",
    "ph": "6.3  -  7.6",
    "hardness": "2 - 10",
    "light": "גבוה מאוד",
    "growthRate": "גבוהה מאוד",
    "placement": "קדמי , אמצעי",
    "languages": {
      "he": {
        "family": "Lythraceae",
        "synonyms": "דידיפליס דיאנדרה, Peplis diandra, De Candolle, (1828)",
        "etymology": "Didiplis : dis : פעמיים diploos : כפול diandra : כפיל עקב צמח אטיפי עם שני אבקנים",
        "distribution": "מזרח צפון אמריקה",
        "notes": "קשה לגידול. דורש תאורה חזקה וישירה והרבה תזונה. אוהב מים רכים ומעט חומציים.\r\t   אם יש מספיק אור קצה עלה מקבל צבע אדמדם. בחוסר אור עלים תחתונים . נרקבים",
        "propagation": "גיזום ושתילה מחדש. מספיק לגזום כ-10 . ס\"מ"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Echinodorus",
    "latinName": "",
    "images": [],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "",
    "width": "",
    "temperature": "",
    "ph": "",
    "hardness": "N/A",
    "light": "",
    "growthRate": "",
    "placement": "",
    "languages": {
      "he": {
        "family": "",
        "synonyms": "",
        "etymology": "",
        "distribution": "",
        "notes": "",
        "propagation": ""
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Egeria densa",
    "latinName": "Egeria densa",
    "images": [
      {
        "src": "Egeria_densa.webp",
        "alt": "Egeria densa 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "עד 200 cm",
    "width": "2 - 5 cm",
    "temperature": "20 - 26°C",
    "ph": "6.5  -  9.2",
    "hardness": "2 - 25",
    "light": "חזק , חזק מאוד",
    "growthRate": "Moderate",
    "placement": "צף על פני מים או בשטילה בחלק אחורי",
    "languages": {
      "he": {
        "family": "Hydrocharitaceae",
        "synonyms": "אגריה דנסה, Brazilian elodea, Elodea densa, (Planchon) Caspary",
        "etymology": "Egeria - בשם נימפה אגריה densa - סמיך , עקב סמיכות עלים בצמח",
        "distribution": "כמעט כל העולם",
        "notes": "צמח קל מאוד לגידול. עקב צמיחתו המהירה הרבה משתמשים בצמח הזה כסרטר\r\t   באקווריום צמחייה למנית הופעת אצות.\r\t   עקב צמיחה מהירה מייצר גם הרבה חמצן.\r\t   מתאים . לשימוש באקווריומי רבייה",
        "propagation": "גיזום. מספיק לגזול כ-10 ס\"מ. ניתן להשאיר את הצמח על פני המים או להשתיל אותו . לקרקע"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Egeria najas",
    "latinName": "Egeria najas",
    "images": [
      {
        "src": "Egeria_najas.webp",
        "alt": "Egeria najas 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "עד 200 cm",
    "width": "2 - 5 cm",
    "temperature": "15 - 26°C",
    "ph": "5.2  -  7.6",
    "hardness": "1 - 8",
    "light": "Very strong",
    "growthRate": "בינונית , גבוהה",
    "placement": "",
    "languages": {
      "he": {
        "family": "Hydrocharitaceae",
        "synonyms": "אגריה נייאס, Elodea najas, (Planchon) Caspary",
        "etymology": "Egeria - בשם נימפה אגריה najas - (Najas) דומה צמח ממשפחת נאיאד",
        "distribution": "ברזיל, ארוגואי, פרגואי, ארגנטינה",
        "notes": "צמח קל מאוד לגידול. עקב צמיחתו המהירה והפרשת חומרים בקטריצידיים הרבה משתמשים\r\t    בצמח הזה כסרטר באקווריום צמחייה למנית הופעת אצות. משתמש בניטריטים לצורך תזונה, לכן\r\t\tמוריד רמת הניטריטים במים.\r\t   עקב צמיחה מהירה מייצר גם הרבה חמצן.\r\t   מתאים לשימוש באקווריומי . רבייה",
        "propagation": "גיזום. מספיק לגזול כ-10 ס\"מ. ניתן להשאיר את הצמח על פני המים או להשתיל אותו . לקרקע"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Eichhornia azurea",
    "latinName": "Eichhornia azurea",
    "images": [
      {
        "src": "Eichhornia_azurea.webp",
        "alt": "Eichhornia azurea 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "15 - 30 cm",
    "width": "4 - 10 cm",
    "temperature": "15 - 24°C",
    "ph": "5.4  -  7.3",
    "hardness": "1 - 8",
    "light": "חזק , חזק מאוד",
    "growthRate": "גבוהה",
    "placement": "אמצעי , אחורי",
    "languages": {
      "he": {
        "family": "Pontederiaceae",
        "synonyms": "איחורניה אזוראה, Pontederia azurea, Schwartz, , 1788, Piaropus azureus, (Schwartz) Britton",
        "etymology": "Eichhornia - בשם שר פרוסי J.A.Fr. Eichhorn (1779-1856) azurea - צבע תכלת , על פי צבע פרח",
        "distribution": "דרום אמריקה",
        "notes": "צמח קשה לגידול. דורש מים נקיים, חומציים ואור חזק.\r\t   אם אין מספיק אור עלים תחתונים . נשחרים ונופלים אין לתת להווצר לעלים חוץ מימיים. לפני זה . רצוי לגזור את הצמח",
        "propagation": "גיזום ושתילה מחדש. מספיק לגזום כ-10 . ס\"מ"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Eichhornia crassipes",
    "latinName": "Eichhornia crassipes",
    "images": [
      {
        "src": "Eichhornia_crassipes.gif",
        "alt": "Eichhornia crassipes 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "צף על פני המיים",
    "width": "",
    "temperature": "20 - 29°C",
    "ph": "6.5  -  7.5",
    "hardness": "1 - 12",
    "light": "חזק , חזק מאוד",
    "growthRate": "גבוהה",
    "placement": "על פני המים",
    "languages": {
      "he": {
        "family": "Pontederiaceae",
        "synonyms": "איחורניה קרסיפס, Pontederia crassipes, Martius, (1823)",
        "etymology": "Eichhornia - בשם שר פרוסי J.A.Fr. Eichhorn (1779-1856) crassipes - עם ניצב העלה עבה",
        "distribution": ".כל העולםבמקור-ברזיל",
        "notes": ". מתאים יותר לבריכות. דורש אור חזק",
        "propagation": "מתפשת לצדדים. ניתן להפריד חלק מהגבעול . ולשים במקום אחר"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Eichhornia diversifolia",
    "latinName": "Eichhornia diversifolia",
    "images": [
      {
        "src": "Eichhornia_diversifolia.webp",
        "alt": "Eichhornia diversifolia 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "15 - 65 cm",
    "width": "5 - 10 cm",
    "temperature": "20 - 28°C",
    "ph": "6.5  -  7.5",
    "hardness": "1 - 12",
    "light": "חזק , חזק מאוד",
    "growthRate": "גבוהה",
    "placement": "אמצעי, אחורי",
    "languages": {
      "he": {
        "family": "Pontederiaceae",
        "synonyms": "איחורניה דיברסיפוליה, Heteranthera diversifolia, Vahl (1805)",
        "etymology": "Eichhornia - בשם שר פרוסי J.A.Fr. Eichhorn (1779-1856) diversifolias - עלים שונים",
        "distribution": "מרכז ודרום אמריקה",
        "notes": "צמח קשה לגידול. דורש מים נקיים, חומציים ואור חזק.\r\t   אם אין מספיק אור עלים תחתונים . נשחרים ונופלים אין לתת להווצר לעלים חוץ מימיים. לפני זה . רצוי לגזור את הצמח",
        "propagation": "גיזום ושתילה מחדש. מספיק לגזום כ-15 . ס\"מ"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Eichhornia natans",
    "latinName": "Eichhornia natans",
    "images": [
      {
        "src": "Eichhornia_natans.webp",
        "alt": "Eichhornia natans 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "20 - 65 cm",
    "width": "5 - 10 cm",
    "temperature": "20 - 28°C",
    "ph": "6.5  -  7.5",
    "hardness": "1 - 12",
    "light": "חזק , חזק מאוד",
    "growthRate": "גבוהה",
    "placement": "אמצעי, אחורי",
    "languages": {
      "he": {
        "family": "Pontederiaceae",
        "synonyms": "איחורניה נטנס, Pontederia natans, P. Beauvois (1882), Monochoria natans, Thomson",
        "etymology": "Eichhornia - בשם שר פרוסי J.A.Fr. Eichhorn (1779-1856) natans - שוחה",
        "distribution": "מערב ומזרח אפריקה",
        "notes": "צמח קשה לגידול. דורש מים נקיים, חומציים ואור חזק.\r\t   אם אין מספיק אור עלים תחתונים . נשחרים ונופלים אין לתת להווצר לעלים חוץ מימיים. לפני זה . רצוי לגזור את הצמח",
        "propagation": "גיזום ושתילה מחדש. מספיק לגזום כ-15 . ס\"מ"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Eichhornia sp.",
    "latinName": "Eichhornia sp.",
    "images": [
      {
        "src": "Eichhornia_sp.webp",
        "alt": "Eichhornia sp. 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "20 - 65 cm",
    "width": "5 - 10 cm",
    "temperature": "20 - 28°C",
    "ph": "6.5  -  7.5",
    "hardness": "1 - 12",
    "light": "חזק , חזק מאוד",
    "growthRate": "גבוהה",
    "placement": "אמצעי, אחורי",
    "languages": {
      "he": {
        "family": "Pontederiaceae",
        "synonyms": "איחורניה",
        "etymology": "Eichhornia - בשם שר פרוסי J.A.Fr. Eichhorn (1779-1856)",
        "distribution": "מערב ומזרח אפריקה",
        "notes": "צמח קשה לגידול. דורש מים נקיים, חומציים ואור חזק.\r\t   אם אין מספיק אור עלים תחתונים . נשחרים ונופלים אין לתת להווצר לעלים חוץ מימיים. לפני זה . רצוי לגזור את הצמח",
        "propagation": "גיזום ושתילה מחדש. מספיק לגזום כ-15 . ס\"מ"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Eleocharis acicularis",
    "latinName": "Eleocharis acicularis",
    "images": [
      {
        "src": "Eleocharis_acicularis.gif",
        "alt": "Eleocharis acicularis 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "10 - 30 cm",
    "width": "5 - 10 cm",
    "temperature": "18 - 26°C",
    "ph": "6.5  -  7.5",
    "hardness": "1 - 12",
    "light": "חזק , חזק מאוד",
    "growthRate": "גבוהה",
    "placement": "Foreground",
    "languages": {
      "he": {
        "family": "Cyperaceae",
        "synonyms": "Scripus acicularis, Linné (1753)",
        "etymology": "Eleocharis : helos - ביצה charis - עליצות , שמחה acicularis - דמוי מחט , מחטני (על העלים)",
        "distribution": "כל העולם",
        "notes": "אוהב טמפרטורות נמוכות, אך צומח טוב גם . בטמפרטורות עד 26 מעלות . מרגיש טוב יותר במים רכים מים חייבים להיות נקיים ורצויות החלפות . מים שחיחות, נפגע בקלות מאצות בלי תוספת תזונה (דשן) אפילו עם הזרמת . צומח איטי CO2 . מתאים גם לגידול בפלודריום",
        "propagation": "על עלי הצמח צומחים צמחים חדשים הניתנים . להפרדה ושתילה מחדש . כמו כן בעזרת הזרעים"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Eleocharis minima",
    "latinName": "Eleocharis minima",
    "images": [
      {
        "src": "Eleocharis_minima.webp",
        "alt": "Eleocharis minima 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "10 - 30 cm",
    "width": "5 - 10 cm",
    "temperature": "15 - 30°C",
    "ph": "6.0  -  8.0",
    "hardness": "4 - 20",
    "light": "בינוני , חזק",
    "growthRate": "גבוהה",
    "placement": "קדמי , אמצעי",
    "languages": {
      "he": {
        "family": "Cyperaceae",
        "synonyms": "אלאוצ'אריס מינימה, Small spikerush, Eleocharis bicolor, Chapman, Eleocharis uncialis, Chapman ex Small",
        "etymology": "Eleocharis (יווני) : helos - ביצה charis - עליצות , שמחה minima : קטן",
        "distribution": "כל העולם",
        "notes": "אוהב תוספת תזונה. צומח בצפיפות רבה.\r\t   בדרכ כלל משתמשים באקווריומים לרביית דגים גם לדגי מטילי מצע וגם להטלות . מפוזרות",
        "propagation": "על עלי הצמח צומחים צמחים חדשים הניתנים . להפרדה ושתילה מחדש . זרעים"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Eleocharis vivipara",
    "latinName": "Eleocharis vivipara",
    "images": [
      {
        "src": "Eleocharis_vivipara.webp",
        "alt": "Eleocharis vivipara 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "20 - 90 cm",
    "width": "10 - 25 cm",
    "temperature": "18 - 25°C",
    "ph": "6.5  -  7.5",
    "hardness": "4 - 14",
    "light": "בינוני , חזק",
    "growthRate": "גבוהה",
    "placement": "קדמי , אמצעי",
    "languages": {
      "he": {
        "family": "Cyperaceae",
        "synonyms": "אלאוצ'אריס וויוויפרה, Umbrella hairgrass, Eleocharis prolifera, Chapman, Chlorocharis vivipara, Rikli",
        "etymology": "Eleocharis (יווני) : helos - ביצה charis - עליצות , שמחה vivipara - יולד חיים",
        "distribution": "דרום ודרום-מזרח ארצות הברית",
        "notes": "אוהב תוספת תזונה. צומח בצפיפות רבה.\r\t   בדרכ כלל משתמשים באקווריומים לרביית דגים גם לדגי מטילי מצע וגם להטלות . מפוזרות . רצוי לגדלו באקווריומים גבוהים",
        "propagation": "על עלי הצמח צומחים צמחים חדשים הניתנים . להפרדה ושתילה מחדש . זרעים"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Elodea canadensis",
    "latinName": "Elodea canadensis",
    "images": [
      {
        "src": "Elodea_canadensis.webp",
        "alt": "Elodea canadensis 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "עד 200 cm",
    "width": "1 - 3 cm",
    "temperature": "15 - 25°C",
    "ph": "7.0  -  9.5",
    "hardness": "6 - 25",
    "light": "חזק, חזק מאוד",
    "growthRate": "בינונית , גבוהה",
    "placement": "אחורי או על פני המים",
    "languages": {
      "he": {
        "family": "Hydrocharitaceae",
        "synonyms": "אלודאה קנדית, American waterweed, Canadian Waterweed, Ditch Moss, Water Thyme, Udora canadensis, (Michaux) Nuttall, Anacharis canadensis, (Michaux) Planch., Anacharis canadensis var. planchonii, Elodea brandegeae, H.St.John, Elodea ioensis, Wylie, Elodea linearis, (Rydb.) H.St.John, Elodea planchonii, Casp., Helodea canadensis, Philotria canadensis, (Michaux) Britton, Philotria linearis, Rydb.",
        "etymology": "Elodea  : helodes - ביצתי canadensis - מקנדה",
        "distribution": "צפון אמריקה, קנדה, אוסטרליה, יורופה",
        "notes": "צמח קל מאוד לגידול. עקב צמיחתו המהירה והפרשת חומרים בקטריצידיים הרבה משתמשים\r\t    בצמח הזה כסרטר באקווריום צמחייה למנית הופעת אצות. משתמש בניטריטים לצורך תזונה, לכן\r\t\tמוריד רמת הניטריטים במים.\r\t   עקב צמיחה מהירה מייצר גם הרבה חמצן. \r\t   מתאים לשימוש באקווריומי . רבייה . לא אוהב טמפרטורות גבוהות מידי",
        "propagation": "גיזום. מספיק לגזול כ-10 ס\"מ. ניתן להשאיר את הצמח על פני המים או להשתיל אותו . לקרקע"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Elodea nuttallii",
    "latinName": "Elodea nuttallii",
    "images": [
      {
        "src": "Elodea_nuttallii.webp",
        "alt": "Elodea nuttallii 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "עד 200 cm",
    "width": "1 - 3 cm",
    "temperature": "15 - 25°C",
    "ph": "7.0  -  9.5",
    "hardness": "6 - 25",
    "light": "חזק, חזק מאוד",
    "growthRate": "בינונית , גבוהה",
    "placement": "אחורי או על פני המים",
    "languages": {
      "he": {
        "family": "Hydrocharitaceae",
        "synonyms": "אלודאה נוטלי, Free Flowered Waterweed, Nuttall’s pondweed, Western Waterweed, Anacharis nuttallii, J.E. Planchon, 1848, Anacharis occidentalis, Elodea columbiana, Elodea minor, Elodea occidentalis, Philotria angustifolia, Philotria minor, Philotria nuttallii, Philotria occidentalis, Udora verticillata var minor",
        "etymology": "Elodea  : helodes - ביצתי nuttallii - בשם בוטניקאי אנגלי Tomas Nuttall (1786 - 1859)",
        "distribution": "צפון אמריקה, יורופה, יפן",
        "notes": "צמח קל מאוד לגידול. עקב צמיחתו המהירה והפרשת חומרים בקטריצידיים הרבה משתמשים\r\t    בצמח הזה כסרטר באקווריום צמחייה למנית הופעת אצות. משתמש בניטריטים לצורך תזונה, לכן\r\t\tמוריד רמת הניטריטים במים.\r\t   עקב צמיחה מהירה מייצר גם הרבה חמצן.\r\t   מתאים לשימוש באקווריומי . רבייה . לא אוהב טמפרטורות גבוהות מידי",
        "propagation": "גיזום. מספיק לגזול כ-10 ס\"מ. ניתן להשאיר את הצמח על פני המים או להשתיל אותו . לקרקע"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Eriocaulon cinereum",
    "latinName": "Eriocaulon cinereum",
    "images": [
      {
        "src": "Eriocaulon_cinereum.webp",
        "alt": "Eriocaulon cinereum 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "cm 10 - 20",
    "width": "cm 8 - 15",
    "temperature": "20 - 28°C",
    "ph": "6.0  -  8.0",
    "hardness": "4 - 20",
    "light": "Strong",
    "growthRate": "גבוהה",
    "placement": "Foreground",
    "languages": {
      "he": {
        "family": "Eriocaulaceae",
        "synonyms": "",
        "etymology": "Eriocaulon : cinereum :",
        "distribution": "צפון אמריקה",
        "notes": "יותר מתאים לפלודריום ופחות לגידול . באקווריום",
        "propagation": ""
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Eriocaulon robustius",
    "latinName": "",
    "images": [
      {
        "src": "Eriocaulon_robustius.webp",
        "alt": "Eriocaulon robustius 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "",
    "width": "",
    "temperature": "",
    "ph": "",
    "hardness": "N/A",
    "light": "",
    "growthRate": "",
    "placement": "",
    "languages": {
      "he": {
        "family": "",
        "synonyms": "",
        "etymology": "",
        "distribution": "",
        "notes": "",
        "propagation": ""
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Eusteralis stellata",
    "latinName": "Eusteralis stellata",
    "images": [
      {
        "src": "Eusteralis_stellata.webp",
        "alt": "Eusteralis stellata 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "20 - 50 cm",
    "width": "8 - 15 cm",
    "temperature": "18 - 30°C",
    "ph": "6.4  -  7.8",
    "hardness": "2 - 14",
    "light": "Strong to very strong",
    "growthRate": "גבוהה",
    "placement": "קדמי, אמצעי",
    "languages": {
      "he": {
        "family": "Lamiaceae",
        "synonyms": "אוסטרליס סטלטה, Mentha stellata, Loureiro, , 1790, Dysophylla verticillata, Bentham, Dysophylla stellata, Bentham, Dysophylla benthaminiana, Hance",
        "etymology": "Eusteralis : stellata : כוכבית עקב מיקום עלים על גיבעול הצמח",
        "distribution": "יפן, סין, תאיבאן, מלזיה, אוסטרליה",
        "notes": ". צמח קשה לגידול צמח שביר מאוד, לכן יש להזהר בזמן . השטילה והטיפול כדאי לקבל עלים בגוון אדום צריכה תאורה . חזקה מאוד אם אין מספיק תאורה עלים התחתונים על . הגבעול נוטים להשחיר ולפעול",
        "propagation": "גיזום ושתילה מחדש. מספיק שטל של כמה . ס\"מ"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Fissidens grandifrons",
    "latinName": "Fissidens grandifrons",
    "images": [
      {
        "src": "Fissidens_grandifrons.webp",
        "alt": "Fissidens grandifrons 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "10 - 20 cm",
    "width": "05 - 1.0 cm",
    "temperature": "20 - 28°C",
    "ph": "6.0  -  8.0",
    "hardness": "4 - 20",
    "light": "נמוך - חזק",
    "growthRate": "נמוכה",
    "placement": "קדמי, על האבנים ובולי עץ",
    "languages": {
      "he": {
        "family": "Fissidentaceae",
        "synonyms": "פיסידנס גרנדיפרונס, Narrow-leaved Phoenix Moss",
        "etymology": "Fissidens : grandifrons :",
        "distribution": "צפון אמריקה, אסיה",
        "notes": ". מוסוס. קל לגידול , פחות אוהב מים חמים ניתן להשתמש באקווריום לרביית דגים או . לעיצוב הקווריום . קיימים מספר תת-זנים",
        "propagation": ". מתפשת לצדדים"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Fissidens nobilis",
    "latinName": "Fissidens nobilis",
    "images": [
      {
        "src": "Fissidens_nobilis.webp",
        "alt": "Fissidens nobilis 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "5 - 15 cm",
    "width": "05 - 1.0 cm",
    "temperature": "20 - 28°C",
    "ph": "6.0  -  8.0",
    "hardness": "4 - 20",
    "light": "נמוך - חזק",
    "growthRate": "נמוכה",
    "placement": "קדמי, על האבנים ובולי עץ",
    "languages": {
      "he": {
        "family": "Fissidentaceae",
        "synonyms": "פיסידנס נוביליס",
        "etymology": "Fissidens : nobilis :",
        "distribution": "אסיה",
        "notes": ". מוסוס. קל לגידול , פחות אוהב מים חמים ניתן להשתמש באקווריום לרביית דגים או . לעיצוב הקווריום",
        "propagation": "מתפשת לצדדים"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Glossostigma elatinoides",
    "latinName": "",
    "images": [],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "",
    "width": "",
    "temperature": "",
    "ph": "",
    "hardness": "N/A",
    "light": "",
    "growthRate": "",
    "placement": "",
    "languages": {
      "he": {
        "family": "",
        "synonyms": "",
        "etymology": "",
        "distribution": "",
        "notes": "",
        "propagation": ""
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Gymnocoronis spilanthoides",
    "latinName": "Gymnocoronis spilanthoides",
    "images": [
      {
        "src": "Gymnocoronis_spilanthoides.webp",
        "alt": "Gymnocoronis spilanthoides 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "30-200 cm",
    "width": "15 - 30 cm",
    "temperature": "15 - 28°C",
    "ph": "6.2  -  7.8",
    "hardness": "1 - 15",
    "light": "Very strong",
    "growthRate": "נמוכה, בינונית",
    "placement": "אמצעי, אחורי",
    "languages": {
      "he": {
        "family": "Scrophulariaceae",
        "synonyms": "גימנוקורוניס ספילנטוידס, Senegal tea plant, Alomia spilanthoides, Hooker &  Arnott (1835), Gymnocoronis attenuata, De Candolle, Gymnocoronis subcordata, De Candolle, Adenostemma gymnocoronis, Schulz-Bip.",
        "etymology": "Gymnocoronis (.לטין) : gymnos : עירום, חשוף corona : הילה spilanthoides -  דומה לספילנטס (Spilanthes)",
        "distribution": "דרום אמריקה",
        "notes": "צמח קל יחסית לגידול. דורש תאורה חזקה מאוד. צומח מהר , לכן ניתן להשתמש\r\t   בו כסטרטר באקווריום צמחייה כדאי למנוע . התפרצות אצות אם אין מספיק אור עלים התחתונים נופלים . וגם מרבח בין העלים מתארך קיימת ווריאצית צמח עם גבעול ועלים . אדומים והיא גם צומחת איטית יותר",
        "propagation": ""
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Hemianthus callitrichoides",
    "latinName": "Hemianthus callitrichoides",
    "images": [
      {
        "src": "Hemianthus_callitrichoides.webp",
        "alt": "Hemianthus callitrichoides 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "5 - 15 cm",
    "width": "1 - 3 cm",
    "temperature": "19 - 28°C",
    "ph": "5.6  -  7.2",
    "hardness": "1 - 15",
    "light": "Strong to very strong",
    "growthRate": "בינונית - גבוהה",
    "placement": "קדמי, על פני המים",
    "languages": {
      "he": {
        "family": "Scrophulariaceae",
        "synonyms": "המיאנטוס מיקרנטמוידס",
        "etymology": "Hemianthus (יווני) : hemi : חצי, מחצית anthemon : פרח callitrichoides : 'דומה לסוג קליטריצ (Callitrich)",
        "distribution": "דרום אמריקה",
        "notes": "צומח קטן, מתאים לאקווריומים קטנים. ניתן ,לשים אותו גם על פני המים.\r\t די קשה לגידול . דורש אור חזק צמח טוב למטרת הדשא בחלק קידמי של . האקווריום",
        "propagation": "גיזום ושתילה מחדש. מספיק לגזול כ-5 . ס\"מ"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Hemianthus micranthemoides",
    "latinName": "Hemianthus micranthemoides",
    "images": [
      {
        "src": "Hemianthus_micranthemoides.webp",
        "alt": "Hemianthus micranthemoides 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "10 - 40 cm",
    "width": "2 - 4 cm",
    "temperature": "19 - 28°C",
    "ph": "5.6  -  7.2",
    "hardness": "1 - 15",
    "light": "Very strong",
    "growthRate": "בינונית - גבוהה",
    "placement": "קדמי, אמצעי",
    "languages": {
      "he": {
        "family": "Scrophulariaceae",
        "synonyms": "המיאנטוס מיקרנטמוידס, Baby tears, Nuttall's mudwort, Pearl weed, Micranthemum nuttallii, A. Gray, Micranthemum micranthemoides, Wettstein",
        "etymology": "Hemianthus (יווני) : hemi : חצי, מחצית anthemon : פרח micranthemoides : דומה לסוג מיקרנטמום (Micranthemum)",
        "distribution": "דרום , מרכז וצפון אמריקה",
        "notes": "צומח מהר, בדרגת קושי בינונית לגידול. צריך אור חזק ומים חומציים",
        "propagation": "גיזום ושתילה מחדש. מספיק לגזול כ-10 . ס\"מ"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Heteranthera reniformis",
    "latinName": "Heteranthera reniformis",
    "images": [
      {
        "src": "Heteranthera_reniformis.webp",
        "alt": "Heteranthera reniformis 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "10 - 25 cm",
    "width": "14 - 25 cm",
    "temperature": "22 - 27°C",
    "ph": "6.4  -  7.9",
    "hardness": "1 - 15",
    "light": "Very strong",
    "growthRate": "בינונית, חזק",
    "placement": "קדמי, אמצעי",
    "languages": {
      "he": {
        "family": "Pontederiaceae",
        "synonyms": "הטרנטרה רניפורמיס, Heteranthera reniformis, Beauvois, (1799), H. acuta, Willdenow, H. virginica, Steudel, Leptanthus reniformis, Michaux, L. virginicus, Persoon, Buchosia aquatica, Vellozo, Schollera reniformis, Kuntze, Phrynium reniforme, Kuntze",
        "etymology": "Heteranthera (.לטין) : heteros : שונה anthera : אבקן עקב גובם של אבקנים שונה reniformis : בצורת כליה עקב צורת העלה הדומה לכליה",
        "distribution": "צפון ודרום אמריקה",
        "notes": ". צמח לא מחזיק מעמד למשך זמן באקווריום . מתאים לגידול\r\t   בפלודריום וסביב הבריכות",
        "propagation": "גיזום ושתילה מחדש. מספיק לגזום כ-15 . ס\"מ"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Heteranthera zosterifolia",
    "latinName": "Heteranthera zosterifolia",
    "images": [
      {
        "src": "Heteranthera_zosterifolia.webp",
        "alt": "Heteranthera zosterifolia 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "30 - 90 cm",
    "width": "8 - 15 cm",
    "temperature": "23 - 27°C",
    "ph": "6.4  -  7.9",
    "hardness": "1 - 15",
    "light": "Very strong",
    "growthRate": "בינונית, חזק",
    "placement": "קדמי, אמצעי, אחורי",
    "languages": {
      "he": {
        "family": "Pontederiaceae",
        "synonyms": "הטרנטרה זוסטריפוליה, Schollera zosterifolia, (Martius) Kuntze, Heteranthera osteniana, Herter",
        "etymology": "Heteranthera (.לטין) : heteros : שונה anthera : אבקן עקב גובם של אבקנים שונה zosterifolia : עלים כמו עצל זוסטרה (Zostera)",
        "distribution": "דרום אמריקה",
        "notes": "צמח קל מאוד לגידול. צומח מהר מאוד. מתאים כצמח סטרטר באקווריום צמחייה.\r\t   דורש תאורה חזקה מאוד וישירה. אם אין מספיק אור עלים התחתונים נופלים ומרחק . בין העלים מתארך",
        "propagation": "גיזום ושתילה מחדש. מספיק לגזום כ-15 . ס\"מ"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Hottonia palustris",
    "latinName": "Hottonia palustris",
    "images": [
      {
        "src": "Hottonia_palustris.webp",
        "alt": "Hottonia palustris 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "20 - 100 cm",
    "width": "5 - 12 cm",
    "temperature": "15 - 24°C",
    "ph": "6.0  -  8.0",
    "hardness": "2 - 12",
    "light": "Strong",
    "growthRate": "Moderate",
    "placement": "קדמי, אמצעי",
    "languages": {
      "he": {
        "family": "Primulaceae",
        "synonyms": "הוטוניה מילפוליום, Hottonia millefolium, Gilibert",
        "etymology": "Hottonia : P. Hotton בשם בוטניקאי ( 1648 - 1709 ) palustris : חי בביצה",
        "distribution": "אירופה, צפון אסיה",
        "notes": "צמח קל לגידול ללא דרישות מיוחדות. יחד עם זאת\r\t   לא מחזיק מעמד זמן רב בטמפרטורות . גבוהות מ-25 מעלות . מתאים לגידול בפלודריום",
        "propagation": "גיזום ושתילה מחדש. מספיק לגזום כ-15 . ס\"מ"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Hydrilla verticillata",
    "latinName": "Hydrilla verticillata",
    "images": [
      {
        "src": "Hydrilla_verticillata.JPG",
        "alt": "Hydrilla verticillata 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "60 - 200 cm",
    "width": "2 - 4 cm",
    "temperature": "20 - 27°C",
    "ph": "6.4  -  7.9",
    "hardness": "1 - 15",
    "light": "בינוני, חזק",
    "growthRate": "Moderate",
    "placement": "אמצעי, אחורי, על פני המים",
    "languages": {
      "he": {
        "family": "Hydrocharitaceae",
        "synonyms": "הידרילה וורטיצילטה, Serpicula verticillata, Linné",
        "etymology": "Hydrilla (יווני) : hydor : מיים illein : להסתובב verticillata - על פי מיקום עלים",
        "distribution": "בכל העולם",
        "notes": "צמח קל מאוד לגידול, צומח במהירות רבה. ניתן להשתמש בתור סטרטר באקווריום צמחייה\r\t   למניעת התפרצות אצות. אין דרישות . מיוחדות",
        "propagation": "גיזום ושתילה מחדש. מספיק לגזום כ-10 . ס\"מ"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Hydrocotyle leucocephala",
    "latinName": "Hydrocotyle leucocephala",
    "images": [
      {
        "src": "Hydrocotyle_leucocephala.webp",
        "alt": "Hydrocotyle leucocephala 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "30 - 70 cm",
    "width": "5 - 14 cm",
    "temperature": "20 - 28°C",
    "ph": "6.4  -  7.9",
    "hardness": "1 - 15",
    "light": "בינוני, חזק, חזק מאוד",
    "growthRate": "גבוהה",
    "placement": "קדמי, אמצעי",
    "languages": {
      "he": {
        "family": "Apiaceae",
        "synonyms": "הידרוקוטילה ליוקוצפלה",
        "etymology": "Hydrocotyle (יווני) : hydor : מיים kotyle : צלקת leucocephala - ראש לבן (עקב פרחים לבנים)",
        "distribution": "מדרום מקסיקה עד צפון ארגנטינה",
        "notes": "צמח קל יחסית לגידול. אם יש מעט אור מהר מגיע עד לפני המים  ליצור שיכבה עבה.\r\t   אם יש הרבה אור, מרחקים בין העלים נעשים קצרים . וצמח נראה יפה מאוד",
        "propagation": "גיזום ושתילה מחדש. על שתל חייבים להיות . לפחות 3 - 4 עלים"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Hydrocotyle sibthorpioides",
    "latinName": "Hydrocotyle sibthorpioides",
    "images": [
      {
        "src": "Hydrocotyle_sibthorpioides.webp",
        "alt": "Hydrocotyle sibthorpioides 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "10 - 40 cm",
    "width": "3 - 8 cm",
    "temperature": "20 - 28°C",
    "ph": "6.2  -  7.4",
    "hardness": "1 - 8",
    "light": "Strong to very strong",
    "growthRate": "גבוהה",
    "placement": "קדמי, אמצעי",
    "languages": {
      "he": {
        "family": "Apiaceae",
        "synonyms": "הידרוקוטילה סיבטורפיוידס, Hydrocotyle puncticulata, Hydrocotyle latisecta, Hydrocotyle hirsuta",
        "etymology": "Hydrocotyle (יווני) : hydor : מיים kotyle : צלקת sibthorpioides - Sibthorpia דומה לסוג",
        "distribution": "אסיה",
        "notes": "קשה לגדל אותו לאורך זמן באקווריום, אך צומח טוב בפלודריום וסביב הבריכות",
        "propagation": "מתפשת לצדדים. ניתן לחלק מהשורש כמה . עלים ולהשתיל מחדש"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Hydrocotyle verticillata",
    "latinName": "Hydrocotyle verticillata",
    "images": [
      {
        "src": "Hydrocotyle_verticillata.webp",
        "alt": "Hydrocotyle verticillata 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "5 - 10 cm",
    "width": "3 - 6 cm",
    "temperature": "20 - 24°C",
    "ph": "6.4  -  7.9",
    "hardness": "1 - 15",
    "light": "Strong to very strong",
    "growthRate": "גבוהה",
    "placement": "Foreground",
    "languages": {
      "he": {
        "family": "Apiaceae",
        "synonyms": "הידרוקוטילה וורטיצילטה, Hydrocotyle vulgaris var. verticillata, Richard, H. volckmannii, Philippi",
        "etymology": "Hydrocotyle (יווני) : hydor : מיים kotyle : צלקת verticillata - עקב מיקום עלים",
        "distribution": "צפון ודרום אמריקה",
        "notes": ". קשה לגידול .צומח איטי מאוד. דורש תאורה חזקה וישירה",
        "propagation": "מתפשת לצדדים. ניתן לחלק מהשורש כמה . עלים ולהשתיל מחדש"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Hydrocotyle vulgaris",
    "latinName": "Hydrocotyle vulgaris",
    "images": [
      {
        "src": "Hydrocotyle_vulgaris.webp",
        "alt": "Hydrocotyle vulgaris 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "10 - 40 cm",
    "width": "3 - 8 cm",
    "temperature": "20 - 28°C",
    "ph": "6.2  -  7.4",
    "hardness": "1 - 8",
    "light": "חזק, חזק מאוד",
    "growthRate": "גבוהה",
    "placement": "קדמי, אמצעי",
    "languages": {
      "he": {
        "family": "Apiaceae",
        "synonyms": "הידרוקוטילה וולגריס",
        "etymology": "Hydrocotyle (יווני) : hydor : מיים kotyle : צלקת vulgaris : רגיל",
        "distribution": "אורופה, קבקז, אירן, אוסטרליה",
        "notes": ". צמח קשה לגידול מהר מאוד מגיע עד פני המים וצומח מעל המים, אך\r\t   אם לגזור ניצבי עלה ארוכים אפשר . זמן ממושך להחזיק צמח מתחת למים",
        "propagation": "מתפשת לצדדים. ניתן לחלק מהשורש כמה . עלים ולהשתיל מחדש"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Hydrothrix gardneri",
    "latinName": "",
    "images": [],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "",
    "width": "",
    "temperature": "",
    "ph": "",
    "hardness": "N/A",
    "light": "",
    "growthRate": "",
    "placement": "",
    "languages": {
      "he": {
        "family": "",
        "synonyms": "",
        "etymology": "",
        "distribution": "",
        "notes": "",
        "propagation": ""
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Hydrotriche hottoniiflora",
    "latinName": "",
    "images": [],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "",
    "width": "",
    "temperature": "",
    "ph": "",
    "hardness": "N/A",
    "light": "",
    "growthRate": "",
    "placement": "",
    "languages": {
      "he": {
        "family": "",
        "synonyms": "",
        "etymology": "",
        "distribution": "",
        "notes": "",
        "propagation": ""
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Hygrophila corymbosa",
    "latinName": "",
    "images": [],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "10 - 40 cm",
    "width": "3 - 8 cm",
    "temperature": "20 - 28°C",
    "ph": "6.2  -  7.4",
    "hardness": "1 - 8",
    "light": "Strong to very strong",
    "growthRate": "גבוהה",
    "placement": "אמצעי, אחורי",
    "languages": {
      "he": {
        "family": "Acanthaceae",
        "synonyms": "Nomaphila corymbosa, Blume (1826), Justica stricta, Vahl, Nomaphila stricta, (Vahl) Nees, Hygrophila stricta, (Vahl) Lindau",
        "etymology": "Hygrophila (.לטין) : hygros : לח philein : לאהוב corymbosa - בלזם, בלסמון",
        "distribution": "הודו, שרי-לנקה",
        "notes": "צמח קל לגידול. צומח מהר מאוד. דורש אור חזק וישיר. מהר מאוד יוצא מהמים, אך\r\t   אם לגזור ניצבי עלה ארוכים אפשר זמן ממושך להחזיק צמח מתחת למים. אוהב\r\t   מים רכים : קיימות הרבה ווריאציות של הצמח H. corymbosa \"Angustifolia\" H. corymbosa \"Siamensis\" H. corymbosa \"Stricta\"",
        "propagation": "גיזום ושתילה מחדש. מספיק לגזום כ-15 . ס\"מ"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Hygrophila difformis",
    "latinName": "",
    "images": [],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "30 - 80 cm",
    "width": "12 - 20 cm",
    "temperature": "24 - 28°C",
    "ph": "6.8  -  8.6",
    "hardness": "2 - 28",
    "light": "בינוני, חזק, חזק מאוד",
    "growthRate": "גבוהה מאוד",
    "placement": "אמצעי, אחורי",
    "languages": {
      "he": {
        "family": "Acanthaceae",
        "synonyms": "היגרופילה דיפורמיס, Ruellia difformis, Linné (1781), Ruellia triflora, Roxburgh, Synnema triflorum, O. Kuntze",
        "etymology": "Hygrophila (.לטין) : hygros : לח philein : לאהוב difformis - לא אחיד עקב צורות שונות של עלים",
        "distribution": "הודו, בירמה, תאילנד",
        "notes": "צמח קל לגידול, צומח מהר מאוד מה שעוזר . למנוע הופעת האצות לציין על הצמח יכולים לצמוח צורות שונות של העלים בגלל שינוי בתנאיי תאורה והתזונה.\r\t\tבחוסר אור ותזונה מפתח עלים . אליפסיים קטנים ובינוניים",
        "propagation": "גיזום ושתילה מחדש. מספיק לגזום כ-15 . ס\"מ"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Hygrophila guianensis",
    "latinName": "",
    "images": [],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "20 - 70 cm",
    "width": "8 - 25 cm",
    "temperature": "20 - 28°C",
    "ph": "6.0  -  7.4",
    "hardness": "1 - 8",
    "light": "Strong to very strong",
    "growthRate": "גבוהה",
    "placement": "קדמי, אמצעי",
    "languages": {
      "he": {
        "family": "Acanthaceae",
        "synonyms": "היגרופילה גוויאננסיס",
        "etymology": "Hygrophila (.לטין) : hygros : לח philein : לאהוב guianensis : מגוויאנה",
        "distribution": "אסיה : גוויאנה",
        "notes": "צמח די קשה לגידול. דורש אור חזק מאוד ומים רכים.\r\t\tצומח מהר. אם אין מספיק אור . מרחק בין העלים מתארך",
        "propagation": "גיזום ושתילה מחדש. מספיק לגזום כ-15 . ס\"מ"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Hygrophila polysperma",
    "latinName": "",
    "images": [],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "15 - 60 cm",
    "width": "8 - 16 cm",
    "temperature": "22 - 28°C",
    "ph": "6.8  -  8.6",
    "hardness": "6 - 18",
    "light": "חזק, חזק מאוד",
    "growthRate": "Moderate",
    "placement": "קדמי, אמצעי, אחורי",
    "languages": {
      "he": {
        "family": "Acanthaceae",
        "synonyms": "היגרופילה פוליספרמה, East Indian hygrophila, Miramar weed, Indian swampweed, Justicia polisperma, Roxburgh (1832), Ruellia polysperma, Wallich, Heliadelphis polysperma, Nees",
        "etymology": "Hygrophila (.לטין) : hygros : לח philein : לאהוב polysperma (.לטין) : poly : הרבה sperma : זרע",
        "distribution": "הודו, בוטן",
        "notes": "צמח נפוץ מאוד וקל מאוד לגידול. אין דרישות מיוחדות.\r\t\tעקב צמיחתו המהירה מתאים כסטרטר באקווריום צמחייה, מעקב התפרצותן של האצות אם אין מספיק אור עלים התחתונים נופלים ומרחק בין העלים מתארך : קיימות הרבה ווריאציות של הצמח H. polysperma \"Rosanervig\" H. polysperma \"Sunset\"",
        "propagation": "גיזום ושתילה מחדש. מספיק לגזום כ-10 . ס\"מ"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Hygrophila salicifolia",
    "latinName": "",
    "images": [],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "20 - 70 cm",
    "width": "8 - 25 cm",
    "temperature": "20 - 28°C",
    "ph": "6.0  -  7.4",
    "hardness": "1 - 12",
    "light": "Strong to very strong",
    "growthRate": "גבוהה",
    "placement": "אמצעי, אחורי",
    "languages": {
      "he": {
        "family": "Acanthaceae",
        "synonyms": "היגרופילה סליציפוליה",
        "etymology": "Hygrophila (.לטין) : hygros : לח philein : לאהוב salicifolia :",
        "distribution": "אסיה : גוויאנה",
        "notes": "צמח קל לגידול. דורש אור חזק מאוד .\r\t\tצומח מהר. אם אין מספיק אור מרחק בין העלים . מתארך",
        "propagation": "גיזום ושתילה מחדש. מספיק לגזום כ-15 . ס\"מ"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Isoetes taiwanensis",
    "latinName": "",
    "images": [],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "",
    "width": "",
    "temperature": "",
    "ph": "",
    "hardness": "N/A",
    "light": "",
    "growthRate": "",
    "placement": "",
    "languages": {
      "he": {
        "family": "",
        "synonyms": "",
        "etymology": "",
        "distribution": "",
        "notes": "",
        "propagation": ""
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Lagarosiphon cordofanus",
    "latinName": "Lagarosiphon cordofanus",
    "images": [
      {
        "src": "Lagarosiphon_cordofanus.webp",
        "alt": "Lagarosiphon cordofanus 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "10 - 30 cm",
    "width": "2 - 5 cm",
    "temperature": "25 - 28°C",
    "ph": "5.9  -  7.5",
    "hardness": "1 - 8",
    "light": "Very strong",
    "growthRate": "גבוהה",
    "placement": "קדמי, אמצעי,  על פני המים",
    "languages": {
      "he": {
        "family": "Hydrocharitaceae",
        "synonyms": "לגרוסיפון קורדופנוס, Udora cordofana, Hochstetter",
        "etymology": "Lagarosiphon (יווני) : lagaros : נבל siphon : צינור עקב צורתו של הצמח נקיבה cordofanus - עקב מיקום גאוגרפי ( הר קורדופאן בסודן)",
        "distribution": "מזרח ודרום אפריקה",
        "notes": "צמח קל מאוד לגידול. צומח מהר מאוד. ניתן להשתמש בתור סטרטר באקווריום צמחייה למניעת התפרצות אצות.\r\t   דורש אור חזק . ותוספת תזונה (CO2) . מייצר הרבה חמצן",
        "propagation": "גיזום ושתילה מחדש. מספיק לגזום כ-10 . ס\"מ"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Lagarosiphon madagascariensis",
    "latinName": "Lagarosiphon madagascariensis",
    "images": [
      {
        "src": "Lagarosiphon_madagascariensis.webp",
        "alt": "Lagarosiphon madagascariensis 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "10 - 30 cm",
    "width": "2 - 5 cm",
    "temperature": "24 - 28°C",
    "ph": "6.2  -  7.5",
    "hardness": "1 - 8",
    "light": "Very strong",
    "growthRate": "Moderate",
    "placement": "קדמי, אמצעי, על פני המים",
    "languages": {
      "he": {
        "family": "Hydrocharitaceae",
        "synonyms": "לגרוסיפון מדגסקרי, Lagarosiphon densus, Ridley",
        "etymology": "Lagarosiphon (יווני) : lagaros : נבל siphon : צינור עקב צורתו של הצמח נקיבה madagascariensis - ממדגסקר",
        "distribution": "מדגסקר",
        "notes": "צמח קל מאוד לגידול. צומח מהר מאוד. ניתן להשתמש בתור סטרטר באקווריום צמחייה . למניעת התפרצות אצות.\r\t   דורש אור חזק . מייצר הרבה חמצן",
        "propagation": "גיזום ושתילה מחדש. מספיק לגזום כ-10 . ס\"מ"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Lagarosiphon major",
    "latinName": "Lagarosiphon major",
    "images": [
      {
        "src": "Lagarosiphon_major.webp",
        "alt": "Lagarosiphon major 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "10 - 50 cm",
    "width": "3 - 8 cm",
    "temperature": "18 - 24°C",
    "ph": "6.2  -  7.8",
    "hardness": "2 - 16",
    "light": "Very strong",
    "growthRate": "Moderate",
    "placement": "קדמי, אמצעי, אחורי, על פני המים",
    "languages": {
      "he": {
        "family": "Hydrocharitaceae",
        "synonyms": "לגרוסיפון גדול, African elodea, Curly water thyme, Oxygen weed, South African oxygen weed, Lagarosiphon muscoides, Harvey, var. major, (Ridley), 1886, Elodea crispa",
        "etymology": "Lagarosiphon (יווני) : lagaros : נבל siphon : צינור עקב צורתו של הצמח נקיבה major - גדול",
        "distribution": "דרום אפריקה",
        "notes": "צמח קל מאוד לגידול. צומח מהר מאוד. ניתן להשתמש בתור סטרטר באקווריום צמחייה למניעת התפרצות אצות.\r\t   יחד עם זאת לא אוהב טמפרטורות גבוהות ובטמפרטורת . המים גבוהה מ25 מעלות מתחיל להתפרק .\r\t   דורש אור חזק. מייצר הרבה חמצן",
        "propagation": "גיזום ושתילה מחדש. מספיק לגזום כ-10 . ס\"מ"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Lilaeopsis brasiliensis",
    "latinName": "",
    "images": [],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "",
    "width": "",
    "temperature": "",
    "ph": "",
    "hardness": "N/A",
    "light": "",
    "growthRate": "",
    "placement": "",
    "languages": {
      "he": {
        "family": "",
        "synonyms": "",
        "etymology": "",
        "distribution": "",
        "notes": "",
        "propagation": ""
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Lilaeopsis carolinensis",
    "latinName": "",
    "images": [],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "",
    "width": "",
    "temperature": "",
    "ph": "",
    "hardness": "N/A",
    "light": "",
    "growthRate": "",
    "placement": "",
    "languages": {
      "he": {
        "family": "",
        "synonyms": "",
        "etymology": "",
        "distribution": "",
        "notes": "",
        "propagation": ""
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Limnobium laevigatum",
    "latinName": "Limnobium laevigatum",
    "images": [
      {
        "src": "Limnobium_laevigatum.webp",
        "alt": "Limnobium laevigatum 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "1 - 5 cm",
    "width": "5 - 10 cm",
    "temperature": "10 - 35°C",
    "ph": "6.0  -  8.0",
    "hardness": "2 - 18",
    "light": "בינוני, חזק , חזק מאוד",
    "growthRate": "נמוכה , בינונית",
    "placement": "צף על פני המים",
    "languages": {
      "he": {
        "family": "Hydrocharitaceae",
        "synonyms": "לימנוביום לביגטום, Salvinia laevigata, Willdenow, (1810), Hydromystria laevigata, (Willdenow) A.T. Hunziker, Limnobium stoloniferum, (G.F.W. Meyer) Grisebach",
        "etymology": "Limnobium : limne : ביצה bios : חיים laevigatum : חלק כנראה עקב צד החיצוני החלק של העלה",
        "distribution": "מרכז ודרום אמריקה",
        "notes": "צמח קל לגידול. מתפשת במהירות על פני המים. ניתן להשתמש באקווריום\r\t   רבייה לדגים הבונים קן בועות על פני המים וגם למקום הסתתרות של הדגיגים בין השורשי . הצמח . מתאים לגידול בבריכות",
        "propagation": "מתפשת בעזרת צמחי-בת לצדדים . ניתן לקחת כמה עלים עם שורשים ולהעביר . למקום אחר"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Limnophila aquatica",
    "latinName": "Limnophila aquatica",
    "images": [
      {
        "src": "Limnophila_aquatica.webp",
        "alt": "Limnophila aquatica 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "cm 30 - 70",
    "width": "cm 8 - 18",
    "temperature": "22 - 28°C",
    "ph": "6.2  -  7.8",
    "hardness": "2 - 14",
    "light": "Very strong",
    "growthRate": "גבוהה",
    "placement": "Midground",
    "languages": {
      "he": {
        "family": "Scrophulariaceae",
        "synonyms": "אמבוליה, לימנופילה אקווטיקה, Ambulia, Giant Ambulia, Cyrilla aquatica, Roxburgh, , (1798)",
        "etymology": "Limnophila : limne : בצה philos : חבר, אהבה aquatica : גר במים",
        "distribution": "חצי-אי אינדוסטאן, צאילון",
        "notes": "צמח אחד מהיפים שמגדלים באקווריום. תחת אור חזק מאוד וישיר צומח מהר. אוהב מים\r\t  נקיים , רכים ומעט חומציים. רצוייה תוספת תזונה (דישון ופד\"ח). אם אין מספיק אור\r\t  מרחקים בים העלים מתארכים מאוד ועלים . התחתונים נופלים",
        "propagation": "גיזום ושתילה מחדש. מספיק לגזול כ-10 . ס\"מ"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Limnophila aromatica",
    "latinName": "",
    "images": [],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "30 - 50cm",
    "width": "6 - 14cm",
    "temperature": "22 - 27°C",
    "ph": "5.8  -  7.4",
    "hardness": "2 - 14",
    "light": "Very strong",
    "growthRate": "גבוהה",
    "placement": "Midground",
    "languages": {
      "he": {
        "family": "Scrophulariaceae",
        "synonyms": "לימנופילה ארומטיקה, Ambulia aromatica, Lamarck, , (1783)",
        "etymology": "Limnophila : limne : בצה philos : חבר, אהבה aromatica : ארומתית, ניחוחית",
        "distribution": "דרום-מזרח אסיה",
        "notes": "צמח קשה לגידול. צומח איטי. מתאים יותר לגידול בפלודריום וסביב הבריכות.\r\t  באקווריום . דורש אור חזק מאוד וישיר",
        "propagation": "גיזום ושתילה מחדש. מספיק לגזול כ-10 . ס\"מ"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Limnophila indica",
    "latinName": "Limnophila indica",
    "images": [
      {
        "src": "Limnophila_indica.webp",
        "alt": "Limnophila indica 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "cm 30 - 80",
    "width": "cm 4 - 8",
    "temperature": "25 - 28°C",
    "ph": "6.7  -  8.5",
    "hardness": "2 - 16",
    "light": "Very strong",
    "growthRate": "גבוהה",
    "placement": "Midground",
    "languages": {
      "he": {
        "family": "Scrophulariaceae",
        "synonyms": "לימנופילה הודית, Hottonia indica, Linnè, (1762)",
        "etymology": "Limnophila : limne : בצה philos : חבר, אהבה indica : מהודו",
        "distribution": "אזורים טרופיים באפריקה, באסיה ובאוסטרליה",
        "notes": "צומח במהירות בינונית, קל יחסית לגידול. יש לדאוג לאור חזק וישיר. בחוסר אור עלים התחתונים\r\t  נופלים מהר ומרחקים בין העלים . מתארכים",
        "propagation": "גיזום ושתילה מחדש. מספיק לגזול כ-10 . ס\"מ"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Lobelia cardinalis",
    "latinName": "Lobelia cardinalis",
    "images": [
      {
        "src": "Lobelia_cardinalis.webp",
        "alt": "Lobelia cardinalis 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "10 - 30 cm",
    "width": "5 - 10 cm",
    "temperature": "22 - 26°C",
    "ph": "5.8  -  7.9",
    "hardness": "2 - 16",
    "light": "Strong to very strong",
    "growthRate": "גבוהה",
    "placement": "קדמי , אמצעי",
    "languages": {
      "he": {
        "family": "Lobeliaceae",
        "synonyms": "",
        "etymology": "Lobelia :            בשם בוטניקאי M. de l'Obel (1538 - 1616) cardinalis - ארגמן , אדום כהה צועק (עקב צבע פרח)",
        "distribution": "מרכז ומזרח של צפון אמריקה",
        "notes": "צמח בקושי בינוני לגידול. צריך אור חזק . ותזונה טובה. אוהב מים רכים וחומציים \"משתילים בצורת מדרגות ועושים \"רחוב . מצמח מתאים לגידול בפלודריום. צומח טוב סביב . הבריכות",
        "propagation": "גיזום ושתילה מחדש. מספיק לגזום . כ-5-10 ס\"מ"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Ludwigia arcuata",
    "latinName": "Ludwigia arcuata",
    "images": [
      {
        "src": "Ludwigia_arcuata.webp",
        "alt": "Ludwigia arcuata 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "10 - 30 cm",
    "width": "4 - 8 cm",
    "temperature": "24 - 26°C",
    "ph": "6.4  -  7.6",
    "hardness": "2 - 8",
    "light": "חזק , חזק מאוד",
    "growthRate": "בינונית - גבוהה",
    "placement": "קדמי , אמצעי",
    "languages": {
      "he": {
        "family": "Onagraceae",
        "synonyms": "ליודביגיה ארקואטה, Ludwigia pedunculosa, Michaux, Isnardia pedunculosa, de Candolle, Snardia arcuata, Kuntze, Ludwigiantha arcuata, Smoll",
        "etymology": "Ludwigia :            בשם בוטניקאי C.G. Ludwig (1709 - 1773) arcuata - מקושת , קשתי",
        "distribution": "מזרח של צפון אמריקה",
        "notes": ".באור חזק העלים מקבלים צבע אדום .באם יש חוסר אור צבע אדום מתחלף\r\t   לירוק צמח קשה לגידול. אוהב מים רכים. צומח . איטי יחסית",
        "propagation": "גיזום ושתילה מחדש. מספיק לגזום כ-15 . ס\"מ"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Ludwigia brevipes",
    "latinName": "",
    "images": [],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "20 - 50 cm",
    "width": "4 - 10 cm",
    "temperature": "22 - 26°C",
    "ph": "6.4  -  7.6",
    "hardness": "2 - 8",
    "light": "Very strong",
    "growthRate": "גבוהה מאוד",
    "placement": "קדמי , אמצעי",
    "languages": {
      "he": {
        "family": "Onagraceae",
        "synonyms": "ליודביגיה ברביפס, Ludwigiantha brevipes, Long, (1913)",
        "etymology": "Ludwigia :            בשם בוטניקאי C.G. Ludwig (1709 - 1773) brevipes - פטוטרת קצרה",
        "distribution": "חוף דרום-מזרחי של אה''ב",
        "notes": "צמח יפה מאוד, אך קשה לגידול. דורש אור חזק מאוד וישיר , מים רכים ותזונה טובה כולל דישון ופד\"ח).\r\t   בתנאיים טובים צומח) מהר. אם אין מספיק אור, עלים התחתונים . נופלים ומרחק בין העלים מתארך",
        "propagation": "גיזום ושתילה מחדש. מספיק לגזום כ-15 . ס\"מ"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Ludwigia epilobioides",
    "latinName": "",
    "images": [],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "15 - 50 cm",
    "width": "6 - 12 cm",
    "temperature": "23 - 27°C",
    "ph": "5.5  -  7.5",
    "hardness": "1 - 14",
    "light": "חזק , חזק מאוד",
    "growthRate": "בינונית - גבוהה",
    "placement": "קדמי , אמצעי",
    "languages": {
      "he": {
        "family": "Onagraceae",
        "synonyms": "ליודביגיה אפילוביוידס, Fireweed ludwigia",
        "etymology": "Ludwigia :            בשם בוטניקאי C.G. Ludwig (1709 - 1773) epilobioides :",
        "distribution": "צפון ודרום אמריקה",
        "notes": "צמח די נדיר. באור חזק וישיר העלים נעשים . אדומים",
        "propagation": "גיזום ושתילה מחדש. מספיק לגזום כ-10 . ס\"מ"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Ludwigia glandulosa",
    "latinName": "Ludwigia glandulosa",
    "images": [
      {
        "src": "Ludwigia_glandulosa.webp",
        "alt": "Ludwigia glandulosa 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "20 - 100 cm",
    "width": "5 - 14 cm",
    "temperature": "20 - 24°C",
    "ph": "6.2  -  7.8",
    "hardness": "2 - 16",
    "light": "Very strong",
    "growthRate": "גבוהה מאוד",
    "placement": "קדמי , אמצעי",
    "languages": {
      "he": {
        "family": "Onagraceae",
        "synonyms": "ליודביגיה גלנדולוזה, L. cylindrica, Elliot, L. heterophylla, Poiret, Jussiaea brachycarpa, Lamarck",
        "etymology": "Ludwigia :            בשם בוטניקאי C.G. Ludwig (1709 - 1773) glandulosa - בלוטותית",
        "distribution": "צפון אמריקה",
        "notes": "צמח קשה לגידול . נדיר יחסית . דורש אור חזק מאוד וישיר ותזונה טובה (כולל דישון ופד\"ח) .\r\t   תחת אור חזק מפתח עלים אדמדמים יפים מאוד. בחוסר אור עלים התחתונים מהר . מאוד נופלים. צומח איטי",
        "propagation": "גיזום ושתילה מחדש. מספיק לגזום כ-10 . ס\"מ"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Ludwigia inclinata",
    "latinName": "",
    "images": [],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "15 - 50 cm",
    "width": "6 - 12 cm",
    "temperature": "23 - 30°C",
    "ph": "5.5  -  7.2",
    "hardness": "1 - 14",
    "light": "חזק , חזק מאוד",
    "growthRate": "בינונית - גבוהה",
    "placement": "קדמי , אמצעי",
    "languages": {
      "he": {
        "family": "Onagraceae",
        "synonyms": "Jussiaea inclinata, Linnè, (1781)",
        "etymology": "Ludwigia :            בשם בוטניקאי C.G. Ludwig (1709 - 1773) inclinata - משופע פנימה (סיבה לא ידועה)",
        "distribution": "צפון ודרום אמריקה",
        "notes": "באור חזק העלים מקבלים צבע אדום . צומח . הרבה יותר טוב\r\t   במים חומציים ורכים",
        "propagation": "גיזום ושתילה מחדש. מספיק לגזום כ-10 . ס\"מ"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Ludwigia ovalis",
    "latinName": "Ludwigia ovalis",
    "images": [
      {
        "src": "Ludwigia_ovalis.webp",
        "alt": "Ludwigia ovalis 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "15 - 50 cm",
    "width": "4 - 10 cm",
    "temperature": "18 - 25°C",
    "ph": "6.0  -  7.5",
    "hardness": "1 - 14",
    "light": "חזק , חזק מאוד",
    "growthRate": "בינונית - גבוהה",
    "placement": "קדמי , אמצעי",
    "languages": {
      "he": {
        "family": "Onagraceae",
        "synonyms": "ליודביגיה אובליס, Oval Ludwigia",
        "etymology": "Ludwigia :            בשם בוטניקאי C.G. Ludwig (1709 - 1773) ovalis : מעוגל",
        "distribution": "יפן",
        "notes": "צמח די קל לגידול. מעדיךף אור חזק וישיר. בחוסר אור מרחקים בין העלים מתארכים . ועלים\r\t  התחתונים נופלים",
        "propagation": "גיזום ושתילה מחדש. מספיק לגזום כ-10 . ס\"מ"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Ludwigia palustris",
    "latinName": "Ludwigia palustris",
    "images": [
      {
        "src": "Ludwigia_palustris.webp",
        "alt": "Ludwigia palustris 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "15 - 70 cm",
    "width": "4 - 8 cm",
    "temperature": "22 - 26°C",
    "ph": "6.4  -  7.6",
    "hardness": "2 - 14",
    "light": "חזק , חזק מאוד",
    "growthRate": "בינונית - גבוהה",
    "placement": "קדמי , אמצעי",
    "languages": {
      "he": {
        "family": "Onagraceae",
        "synonyms": "ליודביגיה פלוסטריס, Marsh primrose-willow, Marsh seedbox, Water purslane, Isnardia palustris, Linnè, (1753), Ludwigia palustris var. americana, (DC.) Fern. & Grisc., Ludwigia palustris var. nana, Fern. & Grisc., Ludwigia palustris var. pacifica, Fern. & Grisc.",
        "etymology": "Ludwigia :            בשם בוטניקאי C.G. Ludwig (1709 - 1773) palustris - בצתי",
        "distribution": "בכל העולם",
        "notes": ".באור חזק העלים מקבלים צבע אדום .באם יש חוסר אור צבע אדום מתחלף\r\t   לירוק צומח מהר ודי מהר מגיע לפני המים ויוצא . מהמים, אז ניתן לראות פריחתו . קיימות מספר ווריאציות צבע",
        "propagation": "גיזום ושתילה מחדש. מספיק לגזום כ-10 . ס\"מ"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Ludwigia repens",
    "latinName": "Ludwigia repens",
    "images": [
      {
        "src": "Ludwigia_repens.webp",
        "alt": "Ludwigia repens 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "15 - 70 cm",
    "width": "4 - 8 cm",
    "temperature": "20 - 25°C",
    "ph": "6.2  -  7.8",
    "hardness": "2 - 16",
    "light": "בינוני , חזק",
    "growthRate": "גבוהה",
    "placement": "קדמי , אמצעי",
    "languages": {
      "he": {
        "family": "Onagraceae",
        "synonyms": "ליודביגיה רפנס, Broad Leaf Ludwigia \r\t   Creeping primrosewillow, Creeping waterprimrose, Creeping ludwigia, Narrow-leaf ludwigia, Red ludwigia, Ludwigia natans, Elliot, (1821)",
        "etymology": "Ludwigia :            בשם בוטניקאי C.G. Ludwig (1709 - 1773) repens - זוחלת",
        "distribution": "צפון אמריקה",
        "notes": "צמח נפוץ וקל לגידול. צומח מהר . \r\t   לציין שבאור חזק מאוד וישיר ועם תזונה טובה כולל דישון ופד\"ח) העלים נעשים אדומים) . קהה",
        "propagation": "גיזום ושתילה מחדש. מספיק לגזום כ-10 . ס\"מ"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Ludwigia repens x arcuata",
    "latinName": "Ludwigia repens x arcuata",
    "images": [
      {
        "src": "Ludwigia_repens_x_arcuata.webp",
        "alt": "Ludwigia repens x arcuata 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "15 - 50 cm",
    "width": "5 - 10 cm",
    "temperature": "24 - 26°C",
    "ph": "6.4  -  7.6",
    "hardness": "2 - 14",
    "light": "חזק , חזק מאוד",
    "growthRate": "בינונית - גבוהה",
    "placement": "קדמי , אמצעי, אחורי",
    "languages": {
      "he": {
        "family": "Onagraceae",
        "synonyms": "ארקואטה  x ליודביגיה רפנס",
        "etymology": "Ludwigia :            בשם בוטניקאי C.G. Ludwig (1709 - 1773)",
        "distribution": "הכלאה מלכותית",
        "notes": ". הכלאה צמח קל לגידול. ללא דרישות מיוחדות לתאורה ולתזונה.\r\t   .באור חזק העלים מקבלים צבע אדום . באם יש חוסר אור צבע אדום . מתחלף\r\t   לירוק",
        "propagation": "גיזום ושתילה מחדש. מספיק לגזום כ-10 . ס\"מ"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Ludwigia sedoides",
    "latinName": "",
    "images": [],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "10 - 25 cm",
    "width": "6 - 12 cm",
    "temperature": "23 - 35°C",
    "ph": "5.5  -  7.2",
    "hardness": "1 - 8",
    "light": "Very strong",
    "growthRate": "גבוהה",
    "placement": "קדמי , אמצעי",
    "languages": {
      "he": {
        "family": "Onagraceae",
        "synonyms": "ליודביגיה סדוידס, Jussiaea sedoides, Hambold & Bonpland, (1805)",
        "etymology": "Ludwigia :            בשם בוטניקאי C.G. Ludwig (1709 - 1773) sedoides - (Sedum) דומה לסוג סדום",
        "distribution": "דרום ומרכז אמריקה",
        "notes": "צמח קשה לגידול . דורש טמפרטורות גבוהות . ואור חזק מאוד.\r\t   מהר מאוד יוצא מעל המים , מתאים יותר לגידול בפלודריום ובבריכות . פחות באקווריום",
        "propagation": "גיזום ושתילה מחדש. מספיק לגזום כ-10 . ס\"מ"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Ludwigia sp. \"Cuba\"",
    "latinName": "",
    "images": [],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "15 - 30 cm",
    "width": "6 - 12 cm",
    "temperature": "23 - 30°C",
    "ph": "5.5  -  7.2",
    "hardness": "1 - 8",
    "light": "חזק , חזק מאוד",
    "growthRate": "גבוהה",
    "placement": "קדמי , אמצעי",
    "languages": {
      "he": {
        "family": "Onagraceae",
        "synonyms": "\"ליודביגיה \"קובה, Ludwigia sp. \"Cuba\"",
        "etymology": "Ludwigia :            בשם בוטניקאי C.G. Ludwig (1709 - 1773) inclinata - משופע פנימה (סיבה לא ידועה)",
        "distribution": "קובה",
        "notes": "צמח בקושי בינוני לגידול. צומח איטי. אוהב מים רכים וחומציים.\r\t   מראה את יופי שלו תחת אור חזק וישיר ועם תוספת תזונה (דשן . (ופד\"ח",
        "propagation": "גיזום ושתילה מחדש. מספיק לגזום כ-10 . ס\"מ"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Mayaca fluviatilis",
    "latinName": "Mayaca fluviatilis",
    "images": [
      {
        "src": "Mayaca_fluviatilis.webp",
        "alt": "Mayaca fluviatilis 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "20 - 60 cm",
    "width": "2 - 4 cm",
    "temperature": "23 - 25°C",
    "ph": "5.5  -  6.9",
    "hardness": "0 - 6",
    "light": "Very strong",
    "growthRate": "גבוהה",
    "placement": "קדמי , אמצעי",
    "languages": {
      "he": {
        "family": "Mayacaceae",
        "synonyms": "מאיאקה פלוביאטיליס, Mayaca aubletii, Michaux, M. vandelii, Schott & Endlicher",
        "etymology": "Mayaca :  עמק בסנטראמו בברזיל fluviatilis - גר בנהר או לידו",
        "distribution": "מרכז ודרום אמריקה",
        "notes": "צמח קשה לגידול , רגיש מאוד לחוסר ברזל. דורש אור חזק וישיר. אם יש מספיק\r\t   אור ותוספת תזונה (דישון ופד\"ח) צומח מהר . מאוד",
        "propagation": "גיזום ושתילה מחדש. מספיק לגזול כ-10 . ס\"מ"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Mayaca sellowiana",
    "latinName": "Mayaca sellowiana",
    "images": [
      {
        "src": "Mayaca_sellowiana.webp",
        "alt": "Mayaca sellowiana 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "15 - 50 cm",
    "width": "2 - 4 cm",
    "temperature": "24 - 28°C",
    "ph": "5.5  -  6.9",
    "hardness": "0 - 6",
    "light": "Very strong",
    "growthRate": "גבוהה",
    "placement": "קדמי , אמצעי",
    "languages": {
      "he": {
        "family": "Mayacaceae",
        "synonyms": "Rotala sp. \"Nanjenshan\", Mayaca boliviana, Rusby",
        "etymology": "Mayaca :  עמק בסנטראמו בברזיל sellowiana :",
        "distribution": "דרום אמריקה",
        "notes": "צמח קשה לגידול. דורש אור חזק וישיר. אם יש מספיק\r\t   אור ותוספת תזונה (דישון ופד\"ח) צומח מהר מאוד. אוהב מים רכים מאוד . וחומציים",
        "propagation": "גיזום ושתילה מחדש. מספיק לגזול כ-10 . ס\"מ"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Mayaca sp.",
    "latinName": "Mayaca sp.",
    "images": [
      {
        "src": "Mayaca_sp.webp",
        "alt": "Mayaca sp. 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "15 - 50 cm",
    "width": "2 - 4 cm",
    "temperature": "24 - 28°C",
    "ph": "5.5  -  6.9",
    "hardness": "0 - 6",
    "light": "Very strong",
    "growthRate": "גבוהה",
    "placement": "קדמי , אמצעי",
    "languages": {
      "he": {
        "family": "Mayacaceae",
        "synonyms": "מאיאקה",
        "etymology": "Mayaca :  עמק בסנטראמו בברזיל",
        "distribution": "דרום אמריקה",
        "notes": "צמח קשה לגידול. דורש אור חזק וישיר. אם יש מספיק\r\t   אור ותוספת תזונה (דישון ופד\"ח) צומח מהר מאוד. אוהב מים רכים מאוד . וחומציים",
        "propagation": "גיזום ושתילה מחדש. מספיק לגזול כ-10 . ס\"מ"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Mayaca sp.1",
    "latinName": "Mayaca sp.",
    "images": [
      {
        "src": "Mayaca_sp.1.webp",
        "alt": "Mayaca sp.1 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "15 - 50 cm",
    "width": "2 - 4 cm",
    "temperature": "24 - 28°C",
    "ph": "5.5  -  6.9",
    "hardness": "0 - 6",
    "light": "Very strong",
    "growthRate": "גבוהה",
    "placement": "קדמי , אמצעי",
    "languages": {
      "he": {
        "family": "Mayacaceae",
        "synonyms": "מאיאקה",
        "etymology": "Mayaca :  עמק בסנטראמו בברזיל",
        "distribution": "דרום אמריקה",
        "notes": "צמח קשה לגידול. דורש אור חזק וישיר. אם יש מספיק\r\t   אור ותוספת תזונה (דישון ופד\"ח) צומח מהר מאוד. אוהב מים רכים מאוד . וחומציים",
        "propagation": "גיזום ושתילה מחדש. מספיק לגזול כ-10 . ס\"מ"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Microcarpaea minima",
    "latinName": "",
    "images": [],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "",
    "width": "",
    "temperature": "",
    "ph": "",
    "hardness": "N/A",
    "light": "",
    "growthRate": "",
    "placement": "",
    "languages": {
      "he": {
        "family": "",
        "synonyms": "",
        "etymology": "",
        "distribution": "",
        "notes": "",
        "propagation": ""
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Microsorum pteropus",
    "latinName": "",
    "images": [],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "עד 30 cm",
    "width": "10 - 30cm",
    "temperature": "20 - 28°C",
    "ph": "7.2  -  8.5",
    "hardness": "1.0 - 15.0dGH",
    "light": "בינוני - חזק",
    "growthRate": "Moderate",
    "placement": "Background",
    "languages": {
      "he": {
        "family": "Polypodiaceae",
        "synonyms": "מיקרוסורום, Wart Ferns, Polypodium pteropus, Blume, , 1829, Polypodium tridactylon, Wallich, Pleopeltis pteropus, Moore, Colysis pteropus, (Blume) Bosman",
        "etymology": "Microsorum  (יווני) : micros - קטן soros - ספורות pteropus - דמוי כנף",
        "distribution": "אסיה",
        "notes": "אין להשתיל את השורשים בתוך החצץ אלא רק לתפוס עם משהוא מעל החצץ.\r\t   לא אוהב . העברת ממקום למקום . צומח איטי קיימים מספר ווריאציות עם גודל וצבע עלים . שונה",
        "propagation": ""
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Myriophyllum aquaticum",
    "latinName": "Myriophyllum aquaticum",
    "images": [
      {
        "src": "Myriophyllum_aquaticum.webp",
        "alt": "Myriophyllum aquaticum 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "15 - 40 cm",
    "width": "2 - 6 cm",
    "temperature": "15 - 23°C",
    "ph": "6.0  -  7.4",
    "hardness": "1 - 8",
    "light": "Strong",
    "growthRate": "גבוהה",
    "placement": "Midground",
    "languages": {
      "he": {
        "family": "Haloragaceae",
        "synonyms": "מיריופילום אקווטיקום, Enydria aquatica, Vellozo, (1825), Myriophyllum brasiliense, Cambessedes, Myriophyllum proserpinacoides, Hooker & Arnott",
        "etymology": "Myriophyllum : myros : לא ניתן לספור אותו phyllon : עלה עקב צורת עלה aquaticum - גר במיים",
        "distribution": "דרום אמריקה",
        "notes": "צמח יפה מאוד. דרגת קושי לגידול - בינונית. צריך אור חזק וישיר. לא אוהב מים מלוכלכים ובנוסף יכול להפגע \r\t   מאצות. רצויה הזרמת . פד\"ח",
        "propagation": "גיזום ושתילה מחדש. מספיק לגזול כ-10 . ס\"מ"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Myriophyllum hippuroides",
    "latinName": "Myriophyllum hippuroides",
    "images": [
      {
        "src": "Myriophyllum_hippuroides.webp",
        "alt": "Myriophyllum hippuroides 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "20 - 100 cm",
    "width": "4 - 8 cm",
    "temperature": "20 - 28°C",
    "ph": "6.0  -  8.0",
    "hardness": "1 - 16",
    "light": "Very strong",
    "growthRate": "גבוהה",
    "placement": "אמצעי , אחורי",
    "languages": {
      "he": {
        "family": "Haloragaceae",
        "synonyms": "מיריופילום היפורוידס, Western milfoil",
        "etymology": "Myriophyllum : myros : לא ניתן לספור אותו phyllon : עלה עקב צורת עלה hippuroides :",
        "distribution": "צפון ומרכז אמריקה",
        "notes": "צמח קל יחסית לגידול, צומח מהר, אך דורש הרבה אור ולא אוהב מים מלוכלכים",
        "propagation": "גיזום ושתילה מחדש. מספיק לגזול כ-10 . ס\"מ"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Myriophyllum mattogrossense",
    "latinName": "Myriophyllum mattogrossense",
    "images": [
      {
        "src": "Myriophyllum_mattogrossense.webp",
        "alt": "Myriophyllum mattogrossense 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "15 - 50 cm",
    "width": "5 - 10 cm",
    "temperature": "24 - 28°C",
    "ph": "6.4  -  7.6",
    "hardness": "1 - 8",
    "light": "Very strong",
    "growthRate": "גבוהה מאוד",
    "placement": "קדמי , אמצעי",
    "languages": {
      "he": {
        "family": "Haloragaceae",
        "synonyms": "מיריופילום מטוגרוסנסה",
        "etymology": "Myriophyllum : myros : לא ניתן לספור אותו phyllon : עלה עקב צורת עלה mattogrossense - ממדינת מאטא-גרוסו בברזיל",
        "distribution": "אקוודור, ברזיל, פרו",
        "notes": "צמח יפה מאוד. קשה יחסית לגידול. דורש תוספות תזונה (דישון ופד\"ח) ואור חזק מאוד וישיר.\r\t   קיימות שתי צורות צבע - עם עלים . אדמדמים ועלים ירוקים",
        "propagation": "גיזום ושתילה מחדש. מספיק לגזול כ-10 . ס\"מ"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Myriophyllum pinnatum",
    "latinName": "Myriophyllum pinnatum",
    "images": [
      {
        "src": "Myriophyllum_pinnatum.webp",
        "alt": "Myriophyllum pinnatum 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "30 - 200 cm",
    "width": "4 - 8 cm",
    "temperature": "20 - 25°C",
    "ph": "6.2  -  7.8",
    "hardness": "1 - 8",
    "light": "Very strong",
    "growthRate": "גבוהה",
    "placement": "אמצעי , אחורי",
    "languages": {
      "he": {
        "family": "Haloragaceae",
        "synonyms": "מיריופילום פינטום, Potamogeton pinnatum, Walter, (1788), Myriophyllum scabratum, Michaux",
        "etymology": "Myriophyllum : myros : לא ניתן לספור אותו phyllon : עלה עקב צורת עלה pinnatum - דמוי נוצה (עקב עלה)",
        "distribution": "מזרח של צפון אמריקה",
        "notes": "צמח קשה לגידול. דורש אור חזק מאוד וישיר. לא סובל לכלוך במים. נפגע מאצות.\r\t   רצוייה . הזרמת פד\"ח",
        "propagation": "גיזום ושתילה מחדש. מספיק לגזול כ-10 . ס\"מ"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Myriophyllum simulans",
    "latinName": "Myriophyllum simulans",
    "images": [
      {
        "src": "Myriophyllum_simulans.webp",
        "alt": "Myriophyllum simulans 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "30 - 100 cm",
    "width": "4 - 8 cm",
    "temperature": "20 - 28°C",
    "ph": "6.2  -  7.8",
    "hardness": "1 - 12",
    "light": "Very strong",
    "growthRate": "גבוהה",
    "placement": "אמצעי , אחורי",
    "languages": {
      "he": {
        "family": "Haloragaceae",
        "synonyms": "מיריופילום סימולנס",
        "etymology": "Myriophyllum : myros : לא ניתן לספור אותו phyllon : עלה עקב צורת עלה simulans - דמוי , דומה , מרמה בגלל שדומה מאוד ל M. gracile ו M. variifolium",
        "distribution": "מזרח אוסטרליה",
        "notes": "צמח קל יחסית לגידול , אך עדין ורגיש לחוסר . אור , לאצות וללכלוך",
        "propagation": "גיזום ושתילה מחדש. מספיק לגזול כ-10 . ס\"מ"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Myriophyllum spicatum",
    "latinName": "Myriophyllum spicatum",
    "images": [
      {
        "src": "Myriophyllum_spicatum.webp",
        "alt": "Myriophyllum spicatum 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "20 - 100 cm",
    "width": "4 - 8 cm",
    "temperature": "10 - 28°C",
    "ph": "5.5  -  8.5",
    "hardness": "1 - 20",
    "light": "Very strong",
    "growthRate": "Moderate",
    "placement": "אמצעי , אחורי",
    "languages": {
      "he": {
        "family": "Haloragaceae",
        "synonyms": "מיריופילום ספיקטום, Eurasian watermilfoil",
        "etymology": "Myriophyllum : myros : לא ניתן לספור אותו phyllon : עלה עקב צורת עלה spicatum :",
        "distribution": "איברזיה, אפריקה, צפון אמריקה",
        "notes": "צמח קל לגידול, צומח מהר מאוד בכל . התנאים. רגיש לאצות וללכלוך",
        "propagation": "גיזום ושתילה מחדש. מספיק לגזול כ-10 . ס\"מ"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Myriophyllum tuberculatum",
    "latinName": "Myriophyllum tuberculatum",
    "images": [
      {
        "src": "Myriophyllum_tuberculatum.webp",
        "alt": "Myriophyllum tuberculatum 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "30 - 200 cm",
    "width": "3 - 8 cm",
    "temperature": "22 - 28°C",
    "ph": "5.9  -  7.2",
    "hardness": "1 - 8",
    "light": "Very strong",
    "growthRate": "גבוהה",
    "placement": "אמצעי , אחורי",
    "languages": {
      "he": {
        "family": "Haloragaceae",
        "synonyms": "מיריופילום טוברקולטום, Myriophyllum tetrandum, Graham, Myriophyllum indicum, Griffith, Myriophyllum spathulathum, Blatt. & Hallbl.",
        "etymology": "Myriophyllum : myros : לא ניתן לספור אותו phyllon : עלה עקב צורת עלה tuberculatum - דמוי פקעת עקב צורת פרי",
        "distribution": "הודו, פקיסטאן, אינדונזיה",
        "notes": "צמח קשה לגידול, רגיש מאוד ללכלוך במים . ולאצות, דורש הרבה פד\"ח ואור מאוד חזק",
        "propagation": "גיזום ושתילה מחדש. מספיק לגזול כ-10 . ס\"מ"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Myriophyllum ussuriense",
    "latinName": "Myriophyllum ussuriense",
    "images": [
      {
        "src": "Myriophyllum_ussuriense.webp",
        "alt": "Myriophyllum ussuriense 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "20 - 100 cm",
    "width": "4 - 8 cm",
    "temperature": "10 - 30°C",
    "ph": "6.0  -  8.0",
    "hardness": "1 - 16",
    "light": "Very strong",
    "growthRate": "גבוהה",
    "placement": "אמצעי , אחורי",
    "languages": {
      "he": {
        "family": "Haloragaceae",
        "synonyms": "מיריופילום אוסוריאנסה, Myriophyllum verticillatum, Linnè, var., ussuriense, Regel, (1861)",
        "etymology": "Myriophyllum : myros : לא ניתן לספור אותו phyllon : עלה עקב צורת עלה ussuriense - מנהר אוסורי",
        "distribution": "מזרח אסיה, יפן",
        "notes": "צמח קל לגידול. צומח מהר מאוד. ניתן להשתמש בו כסטרטר באקווריום צמחייה לתקופת ההתחלת העפלת האקווריום.\r\t   צריך . אור חזק מאוד. לא אוהב לכלוך במים",
        "propagation": "גיזום ושתילה מחדש. מספיק לגזול כ-10 . ס\"מ"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Najas conferta",
    "latinName": "Najas conferta",
    "images": [
      {
        "src": "Najas_conferta.webp",
        "alt": "Najas conferta 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "20 - 60 cm",
    "width": "3 - 6 cm",
    "temperature": "20 - 28°C",
    "ph": "5.9  -  7.2",
    "hardness": "1 - 12",
    "light": "בינוני , חזק , חזק מאוד",
    "growthRate": "בינונית - גבוהה",
    "placement": "אמצעי, על פני המים",
    "languages": {
      "he": {
        "family": "Najadaceae",
        "synonyms": "נג'אס קונפרטה, Najas arguta var. conferta, A. Braun, (1864), Najas hoehnei",
        "etymology": "Najas : נימפה conferta - מורכבת , נערמת",
        "distribution": "צפון, מרכז ודרום אמריקה",
        "notes": "צמח קל לגידול. צומח מהר מאוד, במיוחד . שתאורה חזקה",
        "propagation": ".  גיזום. מספיק לגזול כ-10 ס\"מ"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Najas guadalupensis",
    "latinName": "Najas guadalupensis",
    "images": [
      {
        "src": "Najas_guadalupensis.webp",
        "alt": "Najas guadalupensis 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "20 - 100 cm",
    "width": "3 - 6 cm",
    "temperature": "20 - 30°C",
    "ph": "5.9  -  7.9",
    "hardness": "1 - 14",
    "light": "בינוני , חזק , חזק מאוד",
    "growthRate": "בינונית - גבוהה",
    "placement": "אמצעי , עלפני המים",
    "languages": {
      "he": {
        "family": "Najadaceae",
        "synonyms": "נג'אס גוודלופנסיס, Caulinia guadalupensis, Sprengel, (1825), Najas microdon, A. Braun",
        "etymology": "Najas : נימפה guadalupensis - בשם אי גואדלופה",
        "distribution": "אה\"ב , מרכז וצפון אמריקה",
        "notes": "צמח קל לגידול. צומח מהר מאוד, במיוחד . שתאורה חזקה",
        "propagation": ".  גיזום. מספיק לגזול כ-10 ס\"מ"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Najas indica",
    "latinName": "Najas indica",
    "images": [
      {
        "src": "Najas_indica.webp",
        "alt": "Najas indica 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "20 - 50 cm",
    "width": "3 - 6 cm",
    "temperature": "22 - 26°C",
    "ph": "5.9  -  7.9",
    "hardness": "1 - 14",
    "light": "בינוני , חזק , חזק מאוד",
    "growthRate": "בינונית - גבוהה",
    "placement": "אמצעי , עלפני המים",
    "languages": {
      "he": {
        "family": "Najadaceae",
        "synonyms": "נג'אס הודי, Caulinia indica Willdenow, (1801), Najas kingii, Rendle",
        "etymology": "Najas : נימפה indica - מהודו",
        "distribution": "יפן , אזורים טרופיים באסיה",
        "notes": "צמח קל לגידול. צומח מהר מאוד, במיוחד . שתאורה חזקה",
        "propagation": ".  גיזום. מספיק לגזול כ-10 ס\"מ"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Najas sp.",
    "latinName": "Najas sp. \"Broad Leaf\"",
    "images": [
      {
        "src": "Najas_sp_broad_leaf.webp",
        "alt": "Najas sp. 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "20 - 60 cm",
    "width": "3 - 6 cm",
    "temperature": "20 - 28°C",
    "ph": "5.9  -  7.2",
    "hardness": "1 - 12",
    "light": "בינוני , חזק , חזק מאוד",
    "growthRate": "בינונית - גבוהה",
    "placement": "אמצעי , עלפני המים",
    "languages": {
      "he": {
        "family": "Najadaceae",
        "synonyms": "נג'אס",
        "etymology": "Najas : נימפה",
        "distribution": "צפון, מרכז ודרום אמריקה",
        "notes": "צמח קל לגידול. צומח מהר מאוד, במיוחד . שתאורה חזקה",
        "propagation": ".  גיזום. מספיק לגזול כ-10 ס\"מ"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Nesaea crassicaulis",
    "latinName": "Nesaea crassicaulis",
    "images": [
      {
        "src": "Nesaea_crassicaulis.webp",
        "alt": "Nesaea crassicaulis 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "20 - 50 cm",
    "width": "8 - 15 cm",
    "temperature": "22 - 28°C",
    "ph": "5.6  -  7.4",
    "hardness": "1 - 8",
    "light": "Very strong",
    "growthRate": "גבוהה מאוד",
    "placement": "Midground",
    "languages": {
      "he": {
        "family": "Lythraceae",
        "synonyms": "נסאה קרסיקאוליס, Ammania crassicaulis, Guillemin & Perrottet, (1833), Nasaea polyantha, Tulasne",
        "etymology": "Nesaea : nesos -  אי נסאיה  פעם ראשונה התגלתה באי מבריקי crassicaulis - עם גבעול עבה",
        "distribution": "אפריקה טרופית, מדגסקר",
        "notes": "צמח קשה לגידול. דורש תאורה חזקה וישירה ותוספות תזונה (דישון ופד\"ח). בתנאיים טובים\r\t   צומח מהר. אם אין מספיק אור , העלים התחתונים נוטים להשחיר ונופלים. אוהב מים רכים וחומציים.\r\t   בנוסף רצוייה . תוספת ברזל",
        "propagation": "גיזום ושתילה מחדש. מספיק לגזול כ-15 . ס\"מ"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Nesaea pedicellata",
    "latinName": "Nesaea pedicellata",
    "images": [
      {
        "src": "Nesaea_pedicellata.webp",
        "alt": "Nesaea pedicellata 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "20 - 50 cm",
    "width": "8 - 18 cm",
    "temperature": "22 - 28°C",
    "ph": "5.6  -  7.4",
    "hardness": "1 - 12",
    "light": "Strong to very strong",
    "growthRate": "גבוהה - גבוהה מאוד",
    "placement": "Midground",
    "languages": {
      "he": {
        "family": "Lythraceae",
        "synonyms": "נסאה פדיצילטה",
        "etymology": "Nesaea : nesos -  אי נסאיה  פעם ראשונה התגלתה באי מבריקי pedicellata - עם פרחים על גבעול קצר",
        "distribution": "טנזניה, מוזמביק",
        "notes": "צמח קשה לגידול. דורש תאורה חזקה וישירה ותוספות תזונה (דישון ופד\"ח). בתנאיים טובים\r\t   צומח מהר. אם אין מספיק אור , העלים התחתונים נוטים להשחיר ונופלים. אוהב מים רכים וחומציים.\r\t   בנוסף רצוייה . תוספת ברזל",
        "propagation": "גיזום ושתילה מחדש. מספיק לגזול כ-15 . ס\"מ"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Nesaea triflora",
    "latinName": "Nesaea triflora",
    "images": [
      {
        "src": "Nesaea_triflora.webp",
        "alt": "Nesaea triflora 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "15 - 40 cm",
    "width": "5 - 10 cm",
    "temperature": "22 - 30°C",
    "ph": "5.6  -  7.4",
    "hardness": "1 - 12",
    "light": "Strong to very strong",
    "growthRate": "גבוהה",
    "placement": "קדמי , אמצעי",
    "languages": {
      "he": {
        "family": "Lythraceae",
        "synonyms": "נסאה טריפלורה, Lythrum triflorum, Linnè fil, . (1781), Trotula trianthis, Commerson, Ammania triflora, Wallich, Nesaea capitellata, Presl",
        "etymology": "Nesaea : nesos -  אי נסאיה  פעם ראשונה התגלתה באי מבריקי triflora - שלושת פרחים",
        "distribution": "איים מדגסקר, מבריקי, ריוניון, סרי לנקה",
        "notes": "צמח קשה לגידול. יותר מתאים לגידול . בפלודרים, פחות באקווריום",
        "propagation": "גיזום ושתילה מחדש. מספיק לגזול כ-15 . ס\"מ"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Nuphar japonica",
    "latinName": "",
    "images": [],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "",
    "width": "",
    "temperature": "",
    "ph": "",
    "hardness": "N/A",
    "light": "",
    "growthRate": "",
    "placement": "",
    "languages": {
      "he": {
        "family": "",
        "synonyms": "",
        "etymology": "",
        "distribution": "",
        "notes": "",
        "propagation": ""
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Nymphaea glandulifera",
    "latinName": "",
    "images": [],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "",
    "width": "",
    "temperature": "",
    "ph": "",
    "hardness": "N/A",
    "light": "",
    "growthRate": "",
    "placement": "",
    "languages": {
      "he": {
        "family": "",
        "synonyms": "",
        "etymology": "",
        "distribution": "",
        "notes": "",
        "propagation": ""
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Nymphaea lotus",
    "latinName": "",
    "images": [],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "",
    "width": "",
    "temperature": "",
    "ph": "",
    "hardness": "N/A",
    "light": "",
    "growthRate": "",
    "placement": "",
    "languages": {
      "he": {
        "family": "",
        "synonyms": "",
        "etymology": "",
        "distribution": "",
        "notes": "",
        "propagation": ""
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Nymphaea micrantha",
    "latinName": "",
    "images": [],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "20 - 60 cm",
    "width": "15 - 30 cm",
    "temperature": "24 - 28°C",
    "ph": "6.5  -  8.0",
    "hardness": "1 - 14",
    "light": "בינוני - חזק",
    "growthRate": "גבוהה - גבוהה מאוד",
    "placement": "Midground",
    "languages": {
      "he": {
        "family": "Nymphaeaceae",
        "synonyms": "",
        "etymology": "Nymphaea : nymphe ( נימפה -  (יווני micrantha - פרחים קטנים",
        "distribution": "אפריקה מערבית",
        "notes": "באור חזק בבסיס העלה מופיעים צמחים קטנים אותם ניתן להשתיל וכך לרבות את . הצמח",
        "propagation": ""
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Nymphaea rudgeana",
    "latinName": "",
    "images": [],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "",
    "width": "",
    "temperature": "",
    "ph": "",
    "hardness": "N/A",
    "light": "",
    "growthRate": "",
    "placement": "",
    "languages": {
      "he": {
        "family": "",
        "synonyms": "",
        "etymology": "",
        "distribution": "",
        "notes": "",
        "propagation": ""
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Nymphoides aquatica",
    "latinName": "",
    "images": [],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "",
    "width": "",
    "temperature": "",
    "ph": "",
    "hardness": "N/A",
    "light": "",
    "growthRate": "",
    "placement": "",
    "languages": {
      "he": {
        "family": "",
        "synonyms": "",
        "etymology": "",
        "distribution": "",
        "notes": "",
        "propagation": ""
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Ottelia alismoides",
    "latinName": "",
    "images": [],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "",
    "width": "",
    "temperature": "",
    "ph": "",
    "hardness": "N/A",
    "light": "",
    "growthRate": "",
    "placement": "",
    "languages": {
      "he": {
        "family": "",
        "synonyms": "",
        "etymology": "",
        "distribution": "",
        "notes": "",
        "propagation": ""
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Ottelia brasiliensis",
    "latinName": "",
    "images": [],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "",
    "width": "",
    "temperature": "",
    "ph": "",
    "hardness": "N/A",
    "light": "",
    "growthRate": "",
    "placement": "",
    "languages": {
      "he": {
        "family": "",
        "synonyms": "",
        "etymology": "",
        "distribution": "",
        "notes": "",
        "propagation": ""
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Ottelia ulvifolia",
    "latinName": "",
    "images": [],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "",
    "width": "",
    "temperature": "",
    "ph": "",
    "hardness": "N/A",
    "light": "",
    "growthRate": "",
    "placement": "",
    "languages": {
      "he": {
        "family": "",
        "synonyms": "",
        "etymology": "",
        "distribution": "",
        "notes": "",
        "propagation": ""
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Pistia stratiotes",
    "latinName": "",
    "images": [],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "",
    "width": "",
    "temperature": "",
    "ph": "",
    "hardness": "N/A",
    "light": "",
    "growthRate": "",
    "placement": "",
    "languages": {
      "he": {
        "family": "",
        "synonyms": "",
        "etymology": "",
        "distribution": "",
        "notes": "",
        "propagation": ""
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Potamogeton gayi",
    "latinName": "Potamogeton gayi",
    "images": [
      {
        "src": "Potamogeton_gayi.webp",
        "alt": "Potamogeton gayi 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "25 - 100 cm",
    "width": "8 - 15 cm",
    "temperature": "16 - 26°C",
    "ph": "6.5  -  8.0",
    "hardness": "2 - 12",
    "light": "בינוני , חזק",
    "growthRate": "Moderate",
    "placement": "אמצעי , אחורי, על פני המים",
    "languages": {
      "he": {
        "family": "Potamogetonaceae",
        "synonyms": "פוטמוגטון גאיי",
        "etymology": "Potamogeton (יווני): potamos -  נהר geiton -  נהר שכן, קרוב gayi - בשם בוטניקאי צרפתי J. Gay (1786 - 1864)",
        "distribution": "אזורים דרומיים בדרום אמריקה",
        "notes": "צמח קל לגידול . צומח מהר מאוד, במיוחד תחת תאורה חזקה. ניתן להשתמש בצמח בתור סטרטר לאקווריום צמחייה.\r\t   מפריש . הרבה חמצן . מתאים לגידול בפלודריום ובבריכות",
        "propagation": "גיזום ושתילה מחדש. מספיק לגזול כ-10 . ס\"מ"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Potamogeton wrightii",
    "latinName": "Potamogeton wrightii",
    "images": [
      {
        "src": "Potamogeton_wrightii.webp",
        "alt": "Potamogeton wrightii 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "40 - 200 cm",
    "width": "8 - 20 cm",
    "temperature": "22 - 28°C",
    "ph": "6.5  -  8.0",
    "hardness": "2 - 12",
    "light": "בינוני , חזק",
    "growthRate": "בינונית , גבוהה",
    "placement": "אמצעי , אחורי",
    "languages": {
      "he": {
        "family": "Potamogetonaceae",
        "synonyms": "פוטמוגטון ראיטה",
        "etymology": "Potamogeton (יווני) : potamos -  נהר geiton -  נהר שכן, קרוב wrightii -  C. Wright  בשם (1786 - 1864)",
        "distribution": "מזרח אסיה",
        "notes": "צמח קל לגידול . צומח מהר מאוד, במיוחד תחת תאורה חזקה. אין דרישות מיוחדות לתאורה או לתזונה.\r\t  בדרך כלל צומח בכל התנאיים.  ניתן להשתמש בצמח בתור סטרטר . לאקווריום צמחייה . מתאים לגידול בפלודריום ובבריכות",
        "propagation": "גיזום גבעולים ושתילה מחדש. מספיק לגזום . גיבעול עם 3 - 4 עלים עליו"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Riccia fluitans",
    "latinName": "",
    "images": [],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "",
    "width": "",
    "temperature": "20 - 27°C",
    "ph": "6.0  -  8.0",
    "hardness": "2 - 18",
    "light": "בינוני , חזק , חזק מאוד",
    "growthRate": "נמוכה - בינונית",
    "placement": "צף על פני המים",
    "languages": {
      "he": {
        "family": "Ricciaceae",
        "synonyms": "ריצ'יה פלויטנס, ריצ'יה, Riccia canaliculata, Hoffmann, R. eudichotoma, Bischoff, R. nodosa, Boucher, Ricciella fluitans, A. Braun",
        "etymology": "Riccia : P.F. Ricci  בשם fluitans - שוטה, זוחל",
        "distribution": "בכל העולם",
        "notes": "משומש לרוב בשביל מצע לרביית חלק מהדגים וגם לצורך יצירת מקומות\r\t   מסתור . לדגיגים באקווריומי רבייה או קיבוציים בשנים האחרונות משתמשים לצורך עיצוב סלעים ועצים באקווריום עם השתלת הצמח על החומר המועצב",
        "propagation": "מתפשת לצדדים"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Rorippa aquaticum",
    "latinName": "Rorippa aquaticum",
    "images": [
      {
        "src": "Rorippa_aquaticum.webp",
        "alt": "Rorippa aquaticum 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "8 - 15 cm",
    "width": "4 - 8 cm",
    "temperature": "18 - 25°C",
    "ph": "6.2  -  7.6",
    "hardness": "2 - 18",
    "light": "בינוני - חזק",
    "growthRate": "בינונית - גבוהה",
    "placement": "Foreground",
    "languages": {
      "he": {
        "family": "Brassicaceae",
        "synonyms": "רוריפה אקווטיקום, Cochlearia aquatica, Eaton, (1829), Armoracia aquatica, (Eaton) Wiegand",
        "etymology": "Rorippa : כנראה עקב שם הצמח בגרמנית aquaticum - גר במיים",
        "distribution": "צפון אמריקה : אה\"ב",
        "notes": "צמח נדיר יחסית. קל לגידול . לא מחזיק מאמץ לאורך זמן במים חמים בטמפרטורה גבוהה מ-25 מעלות.\r\t   אין דרישות מיוחדות . לתזונה ולתאורה",
        "propagation": "ניתן לגזום גבעולים הצומחים לצדדים . ולהשתילם מחדש"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Rotala macrandra",
    "latinName": "Rotala macrandra",
    "images": [
      {
        "src": "Rotala_macrandra.webp",
        "alt": "Rotala macrandra 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "25 - 60 cm",
    "width": "4 - 8 cm",
    "temperature": "24 - 28°C",
    "ph": "5.5  -  7.4",
    "hardness": "1 - 14",
    "light": "Strong to very strong",
    "growthRate": "בינונית - גבוהה",
    "placement": "אמצעי, אחורי",
    "languages": {
      "he": {
        "family": "Lythraceae",
        "synonyms": "רוטלה מקרנדה, Ameletia rotundifolia, Wight",
        "etymology": "Rotala : Rota - גלגל Rotala verticillaris עקב מיקומם העלים ב macrandra - עקב אבקנים ארוכים",
        "distribution": "דרום הודו",
        "notes": "צמח יפה, בדרגת קושי בינונית לגידול. דורש אור חזק וישיר. רק תחת אור חזק מאוד\r\t   מופיעים עלים אדומים. בחוסר אור עלים התחתונים נעשים צהובים ונופלים.\r\t   אוהב מים . רכים וחומציים",
        "propagation": "גיזום ושתילה מחדש. מספיק לגזול כ-15 . ס\"מ"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Rotala rotundifolia",
    "latinName": "Rotala rotundifolia",
    "images": [
      {
        "src": "Rotala_rotundifolia.webp",
        "alt": "Rotala rotundifolia 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "25 - 70 cm",
    "width": "2 - 5 cm",
    "temperature": "24 - 28°C",
    "ph": "5.9  -  8.2",
    "hardness": "1 - 14",
    "light": "Strong to very strong",
    "growthRate": "בינונית - גבוהה",
    "placement": "קדמי , אמצעי",
    "languages": {
      "he": {
        "family": "Lythraceae",
        "synonyms": "רוטלה רוטונדיפוליה, Ameletia rotundifolia, Buchanan-Hamilton, (1820)",
        "etymology": "Rotala : Rota - גלגל Rotala verticillaris עקב מיקומם העלים ב rotundifolia -   עלים עגולים",
        "distribution": "דרום-מזרח אסיה",
        "notes": "צמח קל לגידול , אך רגיש לחוסר אור. אם אין , תאורה מספיקה המרחק בין העלים מתארך . עלים\r\t   תחתונים משחירים ונופלים צמח נפוץ מאוד, גודל מהר. ניתן להשתמש בו . בטור סטרטר באקווריום צמחייה",
        "propagation": "גיזום ושתילה מחדש. מספיק לגזול כ-10 . ס\"מ"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Rotala sp. \"Nanjenshan\"",
    "latinName": "Rotala sp. \"Nanjenshan\"",
    "images": [
      {
        "src": "Rotala_sp_Nanjenshan.webp",
        "alt": "Rotala sp. \"Nanjenshan\" 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "25 - 70 cm",
    "width": "2 - 5 cm",
    "temperature": "24 - 28°C",
    "ph": "6.2  -  8.2",
    "hardness": "1 - 14",
    "light": "Very strong",
    "growthRate": "גבוהה",
    "placement": "אמצעי, אחורי",
    "languages": {
      "he": {
        "family": "Lythraceae",
        "synonyms": "רוטלה ננג'נשן",
        "etymology": "Rotala : Rota - גלגל Rotala verticillaris עקב מיקומם העלים ב",
        "distribution": "דרום-מזרח אסיה",
        "notes": "צמח די קשה לגידול ,  רגיש לחוסר אור. אם אין תאורה מספיקה המרחק בין העלים . מתארך, עלים\r\t   תחתונים משחירים ונופלים",
        "propagation": "גיזום ושתילה מחדש. מספיק לגזול כ-10 . ס\"מ"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Rotala wallichii",
    "latinName": "Rotala wallichii",
    "images": [
      {
        "src": "Rotala_wallichii.webp",
        "alt": "Rotala wallichii 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "15 - 40 cm",
    "width": "2 - 4 cm",
    "temperature": "24 - 28°C",
    "ph": "5.5  -  7.2",
    "hardness": "1 - 8",
    "light": "Very strong",
    "growthRate": "גבוהה",
    "placement": "קדמי , אמצעי",
    "languages": {
      "he": {
        "family": "Lythraceae",
        "synonyms": "רוטלה ווליצ'יי, Hydrolythrum wallichii, Hooker fil., (1867), Ammannia wallichii, (Hooker fil.) Kurz, Ammannia myriophylloides, S.T. Dunn",
        "etymology": "Rotala : Rota - גלגל Rotala verticillaris עקב מיקומם העלים ב wallichii -   N. Wallich  בשם (1768 - 1854)",
        "distribution": "דרום-מזרח אסיה",
        "notes": "צמח קשה לגידול. דורש אור חזק מאוד וישיר, תוספות תזונה (דישון ופד\"ח) ומים\r\t   רכים . ונקיים",
        "propagation": "גיזום ושתילה מחדש. מספיק לגזול כ-10 . ס\"מ"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Sagittaria platyphylla",
    "latinName": "",
    "images": [],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "",
    "width": "",
    "temperature": "",
    "ph": "",
    "hardness": "N/A",
    "light": "",
    "growthRate": "",
    "placement": "",
    "languages": {
      "he": {
        "family": "",
        "synonyms": "",
        "etymology": "",
        "distribution": "",
        "notes": "",
        "propagation": ""
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Sagittaria subulata",
    "latinName": "",
    "images": [],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "",
    "width": "",
    "temperature": "",
    "ph": "",
    "hardness": "N/A",
    "light": "",
    "growthRate": "",
    "placement": "",
    "languages": {
      "he": {
        "family": "",
        "synonyms": "",
        "etymology": "",
        "distribution": "",
        "notes": "",
        "propagation": ""
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Saururus cernuus",
    "latinName": "Saururus cernuus",
    "images": [
      {
        "src": "Saururus_cernuus.webp",
        "alt": "Saururus cernuus 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "15 - 100 cm",
    "width": "6 - 25 cm",
    "temperature": "10 - 24°C",
    "ph": "6.0  -  7.8",
    "hardness": "2 - 18",
    "light": "Very strong",
    "growthRate": "גבוהה , גבוהה מאוד",
    "placement": "אמצעי , אחורי",
    "languages": {
      "he": {
        "family": "Saururaceae",
        "synonyms": "סאורורוס צרנווס, Saururus lucidus, Donn, Mattuschkia aquatica, Gmelin.",
        "etymology": "Saururus : sauros : לטאה oura : זנב עקב צורת הפרח cernuus :  מהנהן עקב צורת הפרח",
        "distribution": "צפון אמריקה, צפון איטליה",
        "notes": "צמח קשה לגידול. דורש תאורה חזקה מאוד וישירה ותוספות תזונה (דישון ופד\"ח) .\r\t   מתאים רק למים קרים, בטמפרטורה יותר מ-25 מעלות מחזיק מעמד מספר חודשים . בלבד.\r\t   מתאים לגידול בבריכות ובסביבן",
        "propagation": "התפשטות לצדדים. ניתן לחלק מהשורש חלק . של הצמח עם לפחות 3-4 עלים"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Sium suave",
    "latinName": "Sium suave",
    "images": [
      {
        "src": "Sium_suave.webp",
        "alt": "Sium suave 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "8 - 25 cm",
    "width": "4 - 8 cm",
    "temperature": "20 - 28°C",
    "ph": "6.0  -  8.0",
    "hardness": "4 - 12",
    "light": "חזק , חזק מאוד",
    "growthRate": "בינונית , גבוהה",
    "placement": "קדמי , אמצעי",
    "languages": {
      "he": {
        "family": "Apiaceae",
        "synonyms": "סיום סואבה, Water Parsnip, Sium cicutifolium, Sium floridanum",
        "etymology": "Sium : suave :",
        "distribution": "אה\"ב : פלורידה, קליפורניה",
        "notes": "צמח בדרגת קושי בינונית לגידול. צומח איטי יחסית, אך תחת תאורה חזקה וישירה .\r\t   צמיחתו מהירה יותר",
        "propagation": "מתפשט לצדדים. ניתן לגזום משורש . ולהשתיל מחדש"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Shinnersia rivularis",
    "latinName": "Shinnersia rivularis",
    "images": [
      {
        "src": "Shinnersia_rivularis.webp",
        "alt": "Shinnersia rivularis 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "25 - 100 cm",
    "width": "7 - 15 cm",
    "temperature": "18 - 30°C",
    "ph": "6.2  -  8.2",
    "hardness": "5 - 18",
    "light": "Strong",
    "growthRate": "בינונית - גבוהה",
    "placement": "אמצעי, אחורי, על פני המים",
    "languages": {
      "he": {
        "family": "Lythraceae",
        "synonyms": "שינרסיה ריבולריס, Trichocoronis rivularis, A. Gray, (1849)",
        "etymology": "Shinnersia : L.H. Shinner לכבוד בוטניקאי rivularis : חי בנחלים",
        "distribution": "צפון אמריקה : מקסיקה, מדינת טקסס באה\"ב",
        "notes": "צמח קל לגידול. צומח מהר מאוד ודי מהר מגיע עד פני המים ועלים יוצאים מהמים.\r\t   ניתן להשתמש בצמח הזה בטור סטרטר באקווריום צמחייה. אין דרישה מיוחדת . לתנאיי המים קיימת צורה לבנה-ירוקה של העלים שנוצרה . בשנת 1983 Dennerle במשתלת",
        "propagation": "גיזום ושתילה מחדש. מספיק לגזול כ-15 . ס\"מ"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Spiranthes cernua",
    "latinName": "Spiranthes cernua",
    "images": [
      {
        "src": "Spiranthes_cernua.webp",
        "alt": "Spiranthes cernua 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "15 - 50 cm",
    "width": "5 - 15 cm",
    "temperature": "20 - 28°C",
    "ph": "6.0  -  8.0",
    "hardness": "4 - 12",
    "light": "חזק , חזק מאוד",
    "growthRate": "בינונית , גבוהה",
    "placement": "קדמי , אמצעי",
    "languages": {
      "he": {
        "family": "Orchidaceae",
        "synonyms": "ספירנטס צרנוא, Water orchid",
        "etymology": "Spiranthes (יווני) : speira : סיבוב, ספירלה anthos : פרח cernua : מהנהן עקב צורת הפרח",
        "distribution": "צפון אמריקה",
        "notes": "צמח קשה לגידול באקווריום ומאוד קשה . לקבל צמח יפה . מתאים לגידול בפלודריום או סביב הבריכות",
        "propagation": "התפשטות לצדדים מתוך השורש או מהגבעול. ניתן לגזום גבעולים חדשים . ולהשתילם מחדש"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Tonina fluviatilis",
    "latinName": "Tonina fluviatilis",
    "images": [
      {
        "src": "Tonina_fluviatilis.webp",
        "alt": "Tonina fluviatilis 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "20 - 40 cm",
    "width": "3 - 7 cm",
    "temperature": "22 - 28°C",
    "ph": "3.9  -  5.8",
    "hardness": "1 - 6",
    "light": "Very strong",
    "growthRate": "גבוהה",
    "placement": "קדמי , אמצעי",
    "languages": {
      "he": {
        "family": "Eriocaulaceae",
        "synonyms": "טונינה פלוביאטיליס, Eriocaulon amplexicaule, Rottboll, Hyphydra amplexicaulis, Schreber",
        "etymology": "Tonina : שם של הצמח בגווינאנה צרפתית fluviatilis : חי בנהר או לידו",
        "distribution": "מרכז ודרום אמריקה",
        "notes": "צמח יפה מאוד , אך קשה לגידול עקב דרישתו למים מאוד חומציים ורכים.\r\t   כמו כן צריך תוספת תזונתית כגון דישון ופד\"ח. צומח יפה . ומהר תחת אור חזק וישיר בלבד",
        "propagation": "גיזום ושתילה מחדש. מספיק לגזול כ-10 . ס\"מ"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Tonina sp.",
    "latinName": "Tonina sp.",
    "images": [
      {
        "src": "Tonina_sp..webp",
        "alt": "Tonina sp. 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "20 - 50 cm",
    "width": "5 - 10 cm",
    "temperature": "22 - 28°C",
    "ph": "3.9  -  5.8",
    "hardness": "1 - 6",
    "light": "Very strong",
    "growthRate": "גבוהה",
    "placement": "קדמי , אמצעי",
    "languages": {
      "he": {
        "family": "Eriocaulaceae",
        "synonyms": "טונינה",
        "etymology": "Tonina : שם של הצמח בגווינאנה צרפתית",
        "distribution": "מרכז ודרום אמריקה",
        "notes": "צמח יפה מאוד , אך קשה לגידול עקב דרישתו למים מאוד חומציים ורכים.\r\t   כמו כן צריך תוספת תזונתית כגון דישון ופד\"ח. צומח יפה . ומהר תחת אור חזק וישיר בלבד",
        "propagation": "גיזום ושתילה מחדש. מספיק לגזול כ-10 . ס\"מ"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Utricularia aurea",
    "latinName": "Utricularia aurea",
    "images": [
      {
        "src": "Utricularia_aurea.webp",
        "alt": "Utricularia aurea 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "20 - 150 cm",
    "width": "5 - 14 cm",
    "temperature": "22 - 30°C",
    "ph": "6.0  -  8.0",
    "hardness": "1 - 16",
    "light": "Very strong",
    "growthRate": "נמוכה , בינונית",
    "placement": "קדמי , אמצעי , על פני המים",
    "languages": {
      "he": {
        "family": "Lentibulariaceae",
        "synonyms": "אורטיקולריה אוראה, Utricularia flexuosa, Vahl",
        "etymology": "Utricularia : (צינור קטן (מלכודת aurea : מוזהב עקב צבע פרחים",
        "distribution": "אסיה , אוסטרליה",
        "notes": "צומח מהר מאוד בכל התנאים , אך אוהב אור . חזק מאוד וישיר. לא אוהב מים מלוכלכים צמח מפורסם מאוד כצמח טורף. בעזרת בועות המלכודת יכול לתפוס בעלי חיים קטנים,\r\t\tלכן יכול ליהות מסוכן לדגיגים. בתוך בועות המלכודת הוא סופג את הטרף וכך מקבל . תוספות תזונה הנדרשות לו",
        "propagation": "גיזום ושתילה מחדש. מספיק לגזום כ-10 . ס\"מ"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Vallisneria americana var. americana",
    "latinName": "",
    "images": [],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "",
    "width": "",
    "temperature": "",
    "ph": "",
    "hardness": "N/A",
    "light": "",
    "growthRate": "",
    "placement": "",
    "languages": {
      "he": {
        "family": "",
        "synonyms": "",
        "etymology": "",
        "distribution": "",
        "notes": "",
        "propagation": ""
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Vallisneria americana var. biwaensis",
    "latinName": "Vallisneria americana",
    "images": [
      {
        "src": "Vallisneria_americana_var._biwaensis.webp",
        "alt": "Vallisneria americana var. biwaensis 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "20 - 40 cm",
    "width": "3 - 8 cm",
    "temperature": "18 - 28°C",
    "ph": "6.5  -  8.0",
    "hardness": "8 - 20",
    "light": "חזק , חזק מאוד",
    "growthRate": "גבוהה",
    "placement": "אמצעי , אחורי",
    "languages": {
      "he": {
        "family": "Hydrocharitaceae",
        "synonyms": "ווליסנריה אמריקנה ווריאציה ביוואנסיס, ווליסנריה, Vallisneria asiatica, Miki, var. biwaensis, Miki, (1934), V. biwaensis, (Miki) Ohwi, V. gigantea, Graebner, var. biwaensis, (Miki) Kimatura, V. natans, (Loureiro) Hara, var. biwaensis, (Mika) Hara",
        "etymology": "Vallisneria : A. Vallisneri בשם (1661 - 1730) americana -   מאמריקה biwaensis -   בשם אגם ביבה ביפן",
        "distribution": "יפן, וונסואלה, גאיטי",
        "notes": "אוהב תוספת תזונה. צמח די קל לגידול לעומת הווליסנריות האחרות , בדרך כלל לא צומח גבוה מידי צומח הרבה יותר טוב עם יש תוספת תזונתית והזרמת פד\"ח",
        "propagation": "מתפשת לצדדים בעזרת שלוחות. צומח מהר"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Vallisneria gigantea",
    "latinName": "",
    "images": [],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "",
    "width": "",
    "temperature": "",
    "ph": "",
    "hardness": "N/A",
    "light": "",
    "growthRate": "",
    "placement": "",
    "languages": {
      "he": {
        "family": "",
        "synonyms": "",
        "etymology": "",
        "distribution": "",
        "notes": "",
        "propagation": ""
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Vallisneria spiralis var. spiralis",
    "latinName": "",
    "images": [],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "",
    "width": "",
    "temperature": "",
    "ph": "",
    "hardness": "N/A",
    "light": "",
    "growthRate": "",
    "placement": "",
    "languages": {
      "he": {
        "family": "",
        "synonyms": "",
        "etymology": "",
        "distribution": "",
        "notes": "",
        "propagation": ""
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Vesicularia dubyana",
    "latinName": "Vesicularia dubyana",
    "images": [
      {
        "src": "Vesicularia_dubyana.webp",
        "alt": "Vesicularia dubyana 1",
        "creatorName": "",
        "originalSource": ""
      }
    ],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "",
    "width": "",
    "temperature": "15 - 30°C",
    "ph": "6.0  -  8.0",
    "hardness": "1 - 20",
    "light": "נמוך - בינוני - חזק",
    "growthRate": "נמוכה , בינונית",
    "placement": "בכל מקום כאמצעי עיצוב על האבנים או גזעי עץ",
    "languages": {
      "he": {
        "family": "Hypnaceae",
        "synonyms": "ג'אווה מוסוס, Hypnum dubyana B. Müller, 1851",
        "etymology": "Vesicularia : מכוסה בבועות dubyana : J.E. Duby (1798-1885) לכבוד בוטניק שוודי",
        "distribution": "אסיה , פיליפינים",
        "notes": "צומח מהר מאוד בכל התנאים , במים רכים או קשים , בסיסיים או חומציים וגם\r\t   במים . מליחים . בעזרתו מעצבים גזעי עץ , אבנים ועוד טוב מאוד לשימוש באקווריומי רבייה בתור מצע או \r\t   בתור מקום בו דגיגים יכולים . להתחבות",
        "propagation": ". מתפשת לצדדים"
      },
      "en": {},
      "ru": {}
    }
  },
  {
    "name": "Zosterella dubia",
    "latinName": "",
    "images": [],
    "firstDescription": "No specific description available",
    "sources": "",
    "height": "",
    "width": "",
    "temperature": "",
    "ph": "",
    "hardness": "N/A",
    "light": "",
    "growthRate": "",
    "placement": "",
    "languages": {
      "he": {
        "family": "",
        "synonyms": "",
        "etymology": "",
        "distribution": "",
        "notes": "",
        "propagation": ""
      },
      "en": {},
      "ru": {}
    }
  }
];

module.exports = { plants };
