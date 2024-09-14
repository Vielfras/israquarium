import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiBase } from "../../../config";
import { IFish } from "../../../interfaces/IFish";
import { useTranslation } from 'react-i18next';
import FavoriteIcon from '../../Misc/FavoriteToggle/FavoriteToggle';
import KebabMenu from '../../Misc/KebabMenu/KebabMenu';
import { doDeleteFish, doSubmitFishReport, doToggleFishLike } from '../../../services/FishServices';  // Assuming similar services exist for fish
import Modal from '../../Misc/Modal/Modal';
import ReportingModal from '../../Misc/Modal/ReportingModal';
import { AuthContext } from '../../../context/AuthContext';

interface IFishCard {
  fishData: IFish;
}

export default function FishCard({ fishData }: IFishCard) {
  const { t, i18n } = useTranslation();
  const langData = fishData.languages[i18n.language as keyof typeof fishData.languages];
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  const [isFavorited, setIsFavorited] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showReportingModal, setShowReportingModal] = useState(false);

  useEffect(() => {
    if (auth?.userDetails && fishData.likes.includes(auth?.userDetails._id)) {
      setIsFavorited(true);  
    }
  }, [auth, fishData.likes]);

  const handleEdit = () => {
    navigate(`/edit-fish/${fishData._id}`);
  };

  const handleDelete = async () => {
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    const { error } = await doDeleteFish(fishData._id);

    if (error) {
      alert(t('FishCard.deleteFailure'));
    } else {
      alert(t('FishCard.deleteSuccess'));
      navigate('/fish');
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
    const { error } = await doSubmitFishReport(fishData._id, reason, message);

    if (error) {
      alert(t('FishCard.reportFailure'));
    } else {
      alert(t('FishCard.reportSuccess'));
    }

    setShowReportingModal(false);
  };

  const handleReportCancel = () => {
    setShowReportingModal(false);
  };

  const handleFavoriteToggle = async () => {
    const { error } = await doToggleFishLike(fishData._id);
    if (error) {
      alert(`${t('FishCard.favoriteError')}\n${error}`);
    } else {
      setIsFavorited(!isFavorited);
    }
  };

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
    <div className="relative max-w-4xl mx-auto bg-blue-100 p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <FavoriteIcon isFavorited={isFavorited} onToggle={handleFavoriteToggle} />

        <h1 className="text-3xl font-bold text-center text-blue-900 mx-auto">
          {fishData.name}
        </h1>

        <KebabMenu onEdit={handleEdit} onDelete={handleDelete} onReport={handleReport} />
      </div>

      {/* Image Section */}
      <div className="grid grid-cols-2 gap-4">
        {fishData.images.map((image, index) => (
          <div key={index} className="flex justify-center">
            <a href={`${apiBase}/api/fish/image/${fishData._id}/${image.src}`} target="_blank" rel="noopener noreferrer">
              <img
                src={`${apiBase}/api/fish/image/${fishData._id}/${image.src}`}
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
              <td className="px-3 pr-0 py-2 font-semibold text-blue-900">{detail.label}</td>
              <td className="px-2 pl-0 text-stone-800">{detail.value}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <Modal
          title={t('FishCard.deleteConfirmation')}
          message={t('FishCard.deleteWarning')}
          confirmText={t('FishCard.confirmDelete')}
          cancelText={t('FishCard.cancelDelete')}
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
