import FishImage from "../FishImage/FishImage";
import FishTable from "../FishTable/FishTable";
import "./FishCard.css";
import { IFish } from "../../../interfaces/IFish";

interface IFishCard {
  fishData: IFish;
}

export default function FishCard({ fishData }: IFishCard) {
  const details = [
    { label: 'Subclass', value: fishData.subclass },
    { label: 'Order', value: fishData.order },
    { label: 'Family', value: fishData.family },
    { label: 'Subfamily', value: fishData.subfamily },
    { label: 'Tribe', value: fishData.tribe },
    { label: 'Latin Name', value: fishData.latinName },
    { label: 'First Description', value: fishData.firstDescription },
    { label: 'Synonyms', value: fishData.synonyms },
    { label: 'Etymology', value: fishData.etymology },
    { label: 'Distribution', value: fishData.distribution },
    { label: 'Fish Size', value: fishData.fishSize },
    { label: 'Tank Volume', value: fishData.tankVolume },
    { label: 'Max Temp', value: `${fishData.maxTemp}°C` },
    { label: 'Min Temp', value: `${fishData.minTemp}°C` },
    { label: 'PH', value: fishData.ph.toString() },
    { label: 'dGH', value: fishData.dGH.toString() },
    { label: 'Additional Requirements', value: fishData.additionalRequirements },
    { label: 'Aquarium Setup', value: fishData.aquariumSetup },
    { label: 'Intraspecies Compatibility', value: fishData.intraspeciesCompatibility },
    { label: 'Interspecies Compatibility', value: fishData.interspeciesCompatibility },
    { label: 'Feeding', value: fishData.feeding },
    { label: 'Sexual Dimorphism', value: fishData.sexualDimorphism },
    { label: 'Breeding', value: fishData.breeding },
    { label: 'Additional Information', value: fishData.additionalInformation },
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
