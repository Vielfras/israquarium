// CreateFish.tsx

import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { ToastsContext } from '../../context/ToastsContext';
import { useNavigate } from 'react-router-dom';
import FormField from '../../components/Form/FormField/FormField';
import { useTranslation } from 'react-i18next';
import { DirectionProvider } from '../../context/ReadingDirectionContext';
import { IFish, IFishIndex } from '../../interfaces/IFish';
import { doCreateFish } from '../../services/FishServices';
import { doGetFishIndexes } from '../../services/FishIndexServices';

type LanguageCode = 'en' | 'he' | 'ru';

export default function CreateFish() {
  const { t, i18n } = useTranslation();
  const [name, setName] = useState<string>('');
  const [latinName, setLatinName] = useState<string>('');
  const [firstDescription, setFirstDescription] = useState<string>('');
  const [sources, setSources] = useState<string>('');
  const [tribe, setTribe] = useState<string>('');
  const [tankVolume, setTankVolume] = useState<string>('');
  const [fishSize, setFishSize] = useState<string>('');
  const [maxTemp, setMaxTemp] = useState<string>('');
  const [minTemp, setMinTemp] = useState<string>('');
  const [ph, setPh] = useState<string>('');
  const [dGH, setDGH] = useState<string>('');
  const [isBusy, setIsBusy] = useState<boolean>(false);
  const [fishIndexes, setFishIndexes] = useState<IFishIndex[]>([]);
  const [selectedFishIndex, setSelectedFishIndex] = useState<string>('');


  const [activeLangTab, setActiveLangTab] = useState<LanguageCode>('en');
  const [languageData, setLanguageData] = useState<{
    [key in LanguageCode]: {
      subclass: string;
      order: string;
      family: string;
      subfamily: string;
      synonyms: string;
      etymology: string;
      distribution: string;
      additionalRequirements: string;
      aquariumSetup: string;
      intraspeciesCompatibility: string;
      interspeciesCompatibility: string;
      feeding: string;
      sexualDimorphism: string;
      breeding: string;
      additionalInformation: string;
    };
  }>({
    en: {
      subclass: '',
      order: '',
      family: '',
      subfamily: '',
      synonyms: '',
      etymology: '',
      distribution: '',
      additionalRequirements: '',
      aquariumSetup: '',
      intraspeciesCompatibility: '',
      interspeciesCompatibility: '',
      feeding: '',
      sexualDimorphism: '',
      breeding: '',
      additionalInformation: '',
    },
    he: {
      subclass: '',
      order: '',
      family: '',
      subfamily: '',
      synonyms: '',
      etymology: '',
      distribution: '',
      additionalRequirements: '',
      aquariumSetup: '',
      intraspeciesCompatibility: '',
      interspeciesCompatibility: '',
      feeding: '',
      sexualDimorphism: '',
      breeding: '',
      additionalInformation: '',
    },
    ru: {
      subclass: '',
      order: '',
      family: '',
      subfamily: '',
      synonyms: '',
      etymology: '',
      distribution: '',
      additionalRequirements: '',
      aquariumSetup: '',
      intraspeciesCompatibility: '',
      interspeciesCompatibility: '',
      feeding: '',
      sexualDimorphism: '',
      breeding: '',
      additionalInformation: '',
    },
  });

  const auth = useContext(AuthContext);
  const toasts = useContext(ToastsContext);
  const navigate = useNavigate();

  const localT = i18n.getFixedT(activeLangTab);
  const currentLang = (i18n.language as 'en' | 'he' | 'ru') || 'en';

  // Validation regex
  const nameRegex = /^[A-Za-z\s]{2,}$/;
  const numberRegex = /^\d+(\.\d+)?$/; // for numbers and decimals

  const handleLanguageChange = (field: keyof typeof languageData['en'], value: string) => {
    setLanguageData({
      ...languageData,
      [activeLangTab]: {
        ...languageData[activeLangTab],
        [field]: value,
      },
    });
  };

  useEffect(() => {
    async function fetchFishIndexes() {
      const { error, result } = await doGetFishIndexes();
      console.log(result);
      if (error) {
        toasts?.addToast('CreateFish.⚠️', t('CreateFish.errorTitle'), error, 'danger');
      } else if (result) {
        setFishIndexes(result);
      }
    }

    fetchFishIndexes();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsBusy(true);

    if (!name || !selectedFishIndex) {
      toasts?.addToast('CreateFish.⚠️', t('CreateFish.errorTitle'), t('CreateFish.errorMessage'), 'danger');
      setIsBusy(false);
      return;
    }

    const fishData: IFish = {
      _id: '',
      name,
      latinName,
      firstDescription,
      sources,
      tankVolume,
      fishSize,
      tribe,
      maxTemp: parseFloat(maxTemp),
      minTemp: parseFloat(minTemp),
      ph: parseFloat(ph),
      dGH: parseFloat(dGH),
      images: [],
      languages: languageData,
      likes: [],
      fishIndices: [selectedFishIndex],
    };

    const { error, result } = await doCreateFish(fishData);
    if (error) {
      toasts?.addToast('CreateFish.⚠️', t('CreateFish.errorTitle'), error, 'danger');
    } else {
      toasts?.addToast('CreateFish.👍🏼', t('CreateFish.successTitle'), t('CreateFish.successMessage'), 'success');
      navigate('/fish-index');
    }

    setIsBusy(false);
  };

  const getDirection = (lang: LanguageCode) => {
    return lang === 'he' ? 'rtl' : 'ltr';
  };

  return (
    <div className="flex justify-center items-center">
      <div className="bg-white dark:bg-sky-900 p-8 rounded-lg text-gray-900 dark:text-gray-50">
        <h3 className="text-3xl font-bold mb-6 text-center">{t('CreateFish.submitFishTitle')}</h3>

        <DirectionProvider>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Fish Index Dropdown */}
            <div className="grid grid-cols-1">
              <div className="mb-4">
                <label htmlFor="formFishIndex" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">
                  {t('CreateFish.fishIndexLabel')}
                </label>
                <select
                  id="formFishIndex"
                  value={selectedFishIndex}
                  onChange={(e) => setSelectedFishIndex(e.target.value)}
                  className="...">
                  <option value="">{t('CreateFish.fishIndexPlaceholder')}</option>
                  {fishIndexes.map((index) => {
                    const displayName =
                      currentLang === 'en'
                        ? index.english
                        : currentLang === 'he'
                          ? index.hebrew
                          : currentLang === 'ru'
                            ? index.russian
                            : index.english;

                    return (
                      <option key={index._id} value={index._id}>
                        {displayName}
                      </option>
                    );
                  })}
                </select>
                {!selectedFishIndex && (
                  <p className="text-red-500 text-xs italic mt-2">{t('CreateFish.validation.fishIndex')}</p>
                )}
              </div>
            </div>

            {/* General Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FormField controlId="formGridFishName" type="text"
                label={t('CreateFish.fishNameLabel')} placeholder={t('CreateFish.fishNamePlaceholder')}
                value={name}
                regex={nameRegex}
                onChange={(e) => setName(e.target.value)}
                isValid={nameRegex.test(name)}
                validationMessage={t('CreateFish.validation.fishName')}
              />
              <FormField controlId="formGridLatinName" type="text"
                label={t('CreateFish.latinNameLabel')} placeholder={t('CreateFish.latinNamePlaceholder')}
                value={latinName}
                regex={nameRegex}
                onChange={(e) => setLatinName(e.target.value)}
                isValid={nameRegex.test(latinName)}
                validationMessage={t('CreateFish.validation.latinName')}
              />
            </div>

            {/* Additional General Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FormField controlId="formGridFirstDescription" type="text"
                label={t('CreateFish.firstDescriptionLabel')}
                placeholder={t('CreateFish.firstDescriptionPlaceholder')}
                value={firstDescription}
                onChange={(e) => setFirstDescription(e.target.value)}
              />
              <FormField controlId="formGridTribe" type="text"
                label={t('CreateFish.tribeLabel')}
                placeholder={t('CreateFish.tribePlaceholder')}
                value={tribe}
                onChange={(e) => setTribe(e.target.value)}
              />
            </div>

            {/* Tank Volume and Fish Size */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FormField controlId="formGridTankVolume" type="text"
                label={t('CreateFish.tankVolumeLabel')}
                placeholder={t('CreateFish.tankVolumePlaceholder')}
                value={tankVolume}
                regex={numberRegex}
                onChange={(e) => setTankVolume(e.target.value)}
                isValid={numberRegex.test(tankVolume)}
                validationMessage={t('CreateFish.validation.tankVolume')}
              />
              <FormField controlId="formGridFishSize" type="text"
                label={t('CreateFish.fishSizeLabel')}
                placeholder={t('CreateFish.fishSizePlaceholder')}
                value={fishSize}
                onChange={(e) => setFishSize(e.target.value)}
              />
            </div>

            {/* Max/Min Temp, PH, and dGH */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
              <FormField controlId="formGridMaxTemp" type="text"
                label={t('CreateFish.maxTempLabel')}
                placeholder={t('CreateFish.maxTempPlaceholder')}
                value={maxTemp}
                regex={numberRegex}
                onChange={(e) => setMaxTemp(e.target.value)}
                isValid={numberRegex.test(maxTemp)}
                validationMessage={t('CreateFish.validation.maxTemp')}
              />
              <FormField controlId="formGridMinTemp" type="text"
                label={t('CreateFish.minTempLabel')}
                placeholder={t('CreateFish.minTempPlaceholder')}
                value={minTemp}
                regex={numberRegex}
                onChange={(e) => setMinTemp(e.target.value)}
                isValid={numberRegex.test(minTemp)}
                validationMessage={t('CreateFish.validation.minTemp')}
              />
              <FormField controlId="formGridPH" type="text"
                label={t('CreateFish.phLabel')}
                placeholder={t('CreateFish.phPlaceholder')}
                value={ph}
                regex={numberRegex}
                onChange={(e) => setPh(e.target.value)}
                isValid={numberRegex.test(ph)}
                validationMessage={t('CreateFish.validation.ph')}
              />
              <FormField controlId="formGriddGH" type="text"
                label={t('CreateFish.dGHLabel')}
                placeholder={t('CreateFish.dGHPlaceholder')}
                value={dGH}
                regex={numberRegex}
                onChange={(e) => setDGH(e.target.value)}
                isValid={numberRegex.test(dGH)}
                validationMessage={t('CreateFish.validation.dGH')}
              />
            </div>

            {/* Sources Field */}
            <div className="grid grid-cols-1">
              <FormField controlId="formGridSources"
                type="text"
                label={t('CreatePlant.sourcesLabel')}
                placeholder={t('CreatePlant.sourcesPlaceholder')}
                value={sources}
                onChange={(e) => setSources(e.target.value)}
              />
            </div>

            {/* Language Tabs */}
            <div className="mt-8">
              <div className="flex my-4 mt-12 space-x-4 justify-center">
                {(['en', 'he', 'ru'] as LanguageCode[]).map((lang) => (
                  <button
                    key={lang} type="button"
                    className={`px-4 py-2 rounded-lg transition ${activeLangTab === lang
                      ? 'bg-blue-600 text-white font-bold shadow-lg'
                      : 'bg-gray-50 text-blue-900 hover:bg-blue-100'
                      }`}
                    onClick={() => setActiveLangTab(lang)}
                  >
                    {t(`CreateFish.languages.${lang}`)}
                  </button>
                ))}
              </div>

              {/* Fields for the active language */}
              <div dir={getDirection(activeLangTab)} className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {(
                  ['subclass', 'order', 'family', 'subfamily',
                    'synonyms', 'etymology', 'distribution', 'additionalRequirements',
                    'aquariumSetup', 'intraspeciesCompatibility', 'interspeciesCompatibility', 'feeding',
                    'sexualDimorphism', 'breeding', 'additionalInformation',
                  ] as const
                ).map((field) => (
                  <FormField
                    key={field} // Add the key prop here
                    controlId={`formGrid${field}`}
                    type="text"
                    label={localT(`CreateFish.${field}Label`)}
                    placeholder={localT(`CreateFish.${field}Placeholder`)}
                    value={languageData[activeLangTab][field]}
                    onChange={(e) => handleLanguageChange(field, e.target.value)}
                    isLtrRtlResponsive={false}
                  />
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className={`bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 ${isBusy ? 'opacity-50' : ''
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
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 100 8V4z"
                    ></path>
                  </svg>
                ) : (
                  t('CreateFish.submitButton')
                )}
              </button>
            </div>
          </form>
        </DirectionProvider>
      </div>
    </div>
  );
}
