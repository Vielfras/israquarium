import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import PlantCard from '../../components/Plant/PlantCard/PlantCard';
import PlantMiniCard from '../../components/Plant/PlantMiniCard/PlantMiniCard';
import AlphabetRow from '../../components/Misc/AlphabetRow/AlphabetRow';
import { IPlant } from '../../interfaces/IPlant';
import Spinner from '../../components/Misc/Spinner/Spinner';
import { doGetPlantsByLetter, doGetPlantById } from '../../services/PlantServices';

export default function Plants() {
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

        const result = await doGetPlantById(plantIdFromUrl, 'en'); // TODO - change this to be dynamic by language
        if (result.error) {
          setError(result.error);
        } else if (result.result) {
          setSelectedPlant(result.result);
        } else {
          setError(`Plant with ID '${plantIdFromUrl}' not found.`);
        }
        setLoading(false);
      };

      fetchPlantById();
    }
  }, [plantIdFromUrl]);

  useEffect(() => {
    if (!selectedLetter || plantIdFromUrl) return;

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
  }, [selectedLetter, plantIdFromUrl]);

  const handleLetterClick = (letter: string) => {
    setSelectedLetter(letter);
    setSelectedPlant(null);
  };

  const handlePlantClick = (plant: IPlant) => {
    setSelectedPlant(plant);
    // Update the URL with the plant ID as a query parameter
    setSearchParams({ 'plant-id': plant._id });
  };

  return (
    <div className="w-full flex flex-col items-center">
      <AlphabetRow selectedLetter={selectedLetter} onLetterClick={handleLetterClick} />

      {/* Loading and Error Handling */}
      {loading && <Spinner message="Loading plants..." />}
      {error && <div className="text-red-500">{error}</div>}

      {/* Display plant if found via query parameter */}
      {selectedPlant && (
        <div className="w-full mt-4">
          <PlantCard plantData={selectedPlant} />
        </div>
      )}

      {/* Plant List and Full Plant Card */}
      {!loading && !error && !selectedPlant && selectedLetter && (
        <div className="w-full mt-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {plantData.length > 0 ? (
              plantData.map((plant) => (
                <PlantMiniCard
                  key={plant._id}
                  plant={plant}
                  onClick={() => handlePlantClick(plant)} 
                />
              ))
            ) : (
              <p>No plants found for the selected letter.</p>
            )}
          </div>
        </div>
      )}

      {/* Message to prompt user to select a letter */}
      {!selectedLetter && !loading && !selectedPlant &&
        <h1 className='mt-6 text-4xl font-extrabold text-center text-blue-600 dark:text-blue-400'>
          Please select a letter to view plants.
        </h1>
      }
    </div>
  );
}
