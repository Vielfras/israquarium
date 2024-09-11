import { apiBase } from "../../../config";
import { IPlant } from "../../../interfaces/IPlant";
import { useTranslation } from 'react-i18next';

interface IPlantCard {
  plantData: IPlant;
}

type LanguageCode = 'en' | 'he' | 'ru';

export default function PlantCard({ plantData }: IPlantCard) {
  const { t, i18n } = useTranslation(); 

  const language: LanguageCode = i18n.language as LanguageCode;
  const langData = plantData.languages[language]; 

  const details = [
    { label: t('PlantCard.family'), value: langData.family },
    { label: t('PlantCard.synonyms'), value: langData.synonyms },
    { label: t('PlantCard.etymology'), value: langData.etymology },
    { label: t('PlantCard.distribution'), value: langData.distribution },
    { label: t('PlantCard.notes'), value: langData.notes },
    { label: t('PlantCard.propagation'), value: langData.propagation },
    { label: t('PlantCard.latinName'), value: plantData.latinName },
    { label: t('PlantCard.firstDescription'), value: plantData.firstDescription },
    { label: t('PlantCard.height'), value: plantData.height },
    { label: t('PlantCard.width'), value: plantData.width },
    { label: t('PlantCard.temperature'), value: plantData.temperature },
    { label: t('PlantCard.ph'), value: plantData.ph },
    { label: t('PlantCard.hardness'), value: plantData.hardness },
    { label: t('PlantCard.light'), value: plantData.light },
    { label: t('PlantCard.growthRate'), value: plantData.growthRate },
    { label: t('PlantCard.placement'), value: plantData.placement },
    { label: t('PlantCard.sources'), value: plantData.sources },
  ];

  return (
    <div className="max-w-4xl mx-auto bg-green-50 p-6 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center text-green-900 mb-4">{plantData.name}</h1>
      <div className="">
        {plantData.images.map((image, index) => (
          <img key={index} src={`${apiBase}/api/plant/image/${plantData._id}/${image.src}`} alt={image.alt} className="w-full rounded" />
        ))}
      </div>
      
      <table className="w-full mt-4">
        <tbody>
          {details.map((detail, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-green-50' : 'bg-white'}>
              <td className="font-bold p-2">{detail.label}:</td>
              <td className="p-2">{detail.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
