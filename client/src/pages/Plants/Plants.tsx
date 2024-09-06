import './Plants.scss';

import { DirectionProvider } from '../../context/ReadingDirectionContext';
import { useEffect, useState } from 'react';
import { apiBase } from '../../config';
import PlantCard from '../../components/Plant/PlantCard/PlantCard';
import { IPlant } from '../../interfaces/IPlant';


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
        setLoading(false);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
        setError(errorMessage);
        setLoading(false);
      }
    };

    fetchPlantData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <DirectionProvider>
        {plantData && <PlantCard plantData={plantData} />}
      </DirectionProvider>
    </div>
  );
}
