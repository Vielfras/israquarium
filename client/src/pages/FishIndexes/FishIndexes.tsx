import { useEffect, useState } from 'react';
import { apiBase } from '../../config';
import { DirectionProvider } from '../../context/ReadingDirectionContext';
import FishCard from '../../components/Fish/FishCard/FishCard';
import { IFish, IFishIndex } from '../../interfaces/IFish';
import FishIndex from '../../components/Fish/FishIndex/FishIndex';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Spinner from '../../components/Misc/Spinner/Spinner';

const apiFishCall = `${apiBase}/api/fish`;
const apiFishIndexCall = `${apiBase}/api/fishIndex`;

export default function FishIndexes() {
  const [fishData, setFishData] = useState<IFish | null>(null);
  const [fishIndexData, setFishIndexData] = useState<IFishIndex[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchFishIndexData = async () => {
      try {
        const response = await fetch(apiFishIndexCall);
        if (!response.ok) {
          throw new Error(t('FishPage.errorFetchingIndex'));
        }
        const data = await response.json();
        setFishIndexData(data.data);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : t('FishPage.unknownError');
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    const fetchFishData = async () => {
      try {
        const response = await fetch(apiFishCall);
        if (!response.ok) {
          throw new Error(t('FishPage.errorFetchingData'));
        }
        const data = await response.json();
        setFishData(data.data);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : t('FishPage.unknownError');
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchFishIndexData();
    fetchFishData();
  }, []);

  const calculateLastRowColSpan = (totalItems: number, itemsPerRow: number) => {
    const lastRowItemsCount = totalItems % itemsPerRow;
    return lastRowItemsCount === 0 ? itemsPerRow : lastRowItemsCount;
  };

  const fishIndexLength = fishIndexData ? fishIndexData.length : 0;

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row gap-2 pb-3">
        <Link to={'/create-fish'} className="px-4 py-2 bg-blue-500 text-white rounded">
          Create Fish
        </Link>
      </div>

      {loading && <Spinner message={t('FishPage.loadingMessage')} />}

      {error && (
        <div className="text-red-500">Error fetching fish data.<br />Error: {error}</div>
      )}

      {!loading && !error && (
        <>
          <div className="grid place-items-center grid-cols-2 sm:grid-cols-4 gap-2">
            {fishIndexData && fishIndexData.map((fishIndex, index) => {
              const itemsPerRow = window.innerWidth >= 640 ? 4 : 1;
              const lastRowColSpan = calculateLastRowColSpan(fishIndexLength, itemsPerRow);
              return (
                <div key={fishIndex._id}
                  className={`${index >= fishIndexLength - lastRowColSpan ? `col-span-${lastRowColSpan}` : ''}`}>
                  <FishIndex fishIndex={fishIndex} />
                </div>
              );
            })}
          </div>

          <br />

          <DirectionProvider>
            {fishData && <FishCard fishData={fishData} />}
          </DirectionProvider>
        </>
      )}
    </div>
  );
}