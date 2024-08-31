// ServerTest.tsx

import i18next from 'i18next';

import { apiBase } from '../../config'

import { useEffect, useState } from 'react';
import { IFish, IFishIndex } from '../../interfaces/IFish';
import { IPlant } from '../../interfaces/IPlant';
import { DirectionProvider } from '../../context/ReadingDirectionContext';
import FishIndex from '../../components/Fish/FishIndex/FishIndex';
import FishCard from '../../components/Fish/FishCard/FishCard';
import PlantCard from '../../components/Plant/PlantCard/PlantCard';

const changeLanguage = (lng: string) => {
  i18next.changeLanguage(lng);
};

const apiFishCall = `${apiBase}/api/fish`;
const apiFishIndexCall = `${apiBase}/api/fishIndex`;
const apiPlantCall = `${apiBase}/api/plant`;

export default function ServerTest() {
  const [fishData, setFishData] = useState<IFish | null>(null);
  const [fishIndexData, setFishIndexData] = useState<IFishIndex[] | null>(null);
  const [plantData, setPlantData] = useState<IPlant | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFishIndexData = async () => {
      try {
        const response = await fetch(apiFishIndexCall);
        if (!response.ok) {
          throw new Error('Failed to fetch fish index data');
        }
        const data = await response.json();
        setFishIndexData(data.data);
        setLoading(false);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
        setError(errorMessage);
        setLoading(false);
      }
    };

    const fetchFishData = async () => {
      try {
        const response = await fetch(apiFishCall);
        if (!response.ok) {
          throw new Error('Failed to fetch fish data');
        }
        const data = await response.json();
        setFishData(data.data);
        setLoading(false);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
        setError(errorMessage);
        setLoading(false);
      }
    };

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

    fetchFishIndexData();
    fetchFishData();
    fetchPlantData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const calculateLastRowColSpan = (totalItems: number, itemsPerRow: number) => {
    const lastRowItemsCount = totalItems % itemsPerRow;
    return lastRowItemsCount === 0 ? itemsPerRow : lastRowItemsCount;
  };

  const fishIndexLength = fishIndexData ? fishIndexData.length : 0;

  return (
    <DirectionProvider>
      <div className="min-h-screen bg-blue-200 flex flex-col items-center justify-center p-6">
        <div className="flex flex-row gap-2 pb-3">
          <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={() => changeLanguage('he')}>Hebrew</button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={() => changeLanguage('ru')}>Russian</button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={() => changeLanguage('en')}>English</button>
        </div>

        <div className="grid place-items-center grid-cols-2 sm:grid-cols-4 gap-2">
          {fishIndexData && fishIndexData.map((fishIndex, index) => {
            const itemsPerRow = window.innerWidth >= 640 ? 4 : 1;
            const lastRowColSpan = calculateLastRowColSpan(fishIndexLength, itemsPerRow);
            return (
              <div
                key={fishIndex._id}
                className={`${index >= fishIndexLength - lastRowColSpan ? `col-span-${lastRowColSpan}` : ""}`}
              >
                <FishIndex fishIndex={fishIndex} />
              </div>
            );
          })}
        </div>

        <br></br>

        {fishData && <FishCard fishData={fishData} />}

        <br></br>

        {plantData && <PlantCard plantData={plantData} />}
      </div>
    </DirectionProvider>
  );
}

