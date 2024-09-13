import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiBase } from "../../../config";
import { DirectionProvider } from "../../../context/ReadingDirectionContext";
import { IPlant } from "../../../interfaces/IPlant";
import { useTranslation } from 'react-i18next';
import FavoriteIcon from '../../Misc/FavoriteToggle/FavoriteToggle';
import KebabMenu from '../../Misc/KebabMenu/KebabMenu';
import { doDeletePlant, doSubmitPlantReport } from '../../../services/PlantServices';
import Modal from '../../Misc/Modal/Modal';
import ReportingModal from '../../Misc/Modal/ReportingModal';

interface IPlantCard {
  plantData: IPlant;
}

type LanguageCode = 'en' | 'he' | 'ru';

export default function PlantCard({ plantData }: IPlantCard) {
  const { t, i18n } = useTranslation();
  const language: LanguageCode = i18n.language as LanguageCode;
  const langData = plantData.languages[language];
  const navigate = useNavigate();

  const [isFavorited, setIsFavorited] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showReportingModal, setShowReportingModal] = useState(false);

  const handleEdit = () => {
    navigate(`/edit-plant/${plantData._id}`);
  };

  const handleDelete = async () => {
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    const { error } = await doDeletePlant(plantData._id);

    if (error) {
      alert(t('PlantCard.deleteFailure'));
    } else {
      alert(t('PlantCard.deleteSuccess'));
      navigate('/plants');
    }

    setShowDeleteModal(false);
  };

  const cancelDelete = () => {
    setShowDeleteModal(false);
  };

  const handleReport = () => {
    setShowReportingModal(true);
  };

  const handleReportConfirm = async (reason: string, message: string) => {
    const { error } = await doSubmitPlantReport(plantData._id, reason, message);

    if (error) {
      alert(t('PlantCard.reportFailure'));
    } else {
      alert(t('PlantCard.reportSuccess'));
    }

    setShowReportingModal(false);
  };

  const handleReportCancel = () => {
    setShowReportingModal(false);
  };

  const handleFavoriteToggle = (favorited: boolean) => {
    setIsFavorited(favorited);
  };

  const details = [
    { label: t('PlantCard.latinName'), value: plantData.latinName },
    { label: t('PlantCard.firstDescription'), value: plantData.firstDescription },
    { label: t('PlantCard.family'), value: langData.family },
    { label: t('PlantCard.synonyms'), value: langData.synonyms },
    { label: t('PlantCard.etymology'), value: langData.etymology },
    { label: t('PlantCard.distribution'), value: langData.distribution },
    { label: t('PlantCard.notes'), value: langData.notes },
    { label: t('PlantCard.propagation'), value: langData.propagation },
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
          <img key={index} className="w-full rounded"
            src={`${apiBase}/api/plant/image/${plantData._id}/${image.src}`}
            alt={image.alt}
          />
        ))}
      </div>

      {/* Plant Details */}
      <DirectionProvider>
      <table className="mt-4">
          <tbody>
            {details.map((detail, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-green-50' : 'bg-white'}>
                <td className="font-bold p-2 sm:whitespace-nowrap">{detail.label}:</td>
                <td className="w-full p-2">{detail.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </DirectionProvider>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <Modal title={t('PlantCard.deleteConfirmation')}
          message={t('PlantCard.deleteWarning')}
          confirmText={t('PlantCard.confirmDelete')}
          cancelText={t('PlantCard.cancelDelete')}
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      )}

      {/* Reporting Modal */}
      <ReportingModal
        onConfirm={handleReportConfirm}
        onCancel={handleReportCancel}
        show={showReportingModal}
      />
    </div>
  );
}
