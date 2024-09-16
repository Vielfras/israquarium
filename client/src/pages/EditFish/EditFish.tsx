import { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ToastsContext } from '../../context/ToastsContext';
import { AuthContext } from '../../context/AuthContext';
import { IFish, IFishImage, ILanguage } from '../../interfaces/IFish';
import { doGetFishById, doUpdateFish } from '../../services/FishServices';
import FormField from '../../components/Form/FormField/FormField';
import InactivityWatchdog from '../../components/Access/InactivityWatchdog';
import { DirectionProvider } from '../../context/ReadingDirectionContext';
import Modal from '../../components/Misc/Modal/Modal';
import { apiBase } from '../../config';

export default function EditFish() {
    const { fishId } = useParams<{ fishId: string }>();
    const { t } = useTranslation();
    const navigate = useNavigate();
    const toasts = useContext(ToastsContext);
    const auth = useContext(AuthContext);

    const [formData, setFormData] = useState<IFish | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [activeLangTab, setActiveLangTab] = useState<'en' | 'he' | 'ru'>('en');
    const [isBusy, setIsBusy] = useState<boolean>(false);
    const [showImageModal, setShowImageModal] = useState<boolean>(false);
    const [imageToDelete, setImageToDelete] = useState<string | null>(null);

    useEffect(() => {
        const fetchFishData = async () => {
            if (fishId) {
                const { error, result } = await doGetFishById(fishId);
                if (error) {
                    setError(error);
                } else if (result) {
                    setFormData(result);
                }
                setLoading(false);
            }
        };
        fetchFishData();
    }, [fishId]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (formData) {
            const { name, value } = e.target;
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleLanguageChange = (field: keyof ILanguage, value: string) => {
        if (formData) {
            setFormData({
                ...formData,
                languages: {
                    ...formData.languages,
                    [activeLangTab]: {
                        ...formData.languages[activeLangTab],
                        [field]: value,
                    },
                },
            });
        }
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (formData && e.target.files && e.target.files.length > 0) {
            const newImage = e.target.files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result as string;
                const newImageObj: IFishImage = {
                    src: base64String,
                    alt: newImage.name,
                    creatorName: "",
                    originalSource: '',
                    _id: '',
                };
                setFormData({
                    ...formData,
                    images: [...formData.images, newImageObj],
                });
            };
            reader.readAsDataURL(newImage);
        }
    };

    const handleDeleteImage = (imageId: string) => {
        setImageToDelete(imageId);
        setShowImageModal(true);
    };

    const confirmDeleteImage = () => {
        if (formData && imageToDelete) {
            setFormData({
                ...formData,
                images: formData.images.filter((img) => img._id !== imageToDelete),
            });
            setImageToDelete(null);
            setShowImageModal(false);
        }
    };

    const cancelDeleteImage = () => {
        setImageToDelete(null);
        setShowImageModal(false);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData) return;
        setIsBusy(true);

        try {
            const { error, result } = await doUpdateFish(fishId!, formData);
            if (error) {
                toasts?.addToast(t('Error'), t('EditFish.updateError'), error, 'danger');
            } else if (result) {
                toasts?.addToast(t('Success'), t('EditFish.updateSuccessTitle'), t('EditFish.updateSuccessMessage'), 'success');
                navigate(`/fish-index/${fishId}`);
            }
        } catch (err) {
            const errMessage = (err as Error).message;
            toasts?.addToast(t('Error'), t('EditFish.updateError'), errMessage, 'danger');
        } finally {
            setIsBusy(false);
        }
    };

    const getDirection = (lang: 'en' | 'he' | 'ru') => {
        return lang === 'he' ? 'rtl' : 'ltr';
    };

    if (loading) {
        return <div className="text-center">{t('Loading...')}</div>;
    }

    if (error) {
        return <div className="text-center text-red-500">{t('Error')}: {error}</div>;
    }

    return (
        formData && (
            <div className="relative max-w-6xl mx-auto bg-blue-100 dark:bg-gray-900 p-8 rounded-lg shadow-lg">
                <InactivityWatchdog />

                <h1 className="text-4xl font-bold text-center text-blue-900 dark:text-blue-100 mb-6">{t('EditFish.title')}</h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <DirectionProvider>
                        {/* General Information */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <FormField
                                controlId="name"
                                type="text"
                                label={t('EditFish.nameLabel')}
                                placeholder={t('EditFish.namePlaceholder')}
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />
                            <FormField
                                controlId="latinName"
                                type="text"
                                label={t('EditFish.latinNameLabel')}
                                placeholder={t('EditFish.latinNamePlaceholder')}
                                value={formData.latinName}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        {/* Environmental Parameters */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            <FormField
                                controlId="maxTemp"
                                type="number"
                                label={t('EditFish.maxTempLabel')}
                                placeholder={t('EditFish.maxTempPlaceholder')}
                                value={formData.maxTemp}
                                onChange={handleInputChange}
                            />
                            <FormField
                                controlId="minTemp"
                                type="number"
                                label={t('EditFish.minTempLabel')}
                                placeholder={t('EditFish.minTempPlaceholder')}
                                value={formData.minTemp}
                                onChange={handleInputChange}
                            />
                            <FormField
                                controlId="ph"
                                type="number"
                                label={t('EditFish.phLabel')}
                                placeholder={t('EditFish.phPlaceholder')}
                                value={formData.ph}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <FormField
                                controlId="dGH"
                                type="number"
                                label={t('EditFish.dGHLabel')}
                                placeholder={t('EditFish.dGHPlaceholder')}
                                value={formData.dGH}
                                onChange={handleInputChange}
                            />
                            <FormField
                                controlId="tankVolume"
                                type="text"
                                label={t('EditFish.tankVolumeLabel')}
                                placeholder={t('EditFish.tankVolumePlaceholder')}
                                value={formData.tankVolume}
                                onChange={handleInputChange}
                            />
                        </div>

                        {/* Images Section */}
                        <div className="mt-8">
                            <h2 className="text-2xl font-semibold text-gray-900 dark:text-blue-100 mb-4 text-center">{t('EditFish.imagesSection')}</h2>
                            <div className="flex flex-wrap justify-center gap-4">
                                {formData.images.map((image) => (
                                    <div key={image._id || image.src} className="relative">
                                        <img
                                            src={`${apiBase}/api/fish/image/${formData._id}/${image.src}`}
                                            alt={image.alt}
                                            className="w-32 h-32 object-cover rounded-lg shadow-md"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => handleDeleteImage(image._id)}
                                            className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                                            title={t('EditFish.deleteImage')}
                                        >
                                            &times;
                                        </button>
                                    </div>
                                ))}
                            </div>
                            {/* Centering the Add Image input field */}
                            <div className="mt-4 flex justify-center">
                                <div className="w-full sm:w-1/2">
                                    <label className="block text-lg font-medium text-gray-900 dark:text-blue-100 mb-2 text-center">
                                        {t('EditFish.addImageLabel')}
                                    </label>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0
                                          file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Language Tabs and Fields */}
                        <div className="mt-8">
                            <div className="flex my-4 space-x-4 justify-center">
                                {(['en', 'he', 'ru'] as const).map((lang) => (
                                    <button
                                        key={lang}
                                        type="button"
                                        className={`px-4 py-2 rounded-lg transition ${
                                            activeLangTab === lang
                                                ? 'bg-blue-600 text-white shadow-lg'
                                                : 'bg-gray-200 text-blue-900 hover:bg-gray-300'
                                        }`}
                                        onClick={() => setActiveLangTab(lang)}
                                    >
                                        {t(`EditFish.languages.${lang}`)}
                                    </button>
                                ))}
                            </div>

                            {/* Language-Specific Fields */}
                            <div dir={getDirection(activeLangTab)}>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <FormField
                                        controlId="subclass"
                                        type="text"
                                        label={t('EditFish.subclassLabel')}
                                        placeholder={t('EditFish.subclassPlaceholder')}
                                        value={formData.languages[activeLangTab].subclass}
                                        onChange={(e) => handleLanguageChange('subclass', e.target.value)}
                                    />
                                    <FormField
                                        controlId="order"
                                        type="text"
                                        label={t('EditFish.orderLabel')}
                                        placeholder={t('EditFish.orderPlaceholder')}
                                        value={formData.languages[activeLangTab].order}
                                        onChange={(e) => handleLanguageChange('order', e.target.value)}
                                    />
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <FormField
                                        controlId="family"
                                        type="text"
                                        label={t('EditFish.familyLabel')}
                                        placeholder={t('EditFish.familyPlaceholder')}
                                        value={formData.languages[activeLangTab].family}
                                        onChange={(e) => handleLanguageChange('family', e.target.value)}
                                    />
                                    <FormField
                                        controlId="subfamily"
                                        type="text"
                                        label={t('EditFish.subfamilyLabel')}
                                        placeholder={t('EditFish.subfamilyPlaceholder')}
                                        value={formData.languages[activeLangTab].subfamily}
                                        onChange={(e) => handleLanguageChange('subfamily', e.target.value)}
                                    />
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <FormField
                                        controlId="synonyms"
                                        type="text"
                                        label={t('EditFish.synonymsLabel')}
                                        placeholder={t('EditFish.synonymsPlaceholder')}
                                        value={formData.languages[activeLangTab].synonyms}
                                        onChange={(e) => handleLanguageChange('synonyms', e.target.value)}
                                    />
                                    <FormField
                                        controlId="etymology"
                                        type="textarea"
                                        label={t('EditFish.etymologyLabel')}
                                        placeholder={t('EditFish.etymologyPlaceholder')}
                                        value={formData.languages[activeLangTab].etymology}
                                        onChange={(e) => handleLanguageChange('etymology', e.target.value)}
                                    />
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <FormField
                                        controlId="distribution"
                                        type="textarea"
                                        label={t('EditFish.distributionLabel')}
                                        placeholder={t('EditFish.distributionPlaceholder')}
                                        value={formData.languages[activeLangTab].distribution}
                                        onChange={(e) => handleLanguageChange('distribution', e.target.value)}
                                    />
                                    <FormField
                                        controlId="additionalRequirements"
                                        type="textarea"
                                        label={t('EditFish.additionalRequirementsLabel')}
                                        placeholder={t('EditFish.additionalRequirementsPlaceholder')}
                                        value={formData.languages[activeLangTab].additionalRequirements}
                                        onChange={(e) => handleLanguageChange('additionalRequirements', e.target.value)}
                                    />
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <FormField
                                        controlId="aquariumSetup"
                                        type="textarea"
                                        label={t('EditFish.aquariumSetupLabel')}
                                        placeholder={t('EditFish.aquariumSetupPlaceholder')}
                                        value={formData.languages[activeLangTab].aquariumSetup}
                                        onChange={(e) => handleLanguageChange('aquariumSetup', e.target.value)}
                                    />
                                    <FormField
                                        controlId="intraspeciesCompatibility"
                                        type="textarea"
                                        label={t('EditFish.intraspeciesCompatibilityLabel')}
                                        placeholder={t('EditFish.intraspeciesCompatibilityPlaceholder')}
                                        value={formData.languages[activeLangTab].intraspeciesCompatibility}
                                        onChange={(e) => handleLanguageChange('intraspeciesCompatibility', e.target.value)}
                                    />
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <FormField
                                        controlId="interspeciesCompatibility"
                                        type="textarea"
                                        label={t('EditFish.interspeciesCompatibilityLabel')}
                                        placeholder={t('EditFish.interspeciesCompatibilityPlaceholder')}
                                        value={formData.languages[activeLangTab].interspeciesCompatibility}
                                        onChange={(e) => handleLanguageChange('interspeciesCompatibility', e.target.value)}
                                    />
                                    <FormField
                                        controlId="feeding"
                                        type="textarea"
                                        label={t('EditFish.feedingLabel')}
                                        placeholder={t('EditFish.feedingPlaceholder')}
                                        value={formData.languages[activeLangTab].feeding}
                                        onChange={(e) => handleLanguageChange('feeding', e.target.value)}
                                    />
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <FormField
                                        controlId="breeding"
                                        type="textarea"
                                        label={t('EditFish.breedingLabel')}
                                        placeholder={t('EditFish.breedingPlaceholder')}
                                        value={formData.languages[activeLangTab].breeding}
                                        onChange={(e) => handleLanguageChange('breeding', e.target.value)}
                                    />
                                    <FormField
                                        controlId="sexualDimorphism"
                                        type="textarea"
                                        label={t('EditFish.sexualDimorphismLabel')}
                                        placeholder={t('EditFish.sexualDimorphismPlaceholder')}
                                        value={formData.languages[activeLangTab].sexualDimorphism}
                                        onChange={(e) => handleLanguageChange('sexualDimorphism', e.target.value)}
                                    />
                            </div>
                        </div>
                                </div>
                                <div className="gap-6">
                                    <FormField
                                        controlId="additionalInformation"
                                        type="textarea"
                                        label={t('EditFish.additionalInformationLabel')}
                                        placeholder={t('EditFish.additionalInformationPlaceholder')}
                                        value={formData.languages[activeLangTab].additionalInformation}
                                        onChange={(e) => handleLanguageChange('additionalInformation', e.target.value)}
                                    />
                                </div>
                    </DirectionProvider>

                    {/* Submit Button */}
                    <div className="flex justify-center mt-10">
                        <button
                            type="submit"
                            className={`w-1/3 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 shadow-lg transition ${isBusy ? 'opacity-50 cursor-not-allowed' : ''
                                }`}
                            disabled={isBusy}
                        >
                            {isBusy ? (
                                <svg
                                    className="animate-spin h-5 w-5 mx-auto text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    ></circle>
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8v4a4 4 0 100 8V4z"
                                    ></path>
                                </svg>
                            ) : (
                                t('EditFish.submitButton')
                            )}
                        </button>
                    </div>
                </form>

                {/* Delete Image Confirmation Modal */}
                {showImageModal && (
                    <Modal
                        title={t('EditFish.deleteImageConfirmation')}
                        message={t('EditFish.deleteImageWarning')}
                        confirmText={t('EditFish.confirmDelete')}
                        cancelText={t('EditFish.cancelDelete')}
                        onConfirm={confirmDeleteImage}
                        onCancel={cancelDeleteImage}
                    />
                )}
            </div>
        )
    );
}
