import FishImage from "../FishImage/FishImage";
import FishTable from "../FishTable/FishTable";
import "./FishCard.css";
import { IFish } from "../../../interfaces/IFish";

interface IFishCard {
  fishData: IFish;
}

export default function FishCard({ fishData }: IFishCard) {
  const language = 'ru';
  const langData = fishData.languages[language];

  const details = [
    { label: 'Subclass', value: langData.subclass },
    { label: 'Order', value: langData.order },
    { label: 'Family', value: langData.family },
    { label: 'Subfamily', value: langData.subfamily },
    { label: 'Tribe', value: fishData.tribe },
    { label: 'Latin Name', value: fishData.latinName },
    { label: 'First Description', value: fishData.firstDescription },
    { label: 'Synonyms', value: langData.synonyms },
    { label: 'Etymology', value: langData.etymology },
    { label: 'Distribution', value: langData.distribution },
    { label: 'Fish Size', value: fishData.fishSize },
    { label: 'Tank Volume', value: fishData.tankVolume },
    { label: 'Max Temp', value: `${fishData.maxTemp}°C` },
    { label: 'Min Temp', value: `${fishData.minTemp}°C` },
    { label: 'PH', value: fishData.ph.toString() },
    { label: 'dGH', value: fishData.dGH.toString() },
    { label: 'Additional Requirements', value: langData.additionalRequirements },
    { label: 'Aquarium Setup', value: langData.aquariumSetup },
    { label: 'Intraspecies Compatibility', value: langData.intraspeciesCompatibility },
    { label: 'Interspecies Compatibility', value: langData.interspeciesCompatibility },
    { label: 'Feeding', value: langData.feeding },
    { label: 'Sexual Dimorphism', value: langData.sexualDimorphism },
    { label: 'Breeding', value: langData.breeding },
    { label: 'Additional Information', value: langData.additionalInformation },
    { label: 'Sources', value: fishData.sources },
  ];

  return (
    <div className="max-w-4xl mx-auto bg-blue-50 p-6 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center text-blue-900 mb-4">{fishData.name}</h1>
      <div className="grid grid-cols-2 gap-4">
        {fishData.images.map((image, index) => (
          <FishImage key={index} fishId={fishData._id} src={image.src} alt={image.alt} />
        ))}
      </div>
      <FishTable details={details} />
    </div>
  );
}
