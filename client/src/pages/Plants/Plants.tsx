import { useEffect, useState } from 'react';
import PlantCard from '../../components/Plant/PlantCard/PlantCard';
import PlantMiniCard from '../../components/Plant/PlantMiniCard/PlantMiniCard';
import AlphabetRow from '../../components/Misc/AlphabetRow/AlphabetRow';
import { IPlant } from '../../interfaces/IPlant';
import Spinner from '../../components/Misc/Spinner/Spinner';
import { doGetPlantsByLetter } from '../../services/PlantServices';

export default function Plants() {
  const [plantData, setPlantData] = useState<IPlant[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
  const [selectedPlant, setSelectedPlant] = useState<IPlant | null>(null);

  useEffect(() => {
    if (!selectedLetter) return;

    const fetchPlantData = async () => {
      setLoading(true);
      setError(null);
      setPlantData([]);

      const result = await doGetPlantsByLetter(selectedLetter);

      if (result.error) {
        setError(result.error);
      } else if (result.result && result.result.length > 0) {
        setPlantData(result.result);
      } else {
        setError(`No plants found starting with the letter '${selectedLetter}'.`);
      }

      setLoading(false);
    };

    fetchPlantData();
  }, [selectedLetter]);

  const handleLetterClick = (letter: string) => {
    setSelectedLetter(letter);
    setSelectedPlant(null);
  };

  return (
    <div className="w-full flex flex-col items-center">
      <AlphabetRow selectedLetter={selectedLetter} onLetterClick={handleLetterClick} />

      {/* Loading and Error Handling */}
      {loading && <Spinner message="Loading plants..." />}
      {error && <div className="text-red-500">{error}</div>}

      {/* Plant List and Full Plant Card */}
      {!loading && !error && selectedLetter && (
        <div className="w-full mt-4">
          {selectedPlant ? (
              <PlantCard plantData={selectedPlant} />
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {plantData.length > 0 ? (
                plantData.map(plant => (
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

      {/* Message to prompt user to select a letter */}
      {!selectedLetter && !loading &&
        <h1 className='mt-6 text-4xl font-extrabold text-center text-blue-600 dark:text-blue-400'>Please select a letter to view plants.</h1>
      }
    </div>
  );
}
