// CreatePlant.tsx

import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { ToastsContext } from '../../context/ToastsContext';
import { useNavigate } from 'react-router-dom';
import FormField from '../../components/Form/FormField/FormField';
import { useTranslation } from 'react-i18next';
import { DirectionProvider } from '../../context/ReadingDirectionContext';
import { IPlant } from '../../interfaces/IPlant';
import { doCreatePlant } from '../../services/PlantServices';
import InactivityWatchdog from '../../components/Access/InactivityWatchdog';

type LanguageCode = 'en' | 'he' | 'ru';

export default function CreatePlant() {
  const { t, i18n } = useTranslation();
  const [name, setName] = useState<string>('');
  const [latinName, setLatinName] = useState<string>('');
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

  const [activeLangTab, setActiveLangTab] = useState<LanguageCode>('en');
  const [languageData, setLanguageData] = useState<{
    [key in LanguageCode]: {
      family: string;
      synonyms: string;
      etymology: string;
      distribution: string;
      notes: string;
      propagation: string;
    };
  }>({
    en: {
      family: '',
      synonyms: '',
      etymology: '',
      distribution: '',
      notes: '',
      propagation: '',
    },
    he: {
      family: '',
      synonyms: '',
      etymology: '',
      distribution: '',
      notes: '',
      propagation: '',
    },
    ru: {
      family: '',
      synonyms: '',
      etymology: '',
      distribution: '',
      notes: '',
      propagation: '',
    },
  });

  const localT = i18n.getFixedT(activeLangTab);

  const auth = useContext(AuthContext);
  const toasts = useContext(ToastsContext);
  const navigate = useNavigate();

  // Validation regex
  const nameRegex = /^[A-Za-z\s]{2,}$/;

  const handleLanguageChange = (field: keyof typeof languageData['en'], value: string) => {
    setLanguageData({
      ...languageData,
      [activeLangTab]: {
        ...languageData[activeLangTab],
        [field]: value,
      },
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsBusy(true);

    if (!name) {
      toasts?.addToast('CreatePlant.⚠️', t('CreatePlant.errorTitle'), t('CreatePlant.errorMessage'), 'danger');
      setIsBusy(false);
      return;
    }

    const plantData: IPlant = {
      _id: '',
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
      images: [],
      languages: languageData,
      likes: [],
    };

    const { error, result } = await doCreatePlant(plantData);
    if (error) {
      toasts?.addToast('CreatePlant.⚠️', t('CreatePlant.errorTitle'), error, 'danger');
    } else {
      toasts?.addToast('CreatePlant.👍🏼', t('CreatePlant.successTitle'), t('CreatePlant.successMessage'), 'success');
      navigate('/plants');
    }

    setIsBusy(false);
  };

  const getDirection = (lang: LanguageCode) => {
    return lang === 'he' ? 'rtl' : 'ltr';
  };

  return (
    <div className="flex justify-center items-center">
      <div className="text-emerald-900 dark:text-green-50 bg-green-50 dark:bg-emerald-900 p-8 rounded-lg">
        <h3 className="text-3xl font-bold mb-6 text-center">{t('CreatePlant.submitPlantTitle')}</h3>

        <DirectionProvider>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* General Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FormField type="text" controlId="formGridPlantName"
                label={t('CreatePlant.plantNameLabel')} placeholder={t('CreatePlant.plantNamePlaceholder')}
                value={name}
                regex={nameRegex}
                onChange={(e) => setName(e.target.value)}
                isValid={nameRegex.test(name)}
                validationMessage={t('CreatePlant.validation.plantName')}
              />
              <FormField type="text" controlId="formGridLatinName"
                label={t('CreatePlant.latinNameLabel')} placeholder={t('CreatePlant.latinNamePlaceholder')}
                value={latinName}
                regex={nameRegex}
                onChange={(e) => setLatinName(e.target.value)}
                isValid={nameRegex.test(latinName)}
                validationMessage={t('CreatePlant.validation.latinName')}
              />
            </div>

            {/* Additional General Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <FormField type="text" controlId="formGridHeight"
                label={t('CreatePlant.heightLabel')} placeholder={t('CreatePlant.heightPlaceholder')}
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                validationMessage={t('CreatePlant.validation.height')}
              />
              <FormField type="text" controlId="formGridWidth"
                label={t('CreatePlant.widthLabel')} placeholder={t('CreatePlant.widthPlaceholder')}
                value={width}
                onChange={(e) => setWidth(e.target.value)}
                validationMessage={t('CreatePlant.validation.width')}
              />
              <FormField type="text" controlId="formGridTemperature"
                label={t('CreatePlant.temperatureLabel')} placeholder={t('CreatePlant.temperaturePlaceholder')}
                value={temperature}
                onChange={(e) => setTemperature(e.target.value)}
                validationMessage={t('CreatePlant.validation.temperature')}
              />
            </div>

            {/* More General Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <FormField type="text" controlId="formGridPH"
                label={t('CreatePlant.phLabel')} placeholder={t('CreatePlant.phPlaceholder')}
                value={ph}
                onChange={(e) => setPh(e.target.value)}
                validationMessage={t('CreatePlant.validation.ph')}
              />
              <FormField type="text" controlId="formGridHardness"
                label={t('CreatePlant.hardnessLabel')} placeholder={t('CreatePlant.hardnessPlaceholder')}
                value={hardness}
                onChange={(e) => setHardness(e.target.value)}
                validationMessage={t('CreatePlant.validation.hardness')}
              />
              <FormField type="text" controlId="formGridLight"
                label={t('CreatePlant.lightLabel')} placeholder={t('CreatePlant.lightPlaceholder')}
                value={light}
                onChange={(e) => setLight(e.target.value)}
              />
            </div>

            {/* Additional General Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FormField type="text" controlId="formGridGrowthRate"
                label={t('CreatePlant.growthRateLabel')} placeholder={t('CreatePlant.growthRatePlaceholder')}
                value={growthRate}
                onChange={(e) => setGrowthRate(e.target.value)}
              />
              <FormField type="text" controlId="formGridPlacement"
                label={t('CreatePlant.placementLabel')} placeholder={t('CreatePlant.placementPlaceholder')}
                value={placement}
                onChange={(e) => setPlacement(e.target.value)}
              />
            </div>

            {/* Sources Field */}
            <div className="grid grid-cols-1">
              <FormField type="text" controlId="formGridSources"
                label={t('CreatePlant.sourcesLabel')} placeholder={t('CreatePlant.sourcesPlaceholder')}
                value={sources}
                onChange={(e) => setSources(e.target.value)}
              />
            </div>

            {/* Language Tabs */}
            <div className="mt-8">
              <div className="flex my-4 mt-12 space-x-4 justify-center">
                {(['en', 'he', 'ru'] as LanguageCode[]).map((lang) => (
                  <button key={lang} type="button"
                    className={`px-4 py-2 rounded-lg transition ${activeLangTab === lang
                      ? 'dark:bg-green-400 bg-green-600 text-white dark:text-emerald-900 font-bold shadow-lg'
                      : 'bg-gray-200 text-green-900 hover:bg-green-200'
                      }`}
                    onClick={() => setActiveLangTab(lang)}
                  >
                    {t(`CreatePlant.languages.${lang}`)}
                  </button>
                ))}
              </div>

              {/* Fields for the active language */}
              <div dir={getDirection(activeLangTab)} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(['family', 'synonyms', 'etymology', 'distribution', 'notes', 'propagation'] as const).map((field) => (
                  <FormField key={field} controlId={`formGrid${field}`}
                    type="text"
                    isLtrRtlResponsive={false}
                    label={localT(`CreatePlant.${field}Label`)}
                    placeholder={localT(`CreatePlant.${field}Placeholder`)}
                    value={languageData[activeLangTab][field]}
                    onChange={(e) => handleLanguageChange(field, e.target.value)}
                  />
                ))}
              </div>

            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button type="submit"
                className={`bg-green-600 text-white mt-4 py-2 px-4 rounded-lg shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 ${isBusy ? 'opacity-50' : ''
                  }`}
                disabled={isBusy}
              >
                {isBusy ? (
                  // TODO - replace by Spinner component
                  <svg className="animate-spin h-5 w-5 mx-auto text-white"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  >
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 100 8V4z"></path>
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
