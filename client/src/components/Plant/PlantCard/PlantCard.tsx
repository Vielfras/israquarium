import { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate for navigation
import { apiBase } from "../../../config";
import { DirectionProvider } from "../../../context/ReadingDirectionContext";
import { IPlant } from "../../../interfaces/IPlant";
import { useTranslation } from 'react-i18next';
import FavoriteIcon from '../../Misc/FavoriteToggle/FavoriteToggle';
import KebabMenu from '../../Misc/KebabMenu/KebabMenu';

interface IPlantCard {
  plantData: IPlant;
}

type LanguageCode = 'en' | 'he' | 'ru';

export default function PlantCard({ plantData }: IPlantCard) {
  const { t, i18n } = useTranslation();
  const language: LanguageCode = i18n.language as LanguageCode;
  const langData = plantData.languages[language];
  const navigate = useNavigate();  // Use navigate to go to EditPlant page

  const [isFavorited, setIsFavorited] = useState(false);

  const handleEdit = () => {
    navigate(`/edit-plant/${plantData._id}`);  // Navigate to the EditPlant page with plantId
  };

  const handleDelete = () => {
    console.log('Delete selected');
  };

  const handleReport = () => {
    console.log('Report selected');
  };

  const handleFavoriteToggle = (favorited: boolean) => {
    console.log(favorited ? 'Plant favorited' : 'Plant unfavorited');
    setIsFavorited(favorited);
  };

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
    <div className="relative max-w-4xl mx-auto bg-green-50 p-6 rounded-lg shadow-lg">
      {/* Plant Name, Heart Icon, and Kebab Menu */}
      <div className="flex justify-between items-center mb-4">
        <FavoriteIcon isFavorited={isFavorited} onToggle={handleFavoriteToggle} />

        <h1 className="text-3xl font-bold text-center text-green-900 mx-auto">
          {plantData.name}
        </h1>

        <KebabMenu onEdit={handleEdit} onDelete={handleDelete} onReport={handleReport} />
      </div>

      {/* Plant Image */}
      <div>
        {plantData.images.map((image, index) => (
          <img key={index} src={`${apiBase}/api/plant/image/${plantData._id}/${image.src}`} alt={image.alt} className="w-full rounded" />
        ))}
      </div>

      {/* Plant Details */}
      <DirectionProvider>
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
      </DirectionProvider>
    </div>
  );
}
