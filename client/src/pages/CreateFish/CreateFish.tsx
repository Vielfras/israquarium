// CreateFish.tsx

import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { ToastsContext } from '../../context/ToastsContext';
import { useNavigate } from 'react-router-dom';
import FormField from '../../components/Form/FormField/FormField';
import { useTranslation } from 'react-i18next';
import { DirectionProvider } from '../../context/ReadingDirectionContext';
import { IFish } from '../../interfaces/IFish';

export default function CreateFish() {
    const { t } = useTranslation();
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

    // Language-specific fields
    const [subclass, setSubclass] = useState<string>('');
    const [order, setOrder] = useState<string>('');
    const [family, setFamily] = useState<string>('');
    const [subfamily, setSubfamily] = useState<string>('');
    const [synonyms, setSynonyms] = useState<string>('');
    const [etymology, setEtymology] = useState<string>('');
    const [distribution, setDistribution] = useState<string>('');
    const [additionalRequirements, setAdditionalRequirements] = useState<string>('');
    const [aquariumSetup, setAquariumSetup] = useState<string>('');
    const [intraspeciesCompatibility, setIntraspeciesCompatibility] = useState<string>('');
    const [interspeciesCompatibility, setInterspeciesCompatibility] = useState<string>('');
    const [feeding, setFeeding] = useState<string>('');
    const [sexualDimorphism, setSexualDimorphism] = useState<string>('');
    const [breeding, setBreeding] = useState<string>('');
    const [additionalInformation, setAdditionalInformation] = useState<string>('');
    const [isBusy, setIsBusy] = useState<boolean>(false);

    const auth = useContext(AuthContext);
    const toasts = useContext(ToastsContext);
    const navigate = useNavigate();

    // Validation regex
    const nameRegex = /^[A-Za-z\s]{2,}$/;
    const numberRegex = /^\d+(\.\d+)?$/; // for numbers and decimals

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsBusy(true);

        // Basic validation before submission
        if (!name || !latinName || !sources || !tankVolume) {
            toasts?.addToast('CreateFish.⚠️', t('CreateFish.errorTitle'), t('CreateFish.errorMessage'), 'danger');
            setIsBusy(false);
            return;
        }

        const fishData: IFish = {
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
            languages: {
                en: {
                    subclass,
                    order,
                    family,
                    subfamily,
                    synonyms,
                    etymology,
                    distribution,
                    additionalRequirements,
                    aquariumSetup,
                    intraspeciesCompatibility,
                    interspeciesCompatibility,
                    feeding,
                    sexualDimorphism,
                    breeding,
                    additionalInformation,
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
            },
        };

        // Mocking an API call here, replace with actual call
        // const { error } = await auth.submitFish(fishData); // Assuming `auth.submitFish` is a method for submitting fish data
        const error = null;
        if (error) {
            toasts?.addToast('CreateFish.⚠️', t('CreateFish.errorTitle'), error, 'danger');
        } else {
            toasts?.addToast('CreateFish.👍🏼', t('CreateFish.successTitle'), t('CreateFish.successMessage'), 'success');
            navigate('/fish');
        }

        setIsBusy(false);
    };

    return (
        <div className="flex justify-center items-center">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg text-gray-900 dark:text-gray-50">
                <h3 className="text-3xl font-bold mb-6 text-center">{t('CreateFish.submitFishTitle')}</h3>

                <DirectionProvider>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <FormField
                                controlId="formGridFishName"
                                type="text"
                                label={t('CreateFish.fishNameLabel')}
                                placeholder={t('CreateFish.fishNamePlaceholder')}
                                value={name}
                                regex={nameRegex}
                                onChange={(e) => setName(e.target.value)}
                                isValid={nameRegex.test(name)}
                                validationMessage={t('CreateFish.validation.fishName')}
                            />
                            <FormField
                                controlId="formGridLatinName"
                                type="text"
                                label={t('CreateFish.latinNameLabel')}
                                placeholder={t('CreateFish.latinNamePlaceholder')}
                                value={latinName}
                                regex={nameRegex}
                                onChange={(e) => setLatinName(e.target.value)}
                                isValid={nameRegex.test(latinName)}
                                validationMessage={t('CreateFish.validation.latinName')}
                            />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <FormField
                                controlId="formGridFirstDescription"
                                type="text"
                                label={t('CreateFish.firstDescriptionLabel')}
                                placeholder={t('CreateFish.firstDescriptionPlaceholder')}
                                value={firstDescription}
                                onChange={(e) => setFirstDescription(e.target.value)}
                            />
                            <FormField
                                controlId="formGridTribe"
                                type="text"
                                label={t('CreateFish.tribeLabel')}
                                placeholder={t('CreateFish.tribePlaceholder')}
                                value={tribe}
                                onChange={(e) => setTribe(e.target.value)}
                            />
                        </div>

                        <hr className="my-6 border-gray-300 dark:border-gray-700" />

                        {/* Tank Volume and Fish Size */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <FormField
                                controlId="formGridTankVolume"
                                type="text"
                                label={t('CreateFish.tankVolumeLabel')}
                                placeholder={t('CreateFish.tankVolumePlaceholder')}
                                value={tankVolume}
                                regex={numberRegex}
                                onChange={(e) => setTankVolume(e.target.value)}
                                isValid={numberRegex.test(tankVolume)}
                                validationMessage={t('CreateFish.validation.tankVolume')}
                            />
                            <FormField
                                controlId="formGridFishSize"
                                type="text"
                                label={t('CreateFish.fishSizeLabel')}
                                placeholder={t('CreateFish.fishSizePlaceholder')}
                                value={fishSize}
                                onChange={(e) => setFishSize(e.target.value)}
                            />
                        </div>

                        {/* Max/Min Temp, PH, and dGH */}
                        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
                            <FormField
                                controlId="formGridMaxTemp"
                                type="text"
                                label={t('CreateFish.maxTempLabel')}
                                placeholder={t('CreateFish.maxTempPlaceholder')}
                                value={maxTemp}
                                regex={numberRegex}
                                onChange={(e) => setMaxTemp(e.target.value)}
                                isValid={numberRegex.test(maxTemp)}
                                validationMessage={t('CreateFish.validation.maxTemp')}
                            />
                            <FormField
                                controlId="formGridMinTemp"
                                type="text"
                                label={t('CreateFish.minTempLabel')}
                                placeholder={t('CreateFish.minTempPlaceholder')}
                                value={minTemp}
                                regex={numberRegex}
                                onChange={(e) => setMinTemp(e.target.value)}
                                isValid={numberRegex.test(minTemp)}
                                validationMessage={t('CreateFish.validation.minTemp')}
                            />
                            <FormField
                                controlId="formGridPH"
                                type="text"
                                label={t('CreateFish.phLabel')}
                                placeholder={t('CreateFish.phPlaceholder')}
                                value={ph}
                                regex={numberRegex}
                                onChange={(e) => setPh(e.target.value)}
                                isValid={numberRegex.test(ph)}
                                validationMessage={t('CreateFish.validation.ph')}
                            />
                            <FormField
                                controlId="formGriddGH"
                                type="text"
                                label={t('CreateFish.dGHLabel')}
                                placeholder={t('CreateFish.dGHPlaceholder')}
                                value={dGH}
                                regex={numberRegex}
                                onChange={(e) => setDGH(e.target.value)}
                                isValid={numberRegex.test(dGH)}
                                validationMessage={t('CreateFish.validation.dGH')}
                            />
                        </div>

                        <hr className="my-6 border-gray-300 dark:border-gray-700" />

                        {/* Language-specific fields (e.g., subclass, order, family, etc.) */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <FormField
                                controlId="formGridSubclass"
                                type="text"
                                label={t('CreateFish.subclassLabel')}
                                placeholder={t('CreateFish.subclassPlaceholder')}
                                value={subclass}
                                onChange={(e) => setSubclass(e.target.value)}
                            />
                            <FormField
                                controlId="formGridOrder"
                                type="text"
                                label={t('CreateFish.orderLabel')}
                                placeholder={t('CreateFish.orderPlaceholder')}
                                value={order}
                                onChange={(e) => setOrder(e.target.value)}
                            />
                        </div>

                        {/* Additional Fields */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <FormField
                                controlId="formGridFamily"
                                type="text"
                                label={t('CreateFish.familyLabel')}
                                placeholder={t('CreateFish.familyPlaceholder')}
                                value={family}
                                onChange={(e) => setFamily(e.target.value)}
                            />
                            <FormField
                                controlId="formGridSubfamily"
                                type="text"
                                label={t('CreateFish.subfamilyLabel')}
                                placeholder={t('CreateFish.subfamilyPlaceholder')}
                                value={subfamily}
                                onChange={(e) => setSubfamily(e.target.value)}
                            />
                            <FormField
                                controlId="formGridSynonyms"
                                type="text"
                                label={t('CreateFish.synonymsLabel')}
                                placeholder={t('CreateFish.synonymsPlaceholder')}
                                value={synonyms}
                                onChange={(e) => setSynonyms(e.target.value)}
                            />
                            <FormField
                                controlId="formGridEtymology"
                                type="text"
                                label={t('CreateFish.etymologyLabel')}
                                placeholder={t('CreateFish.etymologyPlaceholder')}
                                value={etymology}
                                onChange={(e) => setEtymology(e.target.value)}
                            />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <FormField
                                controlId="formGridDistribution"
                                type="text"
                                label={t('CreateFish.distributionLabel')}
                                placeholder={t('CreateFish.distributionPlaceholder')}
                                value={distribution}
                                onChange={(e) => setDistribution(e.target.value)}
                            />
                            <FormField
                                controlId="formGridAquariumSetup"
                                type="text"
                                label={t('CreateFish.aquariumSetupLabel')}
                                placeholder={t('CreateFish.aquariumSetupPlaceholder')}
                                value={aquariumSetup}
                                onChange={(e) => setAquariumSetup(e.target.value)}
                            />

                            <FormField
                                controlId="formGridIntraspeciesCompatibility"
                                type="text"
                                label={t('CreateFish.intraspeciesCompatibilityLabel')}
                                placeholder={t('CreateFish.intraspeciesCompatibilityPlaceholder')}
                                value={intraspeciesCompatibility}
                                onChange={(e) => setIntraspeciesCompatibility(e.target.value)}
                            />
                            <FormField
                                controlId="formGridInterspeciesCompatibility"
                                type="text"
                                label={t('CreateFish.interspeciesCompatibilityLabel')}
                                placeholder={t('CreateFish.interspeciesCompatibilityPlaceholder')}
                                value={interspeciesCompatibility}
                                onChange={(e) => setInterspeciesCompatibility(e.target.value)}
                            />
                        </div>
                        <div>

                            <FormField
                                controlId="formGridAdditionalRequirements"
                                type="text"
                                label={t('CreateFish.additionalRequirementsLabel')}
                                placeholder={t('CreateFish.additionalRequirementsPlaceholder')}
                                value={additionalRequirements}
                                onChange={(e) => setAdditionalRequirements(e.target.value)}
                            />
                        </div>

                        
                        <hr className="my-6 border-gray-300 dark:border-gray-700" />


                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <FormField
                                controlId="formGridFeeding"
                                type="text"
                                label={t('CreateFish.feedingLabel')}
                                placeholder={t('CreateFish.feedingPlaceholder')}
                                value={feeding}
                                onChange={(e) => setFeeding(e.target.value)}
                            />
                            <FormField
                                controlId="formGridSexualDimorphism"
                                type="text"
                                label={t('CreateFish.sexualDimorphismLabel')}
                                placeholder={t('CreateFish.sexualDimorphismPlaceholder')}
                                value={sexualDimorphism}
                                onChange={(e) => setSexualDimorphism(e.target.value)}
                            />
                            <FormField
                                controlId="formGridBreeding"
                                type="text"
                                label={t('CreateFish.breedingLabel')}
                                placeholder={t('CreateFish.breedingPlaceholder')}
                                value={breeding}
                                onChange={(e) => setBreeding(e.target.value)}
                            />
                            <FormField
                                controlId="formGridAdditionalInformation"
                                type="text"
                                label={t('CreateFish.additionalInformationLabel')}
                                placeholder={t('CreateFish.additionalInformationPlaceholder')}
                                value={additionalInformation}
                                onChange={(e) => setAdditionalInformation(e.target.value)}
                            />
                        </div>

                        <hr className="my-6 border-gray-300 dark:border-gray-700" />

                        <div className="text-center">
                            <button
                                type="submit"
                                className={`bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 ${isBusy ? 'opacity-50' : ''}`}
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
