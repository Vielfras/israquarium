import { useState } from 'react';
import { apiBase } from "../../../config";
import { DirectionProvider } from "../../../context/ReadingDirectionContext";
import { IPlant } from "../../../interfaces/IPlant";
import { useTranslation } from 'react-i18next';
import FavoriteIcon from '../../Misc/FavoriteToggle/FavoriteToggle';

interface IPlantCard {
  plantData: IPlant;
}

type LanguageCode = 'en' | 'he' | 'ru';

export default function PlantCard({ plantData }: IPlantCard) {
  const { t, i18n } = useTranslation();
  const language: LanguageCode = i18n.language as LanguageCode;
  const langData = plantData.languages[language];

  const [menuOpen, setMenuOpen] = useState(false); // State for the kebab menu
  const [isFavorited, setIsFavorited] = useState(false); // Manage favorite state in parent

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleEdit = () => {
    console.log('Edit selected');
    setMenuOpen(false);
  };

  const handleDelete = () => {
    console.log('Delete selected');
    setMenuOpen(false);
  };

  const handleReport = () => {
    console.log('Report selected');
    setMenuOpen(false);
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
        {/* Heart Icon */}
        <FavoriteIcon isFavorited={isFavorited} onToggle={handleFavoriteToggle} />

        {/* Plant Name */}
        <h1 className="text-3xl font-bold text-center text-green-900 mx-auto">
          {plantData.name}
        </h1>

        {/* Kebab Menu Button */}
        <div className="relative">
          <button onClick={handleMenuToggle} className="text-gray-600 hover:text-gray-900 transition-all duration-200 ease-in-out transform hover:scale-125">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 10 24" strokeWidth={3.5} stroke="currentColor"
              className="w-6 h-8" >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6h.01M12 12h.01M12 18h.01" />
            </svg>
          </button>


          {/* Kebab Menu */}
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-white border rounded-lg shadow-lg z-10"
              style={{ top: '15%' }}>
              <ul className="py-2 text-sm text-center text-gray-700">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={handleEdit}>
                  {t('PlantCard.KebabMenu.edit')}
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={handleDelete}>
                  {t('PlantCard.KebabMenu.delete')}
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={handleReport}>
                  {t('PlantCard.KebabMenu.report')}
                </li>
              </ul>
            </div>
          )}
        </div>
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
