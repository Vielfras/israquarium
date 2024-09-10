import { useEffect, useState } from 'react';
import { apiBase } from '../../config';
import PlantCard from '../../components/Plant/PlantCard/PlantCard';
import PlantMiniCard from '../../components/Plant/PlantMiniCard/PlantMiniCard';
import AlphabetRow from '../../components/Misc/AlphabetRow/AlphabetRow';
import { IPlant } from '../../interfaces/IPlant';
import Spinner from '../../components/Misc/Spinner/Spinner';
import { useTranslation } from 'react-i18next';

const apiPlantCall = `${apiBase}/api/plant`;

export default function Plants() {
  const [plantData, setPlantData] = useState<IPlant[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
  const [selectedPlant, setSelectedPlant] = useState<IPlant | null>(null);
  const { i18n } = useTranslation(); // Get the current language

  useEffect(() => {
    const fetchPlantData = async () => {
      try {
        const response = await fetch(apiPlantCall);
        if (!response.ok) {
          throw new Error('Failed to fetch plant data');
        }
        const data = await response.json();
        if (Array.isArray(data.data)) {
          setPlantData(data.data);
        } else {
          setPlantData([data.data]);
        }
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchPlantData();
  }, []);

  const handleLetterClick = (letter: string) => {
    setSelectedLetter(letter);
    setSelectedPlant(null);
  };

  const filteredPlants = plantData.filter(plant =>
    selectedLetter ? plant.name.startsWith(selectedLetter) : false
  );

  return (
    <div className="w-full flex flex-col items-center">
      {/* Alphabet Row */}
      <AlphabetRow selectedLetter={selectedLetter} onLetterClick={handleLetterClick} />

      {/* Loading and Error Handling */}
      {loading && <Spinner message="Loading plants..." />}
      {error && <div className="text-red-500">Error: {error}</div>}

      {/* Plant List and Full Plant Card */}
      {!loading && !error && (
        <div className="w-full">
          {selectedPlant ? (
            <PlantCard plantData={selectedPlant} />
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredPlants.length > 0 ? (
                filteredPlants.map(plant => (
                  <PlantMiniCard
                    key={plant._id}
                    plant={plant}
                    onClick={() => setSelectedPlant(plant)}
                  />
                ))
              ) : (
                <p>No plants found for the selected letter.</p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
