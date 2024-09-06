import './Fish.scss';

import { useEffect, useState } from 'react';
import { apiBase } from '../../config'
import { DirectionProvider } from '../../context/ReadingDirectionContext';
import FishCard from '../../components/Fish/FishCard/FishCard';
import { IFish, IFishIndex } from '../../interfaces/IFish';
import FishIndex from '../../components/Fish/FishIndex/FishIndex';

const apiFishCall = `${apiBase}/api/fish`;
const apiFishIndexCall = `${apiBase}/api/fishIndex`;

export default function Fish() {
  const [fishData, setFishData] = useState<IFish | null>(null);
  const [fishIndexData, setFishIndexData] = useState<IFishIndex[] | null>(null);
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

    fetchFishIndexData();
    fetchFishData();
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
    <div className="flex flex-col items-center justify-center h-full text-center">

      <div className="grid place-items-center grid-cols-2 sm:grid-cols-4 gap-2">
        {fishIndexData && fishIndexData.map((fishIndex, index) => {
          const itemsPerRow = window.innerWidth >= 640 ? 4 : 1;
          const lastRowColSpan = calculateLastRowColSpan(fishIndexLength, itemsPerRow);
          return (
            <div key={fishIndex._id}
              className={`${index >= fishIndexLength - lastRowColSpan ? `col-span-${lastRowColSpan}` : ""}`}>
              <FishIndex fishIndex={fishIndex} />
            </div>
          );
        })}
      </div>

      <br></br>

      <DirectionProvider>
        {fishData && <FishCard fishData={fishData} />}
      </DirectionProvider>
    </div>
  );
}
