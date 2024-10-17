// Plants.tsx

import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import PlantCard from '../../components/Plant/PlantCard/PlantCard';
import PlantMiniCard from '../../components/Plant/PlantMiniCard/PlantMiniCard';
import AlphabetRow from '../../components/Misc/AlphabetRow/AlphabetRow';
import { IPlant } from '../../interfaces/IPlant';
import Spinner from '../../components/Misc/Spinner/Spinner';
import { doGetPlantsByLetter, doGetPlantById } from '../../services/PlantServices';
import { useTranslation } from 'react-i18next';
import { DirectionProvider } from '../../context/ReadingDirectionContext';

export default function Plants() {
  const { t } = useTranslation();
  const [plantData, setPlantData] = useState<IPlant[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
  const [selectedPlant, setSelectedPlant] = useState<IPlant | null>(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const plantIdFromUrl = searchParams.get('plant-id');

  useEffect(() => {
    if (plantIdFromUrl) {
      const fetchPlantById = async () => {
        setLoading(true);
        setError(null);

        const result = await doGetPlantById(plantIdFromUrl);
        if (result.error) {
          setError(result.error);
        } else if (result.result) {
          setSelectedPlant(result.result);
        } else {
          setError(`'${plantIdFromUrl}' ${t('PlantsPage.plantNotFoundError')}`);
        }
        setLoading(false);
      };

      fetchPlantById();
    }
  }, [plantIdFromUrl, t]);

  useEffect(() => {
    if (!selectedLetter || plantIdFromUrl) return;

    const fetchPlantData = async () => {
      setLoading(true);
      setError(null);
      setPlantData([]);

      const result = await doGetPlantsByLetter(selectedLetter);

      if (result.error) {
        setError(`${t('PlantsPage.letterEmpty')} '${selectedLetter}'.`);
      } else if (result.result && result.result.length > 0) {
        setPlantData(result.result);
      } else {
        setError(`${t('PlantsPage.letterEmpty')} '${selectedLetter}'.`);
      }

      setLoading(false);
    };

    fetchPlantData();
  }, [selectedLetter, plantIdFromUrl, t]);

  const handleLetterClick = (letter: string) => {
    setSelectedLetter(letter);
    setSelectedPlant(null);
  };

  const handlePlantClick = (plant: IPlant) => {
    setSelectedPlant(plant);
    setSearchParams({ 'plant-id': plant._id });
  };

  return (
    <div className="w-full flex flex-col items-center">
      <AlphabetRow selectedLetter={selectedLetter} onLetterClick={handleLetterClick} />

      {loading && <Spinner message={t('PlantsPage.loadingPlants')} />}
      <DirectionProvider>
        {error && <div className="text-red-500">{error}</div>}
      </DirectionProvider>

      {selectedPlant && (
        <div className="w-full mt-4">
          <PlantCard plantData={selectedPlant} />
        </div>
      )}

      {/* Plant List */}
      {!loading && !error && !selectedPlant && selectedLetter && (
        <div className="w-full mt-4">
          {plantData.length > 0 ? (
            <div className="columns-2 sm:columns-3 lg:columns-5 gap-4">
              {plantData.map((plant) => (
                <div key={plant._id} className="mb-3 break-inside-avoid">
                  <PlantMiniCard
                    plant={plant}
                    onClick={() => handlePlantClick(plant)}
                  />
                </div>
              ))}
            </div>
          ) : (
            <p>{`${t('PlantsPage.letterEmpty')} '${selectedLetter}'.`}</p>
          )}
        </div>
      )}

      <DirectionProvider>
        {!selectedLetter && !loading && !selectedPlant && (
          <h1 className="mt-6 text-4xl font-extrabold text-center text-blue-600 dark:text-blue-400">
            {`${t('PlantsPage.selectLetter')}`}
          </h1>
        )}
      </DirectionProvider>
    </div>
  );
}
