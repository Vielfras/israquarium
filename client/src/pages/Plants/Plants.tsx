import { useEffect, useState } from 'react';
import { apiBase } from '../../config';
import PlantCard from '../../components/Plant/PlantCard/PlantCard';
import PlantMiniCard from '../../components/Plant/PlantMiniCard/PlantMiniCard';
import { IPlant } from '../../interfaces/IPlant';
import Spinner from '../../components/Misc/Spinner/Spinner';
import { Link } from 'react-router-dom';

const apiPlantCall = `${apiBase}/api/plant`;

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export default function Plants() {
  const [plantData, setPlantData] = useState<IPlant[]>([]); // Always treat as array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
  const [selectedPlant, setSelectedPlant] = useState<IPlant | null>(null);

  useEffect(() => {
    const fetchPlantData = async () => {
      try {
        const response = await fetch(apiPlantCall);
        if (!response.ok) {
          throw new Error('Failed to fetch plant data');
        }
        const data = await response.json();
        console.log('API Response:', data); // Debugging the response structure

        // Check if the response contains an array or a single plant object
        if (data && Array.isArray(data.data)) {
          setPlantData(data.data); // If array of plants, set as usual
        } else if (data && data.data) {
          // If it's a single object, wrap it in an array
          setPlantData([data.data]);
        } else {
          throw new Error('Unexpected data structure');
        }
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
        console.error('Error fetching plant data:', errorMessage); // Log the error for debugging
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchPlantData();
  }, []);

  const handleLetterClick = (letter: string) => {
    setSelectedLetter(letter);
    setSelectedPlant(null); // Reset selected plant when switching letters
  };

  const handlePlantClick = (plant: IPlant) => {
    setSelectedPlant(plant);
  };

  const filteredPlants = plantData.filter(plant =>
    selectedLetter ? plant.name.startsWith(selectedLetter) : false
  );

  console.log('Filtered Plants:', filteredPlants); // Debugging filtered plants

  return (
    <div className="w-full flex flex-col items-center">
      
      <div className="flex flex-row gap-2 pb-3">
        <Link to={'/create-plant'} className="px-4 py-2 bg-blue-500 text-white rounded">Create Plant</Link>
      </div>
      {/* Alphabet row */}
      <div className="flex gap-2 mb-4">
        {alphabet.map((letter) => (
          <button
            key={letter}
            className={`px-4 py-2 font-bold ${selectedLetter === letter ? 'bg-blue-500 text-white' : 'bg-gray-300'} rounded`}
            onClick={() => handleLetterClick(letter)}
          >
            {letter}
          </button>
        ))}
      </div>

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
                    onClick={() => handlePlantClick(plant)}
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
