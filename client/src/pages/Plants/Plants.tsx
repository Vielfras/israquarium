import './Plants.scss';
import { DirectionProvider } from '../../context/ReadingDirectionContext';
import { useEffect, useState } from 'react';
import { apiBase } from '../../config';
import PlantCard from '../../components/Plant/PlantCard/PlantCard';
import { IPlant } from '../../interfaces/IPlant';
import { Link } from 'react-router-dom';
import Spinner from '../../components/Misc/Spinner/Spinner';

const apiPlantCall = `${apiBase}/api/plant`;

export default function Plants() {
  const [plantData, setPlantData] = useState<IPlant | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlantData = async () => {
      try {
        const response = await fetch(apiPlantCall);
        if (!response.ok) {
          throw new Error('Failed to fetch plant data');
        }
        const data = await response.json();
        setPlantData(data.data);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchPlantData();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row gap-2 pb-3">
        <Link to={'/create-plant'} className="px-4 py-2 bg-blue-500 text-white rounded">Create Plant</Link>
      </div>

      {loading && <Spinner message="Loading plants..." />}

      {error && <div className="text-red-500">Error: {error}</div>}

      {!loading && !error && (
        <DirectionProvider>
          {plantData && <PlantCard plantData={plantData} />}
        </DirectionProvider>
      )}
    </div>
  );
}
