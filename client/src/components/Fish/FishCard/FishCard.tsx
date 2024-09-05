import "./FishCard.css";
import { IFish } from "../../../interfaces/IFish";
import { useTranslation } from 'react-i18next';

interface IFishCard {
  fishData: IFish;
}

export default function FishCard({ fishData }: IFishCard) {
  const { t, i18n } = useTranslation();

  const langData = fishData.languages[i18n.language as keyof typeof fishData.languages];

  const details = [
    { label: t('FishCard.subclass'), value: langData.subclass },
    { label: t('FishCard.order'), value: langData.order },
    { label: t('FishCard.family'), value: langData.family },
    { label: t('FishCard.subfamily'), value: langData.subfamily },
    { label: t('FishCard.tribe'), value: fishData.tribe },
    { label: t('FishCard.latinName'), value: fishData.latinName },
    { label: t('FishCard.firstDescription'), value: fishData.firstDescription },
    { label: t('FishCard.synonyms'), value: langData.synonyms },
    { label: t('FishCard.etymology'), value: langData.etymology },
    { label: t('FishCard.distribution'), value: langData.distribution },
    { label: t('FishCard.fishSize'), value: fishData.fishSize },
    { label: t('FishCard.tankVolume'), value: fishData.tankVolume },
    { label: t('FishCard.maxTemp'), value: `${fishData.maxTemp}°C` },
    { label: t('FishCard.minTemp'), value: `${fishData.minTemp}°C` },
    { label: t('FishCard.ph'), value: fishData.ph.toString() },
    { label: t('FishCard.dGH'), value: fishData.dGH.toString() },
    { label: t('FishCard.additionalRequirements'), value: langData.additionalRequirements },
    { label: t('FishCard.aquariumSetup'), value: langData.aquariumSetup },
    { label: t('FishCard.intraspeciesCompatibility'), value: langData.intraspeciesCompatibility },
    { label: t('FishCard.interspeciesCompatibility'), value: langData.interspeciesCompatibility },
    { label: t('FishCard.feeding'), value: langData.feeding },
    { label: t('FishCard.sexualDimorphism'), value: langData.sexualDimorphism },
    { label: t('FishCard.breeding'), value: langData.breeding },
    { label: t('FishCard.additionalInformation'), value: langData.additionalInformation },
    { label: t('FishCard.sources'), value: fishData.sources },
  ];

  return (
    <div className="max-w-4xl mx-auto bg-blue-100 p-6 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center text-blue-900 mb-4">{fishData.name}</h1>

      {/* Image Section */}
      <div className="grid grid-cols-2 gap-4">
        {fishData.images.map((image, index) => (
          <div key={index} className="flex justify-center">
            <a href={`http://127.0.0.1:3000/api/fish/image/${fishData._id}/${image.src}`} target="_blank" rel="noopener noreferrer">
              <img
                src={`http://127.0.0.1:3000/api/fish/image/${fishData._id}/${image.src}`}
                alt={image.alt}
                className="w-full h-48 object-cover rounded-lg shadow-md transition-transform transform hover:scale-105"
              />
            </a>
          </div>
        ))}
      </div>

      {/* Details Table Section */}
      <table className="w-full mt-6 table-auto border-collapse">
        <thead>
          <tr className="bg-blue-200 text-blue-900">
          </tr>
        </thead>
        <tbody>
          {details.map((detail, index) => (
            <tr key={index} className={`${index % 2 !== 0 ? 'bg-blue-50' : 'bg-blue-100'}`}>
              <td className="px-3  pr-0 py-2 font-semibold text-blue-900 ">{detail.label}</td>
              <td className="px-2 pl-0 text-stone-800">{detail.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
