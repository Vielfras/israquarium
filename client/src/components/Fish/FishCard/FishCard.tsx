import { useDirection } from "../../../context/ReadingDirectionContext";
import FishImage from "../FishImage/FishImage";
import FishTable from "../FishTable/FishTable";
import "./FishCard.css"

interface IFishCard {
}

const fishDataRus = {
  name: 'Acanthicus adonis',
  images: [
    { src: '../../../assets/Acanthicus_adonis.jpg', alt: 'Acanthicus adonis 1' },
    { src: '../../../assets/Acanthicus_adonis1.jpg', alt: 'Acanthicus adonis 2' },
    { src: '../../../assets/Acanthicus_adonis2.jpg', alt: 'Acanthicus adonis 3' },
    { src: '../../../assets/Acanthicus_adonis4.jpg', alt: 'Acanthicus adonis 4' },
  ],
  details: [
    { label: 'подкласс', value: 'Лучеперые (Actinopterygii)' },
    { label: 'отряд', value: 'Сомообразные (Siluriformes)' },
    { label: 'семейство', value: 'Кольчужные, или Лорикариевые сомы (Loricariidae)' },
    { label: 'подсемейство', value: 'Гипостомины (Hypostominae)' },
    { label: 'триба', value: 'Анцистрины (Ancistrini)' },
    { label: 'латинское название', value: 'Acanthicus adonis Isbrucker & Nijssen, 1988' },
    { label: 'первое описание', value: 'Isbrucker, I. J. H. and Nijssen, H.' },
    { label: 'синонимы', value: 'Акантикус адонис, Polka Dot Lyre Tail Pleco' },
    { label: 'этимология', value: 'Acanthicus: akantha (греч.) : колючка, adonis (греч.) : красивый' },
    { label: 'Южная Америка', value: 'нижнее течение Амазонки и река Токантинс (Tocantins), Бразилия.' },
    { label: 'Fish Size', value: 'до 100 см. (SL)' },
    { label: 'Tank Volume', value: 'от 500 литров' },
    { label: 'Temp', value: '23 - 30°C' },
    { label: 'PH', value: '6.0-8.0' },
    { label: 'dGH', value: '5-15' },
    { label: 'дополнительные требования', value: 'N/A' },
    { label: 'оформление аквариума', value: 'Необходимы укрытия из коряг, валунов и т.п.' },
    { label: 'внутривидовая совместимость', value: 'Выраженная с молодого возраста агрессивность к особям своего вида.' },
    { label: 'межвидовая совместимость', value: 'Агрессивны к другим крупным плеко.' },
    { label: 'питание', value: 'Всеядные. Едят мороженного мотыля, мясо креветок, молюсков, рыбы, сухие корма, овощи.' },
    { label: 'половые различия', value: 'Хотя у этого вида и самцы, и самки имеют хорошо развитые одонтоды по всему телу, но у самцов они все же развиты сильнее.' },
    { label: 'разведение', value: 'Разведение в неволе возможно.' },
    { label: 'дополнительная информация', value: 'У этого вида известны особи-альбиносы.' },
    { label: 'использованные источники', value: 'FishBase, PlanetCatfish' },
  ]
};

const fishDataEng = {
  name: 'Acanthicus adonis',
  images: [
    { src: '../../../assets/Acanthicus_adonis.jpg', alt: 'Acanthicus adonis 1' },
    { src: '../../../assets/Acanthicus_adonis1.jpg', alt: 'Acanthicus adonis 2' },
    { src: '../../../assets/Acanthicus_adonis2.jpg', alt: 'Acanthicus adonis 3' },
    { src: '../../../assets/Acanthicus_adonis4.jpg', alt: 'Acanthicus adonis 4' },
  ],
  details: [
    { label: 'Subclass', value: 'Ray-finned (Actinopterygii)' },
    { label: 'Order', value: 'Catfish-like (Siluriformes)' },
    { label: 'Family', value: 'Armored Catfish (Loricariidae)' },
    { label: 'Subfamily', value: 'Hypostomines (Hypostominae)' },
    { label: 'Tribe', value: 'Ancistrini' },
    { label: 'Latin Name', value: 'Acanthicus adonis Isbrucker & Nijssen, 1988' },
    { label: 'First Description', value: 'Isbrucker, I. J. H. and Nijssen, H.' },
    { label: 'Synonyms', value: 'Acanthicus adonis, Polka Dot Lyre Tail Pleco' },
    { label: 'Etymology', value: 'Acanthicus: akantha (Greek): thorn, adonis (Greek): beautiful' },
    { label: 'Distribution', value: 'Lower Amazon basin and Tocantins River (Tocantins), Brazil.' },
    { label: 'Fish Size', value: 'up to 100 cm (SL)' },
    { label: 'Tank Volume', value: 'from 500 liters' },
    { label: 'Temp', value: '23 - 30°C' },
    { label: 'PH', value: '6.0-8.0' },
    { label: 'dGH', value: '5-15' },
    { label: 'Additional Requirements', value: 'N/A' },
    { label: 'Aquarium Setup', value: 'Shelters from driftwood, rocks, etc. are necessary.' },
    { label: 'Intraspecies Compatibility', value: 'Expressed aggression towards individuals of its own species from a young age.' },
    { label: 'Interspecies Compatibility', value: 'Aggressive towards other large plecos.' },
    { label: 'Feeding', value: 'Omnivorous. Eats frozen bloodworms, shrimp meat, mollusks, fish, dry food, vegetables.' },
    { label: 'Sexual Dimorphism', value: 'Both males and females of this species have well-developed odontodes all over the body, but males have them more developed.' },
    { label: 'Breeding', value: 'Breeding in captivity is possible.' },
    { label: 'Additional Information', value: 'Albino specimens of this species are known.' },
    { label: 'Sources', value: 'FishBase, PlanetCatfish' },
    { label: 'Direct Profile Link', value: 'http://www.loricariidae.israquarium.co.il/FishIndex/Acanthicus_adonis.html' },
  ]
};

