import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { ToastsContext } from '../../context/ToastsContext';
import { useNavigate } from 'react-router-dom';
import FormField from '../../components/Form/FormField/FormField';
import { useTranslation } from 'react-i18next';
import { DirectionProvider } from '../../context/ReadingDirectionContext';
import { IPlant } from '../../interfaces/IPlant';
import { doCreatePlant } from '../../services/PlantServices'; // Import doCreatePlant

export default function CreatePlant() {
  const { t } = useTranslation();
  const [name, setName] = useState<string>('');
  const [latinName, setLatinName] = useState<string>('');
  const [family, setFamily] = useState<string>('');
  const [synonyms, setSynonyms] = useState<string>('');
  const [etymology, setEtymology] = useState<string>('');
  const [distribution, setDistribution] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [propagation, setPropagation] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [width, setWidth] = useState<string>('');
  const [temperature, setTemperature] = useState<string>('');
  const [ph, setPh] = useState<string>('');
  const [hardness, setHardness] = useState<string>('');
  const [light, setLight] = useState<string>('');
  const [growthRate, setGrowthRate] = useState<string>('');
  const [placement, setPlacement] = useState<string>('');
  const [sources, setSources] = useState<string>('');
  const [isBusy, setIsBusy] = useState<boolean>(false);

  const auth = useContext(AuthContext);
  const toasts = useContext(ToastsContext);
  const navigate = useNavigate();

  // Validation regex
  const nameRegex = /^[A-Za-z\s]{2,}$/;
  const numberRegex = /^\d+$/;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsBusy(true);

    // Basic validation before submission
    if (!name || !latinName || !family || !sources) {
      toasts?.addToast('CreatePlant.⚠️', t('CreatePlant.errorTitle'), t('CreatePlant.errorMessage'), 'danger');
      setIsBusy(false);
      return;
    }

    const plantData: IPlant = {
      _id: '', // Assuming this is generated by the server
      name,
      latinName,
      height,
      width,
      temperature,
      ph,
      hardness,
      light,
      growthRate,
      placement,
      sources,
      images: [], // Handle image upload separately
      languages: {
        en: { family, synonyms, etymology, distribution, notes, propagation },
        he: { family: '', synonyms: '', etymology: '', distribution: '', notes: '', propagation: '' },
        ru: { family: '', synonyms: '', etymology: '', distribution: '', notes: '', propagation: '' },
      },
      plantIndices: [],
    };

    // Send the data to the backend
    const { error, result } = await doCreatePlant(plantData); // Call doCreatePlant

    if (error) {
      toasts?.addToast('CreatePlant.⚠️', t('CreatePlant.errorTitle'), error, 'danger');
    } else {
      toasts?.addToast('CreatePlant.👍🏼', t('CreatePlant.successTitle'), t('CreatePlant.successMessage'), 'success');
      navigate('/plants'); // Navigate to the plants list after successful creation
    }

    setIsBusy(false);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="bg-white dark:bg-gray-900 p-8 rounded-lg text-gray-900 dark:text-gray-50">
        <h3 className="text-3xl font-bold mb-6 text-center">{t('CreatePlant.submitPlantTitle')}</h3>

        <DirectionProvider>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FormField
                controlId="formGridPlantName"
                type="text"
                label={t('CreatePlant.plantNameLabel')}
                placeholder={t('CreatePlant.plantNamePlaceholder')}
                value={name}
                regex={nameRegex}
                onChange={(e) => setName(e.target.value)}
                isValid={nameRegex.test(name)}
                validationMessage={t('CreatePlant.validation.plantName')}
              />
              <FormField
                controlId="formGridLatinName"
                type="text"
                label={t('CreatePlant.latinNameLabel')}
                placeholder={t('CreatePlant.latinNamePlaceholder')}
                value={latinName}
                regex={nameRegex}
                onChange={(e) => setLatinName(e.target.value)}
                isValid={nameRegex.test(latinName)}
                validationMessage={t('CreatePlant.validation.latinName')}
              />
            </div>

            <hr className="my-6 border-gray-300 dark:border-gray-700" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FormField
                controlId="formGridFamily"
                type="text"
                label={t('CreatePlant.familyLabel')}
                placeholder={t('CreatePlant.familyPlaceholder')}
                value={family}
                onChange={(e) => setFamily(e.target.value)}
              />
              <FormField
                controlId="formGridSynonyms"
                type="text"
                label={t('CreatePlant.synonymsLabel')}
                placeholder={t('CreatePlant.synonymsPlaceholder')}
                value={synonyms}
                onChange={(e) => setSynonyms(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FormField
                controlId="formGridEtymology"
                type="text"
                label={t('CreatePlant.etymologyLabel')}
                placeholder={t('CreatePlant.etymologyPlaceholder')}
                value={etymology}
                onChange={(e) => setEtymology(e.target.value)}
              />
              <FormField
                controlId="formGridDistribution"
                type="text"
                label={t('CreatePlant.distributionLabel')}
                placeholder={t('CreatePlant.distributionPlaceholder')}
                value={distribution}
                onChange={(e) => setDistribution(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FormField
                controlId="formGridNotes"
                type="text"
                label={t('CreatePlant.notesLabel')}
                placeholder={t('CreatePlant.notesPlaceholder')}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
              <FormField
                controlId="formGridPropagation"
                type="text"
                label={t('CreatePlant.propagationLabel')}
                placeholder={t('CreatePlant.propagationPlaceholder')}
                value={propagation}
                onChange={(e) => setPropagation(e.target.value)}
              />
            </div>

            <hr className="my-6 border-gray-300 dark:border-gray-700" />


            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <FormField
                controlId="formGridHeight"
                type="text"
                label={t('CreatePlant.heightLabel')}
                placeholder={t('CreatePlant.heightPlaceholder')}
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                validationMessage={t('CreatePlant.validation.height')}
              />
              <FormField
                controlId="formGridWidth"
                type="text"
                label={t('CreatePlant.widthLabel')}
                placeholder={t('CreatePlant.widthPlaceholder')}
                value={width}
                onChange={(e) => setWidth(e.target.value)}
                validationMessage={t('CreatePlant.validation.width')}
              />
              <FormField
                controlId="formGridTemperature"
                type="text"
                label={t('CreatePlant.temperatureLabel')}
                placeholder={t('CreatePlant.temperaturePlaceholder')}
                value={temperature}
                onChange={(e) => setTemperature(e.target.value)}
                validationMessage={t('CreatePlant.validation.temperature')}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <FormField
                controlId="formGridPH"
                type="text"
                label={t('CreatePlant.phLabel')}
                placeholder={t('CreatePlant.phPlaceholder')}
                value={ph}
                onChange={(e) => setPh(e.target.value)}
                validationMessage={t('CreatePlant.validation.ph')}
              />
              <FormField
                controlId="formGridHardness"
                type="text"
                label={t('CreatePlant.hardnessLabel')}
                placeholder={t('CreatePlant.hardnessPlaceholder')}
                value={hardness}
                onChange={(e) => setHardness(e.target.value)}
                validationMessage={t('CreatePlant.validation.hardness')}
              />
              <FormField
                controlId="formGridLight"
                type="text"
                label={t('CreatePlant.lightLabel')}
                placeholder={t('CreatePlant.lightPlaceholder')}
                value={light}
                onChange={(e) => setLight(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FormField
                controlId="formGridGrowthRate"
                type="text"
                label={t('CreatePlant.growthRateLabel')}
                placeholder={t('CreatePlant.growthRatePlaceholder')}
                value={growthRate}
                onChange={(e) => setGrowthRate(e.target.value)}
              />
              <FormField
                controlId="formGridPlacement"
                type="text"
                label={t('CreatePlant.placementLabel')}
                placeholder={t('CreatePlant.placementPlaceholder')}
                value={placement}
                onChange={(e) => setPlacement(e.target.value)}
              />
            </div>

            <hr className="my-6 border-gray-300 dark:border-gray-700" />


            <div className="grid grid-cols-1">
              <FormField
                controlId="formGridSources"
                type="text"
                label={t('CreatePlant.sourcesLabel')}
                placeholder={t('CreatePlant.sourcesPlaceholder')}
                value={sources}
                onChange={(e) => setSources(e.target.value)}
              />
            </div>

            <hr className="my-6 border-gray-300 dark:border-gray-700" />

            <div className="text-center">
              <button
                type="submit"
                className={`bg-green-600 text-white py-2 px-4 rounded-lg shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 ${isBusy ? 'opacity-50' : ''}`}
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
                  t('CreatePlant.submitButton')
                )}
              </button>
            </div>
          </form>
        </DirectionProvider>
      </div>
    </div>
  );
}
