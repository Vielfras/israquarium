// FishIndexes.tsx

import { useEffect, useState } from 'react';
import { apiBase } from '../../config';
import { DirectionProvider } from '../../context/ReadingDirectionContext';
import FishCard from '../../components/Fish/FishCard/FishCard';
import FishMiniCard from '../../components/Fish/FishMiniCard/FishMiniCard';
import FishIndex from '../../components/Fish/FishIndex/FishIndex';
import { IFish, IFishIndex } from '../../interfaces/IFish';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Spinner from '../../components/Misc/Spinner/Spinner';
import AlphabetRow from '../../components/Misc/AlphabetRow/AlphabetRow';
import FishIndexCard from '../../components/Fish/FishIndexCard/FishIndexCard';

const apiFishCall = `${apiBase}/api/fish`;
const apiFishIndexCall = `${apiBase}/api/fishIndex`;

export default function FishIndexes() {
  const { fishIndexName } = useParams<{ fishIndexName?: string }>();
  const [fishIndexData, setFishIndexData] = useState<IFishIndex[] | null>(null);
  const [fishData, setFishData] = useState<IFish[] | null>(null);
  const [loading, setLoading] = useState(false); // Set initial loading to false
  const [error, setError] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<IFishIndex | null>(null);
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
  const [expandedFishId, setExpandedFishId] = useState<string | null>(null);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const currentLang = (i18n.language as 'en' | 'he' | 'ru') || 'en';

  useEffect(() => {
    const fetchFishIndexData = async () => {
      setLoading(true); // Start loading
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
        setLoading(false); // End loading
      }
    };

    fetchFishIndexData();
  }, [t]);

  useEffect(() => {
    if (fishIndexData && fishIndexName) {
      const index = fishIndexData.find(
        (i) =>
          i.english.toLowerCase() === fishIndexName.toLowerCase() ||
          i.hebrew.toLowerCase() === fishIndexName.toLowerCase() ||
          i.russian.toLowerCase() === fishIndexName.toLowerCase()
      );
      if (index) {
        handleIndexClick(index);
      }
    }
  }, [fishIndexData, fishIndexName]);

  const handleIndexClick = (index: IFishIndex) => {
    setSelectedIndex(index);
    setSelectedLetter(null);
    setExpandedFishId(null);
    navigate(`/fish-index/${encodeURIComponent(
      currentLang === 'en' ? index.english : currentLang === 'he' ? index.hebrew : index.russian
    )}`);
  };

  const handleLetterClick = (letter: string) => {
    setSelectedLetter(letter);
    setExpandedFishId(null);
  };

  const handleFishCardClick = (fishId: string) => {
    setExpandedFishId(fishId === expandedFishId ? null : fishId);
  };

  useEffect(() => {
    if (!selectedLetter || !selectedIndex) return;

    const fetchFishDataByLetter = async () => {
      setLoading(true);
      setError(null);
      setFishData([]);

      try {
        const response = await fetch(`${apiFishCall}?index=${selectedIndex._id}&letter=${selectedLetter}`);
        if (!response.ok) {
          throw new Error(t('FishPage.errorFetchingData'));
        }
        const data = await response.json();
        if (data.data && data.data.length > 0) {
          setFishData(data.data);
        } else {
          setError(`${t('FishPage.letterEmpty')} '${selectedLetter}'.`);
        }
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : t('FishPage.unknownError');
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchFishDataByLetter();
  }, [selectedLetter, selectedIndex, t]);

  return (
    <div className="flex flex-col items-center">
      {loading && <Spinner message={t('FishPage.loadingMessage')} />}

      {error && (
        <div className="text-red-500">
          {error}
        </div>
      )}

      {/* Fish Index Buttons */}
      {!loading && !error && fishIndexData && (
        <div
          className={`w-full ${
            selectedIndex
              ? 'flex flex-row flex-wrap gap-2 pb-2 justify-center'
              : 'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 pb-4'
          }`}
        >
          {fishIndexData.map((index) => {
            const isSelected = selectedIndex && selectedIndex._id === index._id;
            const buttonSizeClass = selectedIndex ? 'w-24 h-24' : 'w-48 h-48';
            const imageSize = selectedIndex ? 'small' : 'large';
            const displayName =
              currentLang === 'en'
                ? index.english
                : currentLang === 'he'
                ? index.hebrew
                : index.russian;

            return (
              <button
                key={index._id}
                className={`${buttonSizeClass} flex flex-col items-center justify-center rounded-lg font-bold ${
                  isSelected ? 'text-white' : 'text-gray-800 dark:text-white'
                }`}
                onClick={() => {
                  handleIndexClick(index);
                }}
              >
                <FishIndex fishIndex={index} size={imageSize} />
                <div className="text-center mt-1 text-sm">
                  {displayName}
                </div>
              </button>
            );
          })}
        </div>
      )}

      {/* Alphabet Row */}
      {selectedIndex && (
        <AlphabetRow selectedLetter={selectedLetter} onLetterClick={handleLetterClick} />
      )}

      {/* Loading and Error Handling */}
      {loading && <Spinner message={t('FishPage.loadingMessage')} />}
      {error && (
        <div className="text-red-500">
          {error}
        </div>
      )}

      {/* Mini Fish Cards */}
      {!loading && selectedLetter && fishData && fishData.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
          {fishData.map((fish) => (
            <div key={fish._id}>
              <FishMiniCard fish={fish} onClick={() => handleFishCardClick(fish._id)} />
              {expandedFishId === fish._id && (
                <DirectionProvider>
                  <FishCard fishData={fish} />
                </DirectionProvider>
              )}
            </div>
          ))}
        </div>
      )}

      {/* No Fish Data Message */}
      {!loading && selectedLetter && (!fishData || fishData.length === 0) && (
        <p>{`${t('FishPage.letterEmpty')} '${selectedLetter}'.`}</p>
      )}

      {/* Display FishIndexCard */}
      {selectedIndex && !selectedLetter && (
        <FishIndexCard fishIndexKey={selectedIndex.english} />
      )}

      {/* Prompt to Select a Letter */}
      {!selectedLetter && !loading && !error && selectedIndex && (
        <h1 className="mt-6 text-4xl font-extrabold text-center text-blue-600 dark:text-blue-400">
          {t('FishPage.selectLetter')}
        </h1>
      )}
    </div>
  );
}