const fishDataHeb = {
  name: 'Acanthicus adonis',
  images: [
    { src: '../../../assets/Acanthicus_adonis.jpg', alt: 'Acanthicus adonis 1' },
    { src: '../../../assets/Acanthicus_adonis1.jpg', alt: 'Acanthicus adonis 2' },
    { src: '../../../assets/Acanthicus_adonis2.jpg', alt: 'Acanthicus adonis 3' },
    { src: '../../../assets/Acanthicus_adonis4.jpg', alt: 'Acanthicus adonis 4' },
  ],
  details: [
    { label: 'תת מחלקה', value: 'קרניפריים (Actinopterygii)' },
    { label: 'סדרה', value: 'דמויי שפמנונים (Siluriformes)' },
    { label: 'משפחה', value: 'שפמנוני שריון (Loricariidae)' },
    { label: 'תת משפחה', value: 'היפוסטומינים (Hypostominae)' },
    { label: 'שבט', value: 'אנציסטרינים (Ancistrini)' },
    { label: 'שם מדעי', value: 'Acanthicus adonis Isbrucker & Nijssen, 1988' },
    { label: 'תיאור ראשון', value: 'Isbrucker, I. J. H. and Nijssen, H.' },
    { label: 'שמות נרדפים', value: 'אכניקוס אדוניס, פולקה דוט לייר טייל פלקו' },
    { label: 'אטימולוגיה', value: 'Acanthicus: akantha (יוונית): קוץ, adonis (יוונית): יפה' },
    { label: 'תפוצה', value: 'זרם תחתון של האמזונס ונהר טוקנטינס (Tocantins), ברזיל.' },
    { label: 'גודל דג', value: 'עד 100 ס"מ (SL)' },
    { label: 'נפח אקווריום', value: 'מ-500 ליטר' },
    { label: 'טמפרטורה', value: '23 - 30°C' },
    { label: 'PH', value: '6.0-8.0' },
    { label: 'dGH', value: '5-15' },
    { label: 'דרישות נוספות', value: '&nbsp;' },
    { label: 'הקמת אקווריום', value: 'נחוצים מחסות מעץ סחף, סלעים וכדומה.' },
    { label: 'תאימות תוך מיני', value: 'תוקפנות מובהקת כלפי פרטים של מין עצמו מגיל צעיר.' },
    { label: 'תאימות בין מינים', value: 'תוקפניים כלפי פלקואים גדולים אחרים.' },
    { label: 'תזונה', value: 'אוכלי כל. אוכלים תולעי דם קפואות, בשר שרימפס, רכיכות, דגים, מזון יבש, ירקות.' },
    { label: 'הבדלים בין זוויגים', value: 'לזכרים ולנקבות של מין זה יש אודונטודות מפותחות על פני כל הגוף, אך אצל הזכרים הן מפותחות יותר.' },
    { label: 'רבייה', value: 'רבייה בשבי אפשרית.' },
    { label: 'מידע נוסף', value: 'ידועות דגימות אלבינו של מין זה.' },
    { label: 'מקורות', value: 'FishBase, PlanetCatfish' },
    { label: 'קישור לפרופיל ישיר', value: 'http://www.loricariidae.israquarium.co.il/FishIndex/Acanthicus_adonis.html' },
  ]
};

// const fishData = fishDataRus;
const fishData = fishDataEng;
// const fishData = fishDataHeb;

export default function FishCard(_props: IFishCard) {
 
  return (
    <div className={`max-w-4xl mx-auto bg-blue-50 p-6 rounded-lg shadow-lg`}>
      <h1 className="text-3xl font-bold text-center text-blue-900 mb-4">{fishData.name}</h1>
      <div className="grid grid-cols-2 gap-4">
        {fishData.images.map((image, index) => (
          <FishImage key={index} src={image.src} alt={image.alt} />
        ))}
      </div>
      <FishTable details={fishData.details} />
    </div>
  );
}