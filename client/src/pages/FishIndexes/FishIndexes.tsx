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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<IFishIndex | null>(null);
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
  const [expandedFishId, setExpandedFishId] = useState<string | null>(null);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const currentLang = i18n.language as 'en' | 'he' | 'ru';

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

  const handleIndexClick = async (index: IFishIndex) => {
    setSelectedIndex(index);
    setSelectedLetter(null);
    setExpandedFishId(null);
    setLoading(true);

    try {
      const response = await fetch(`${apiFishCall}?index=${index._id}`);
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

  const handleLetterClick = (letter: string) => {
    setSelectedLetter(letter);
    setExpandedFishId(null);
  };

  const handleFishCardClick = (fishId: string) => {
    setExpandedFishId(fishId === expandedFishId ? null : fishId);
  };

  return (
    <div className="flex flex-col items-center">

      {loading && <Spinner message={t('FishPage.loadingMessage')} />}

      {error && (
        <div className="text-red-500">
          {t('FishPage.errorFetchingIndex')}
          <br />
          Error: {error}
        </div>
      )}

      {!loading && !error && fishIndexData && (
        <div className={`w-full ${selectedIndex ? 'flex flex-row gap-4 overflow-x-auto pb-4' : 'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 pb-4'}`}>
          {fishIndexData.map((index) => (
            <button key={index._id}
              className={`px-4 py-2 rounded-lg font-bold ${selectedIndex && selectedIndex._id === index._id ? 'text-white' : ' text-gray-800 dark:text-white'}`}
              onClick={() => {
                setSelectedIndex(index);
                const indexName =
                  currentLang === 'en' ? index.english : currentLang === 'he' ? index.hebrew : index.russian;
                navigate(`/fish-index/${encodeURIComponent(indexName)}`);
              }}>
              <FishIndex fishIndex={index} />
              <div className="text-center mt-2">
                {currentLang === 'en' ? index.english : currentLang === 'he' ? index.hebrew : index.russian}
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Alphabet Row */}
      {selectedIndex && (
        <AlphabetRow selectedLetter={selectedLetter} onLetterClick={handleLetterClick} />
      )}

      {/* Mini Fish Cards */}
      {selectedLetter && fishData && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
          {fishData.filter((fish) => fish.name.startsWith(selectedLetter))
            .map((fish) => (
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

      {/* Display FishIndexCard */}
      {selectedIndex && (
        <FishIndexCard fishIndexKey={selectedIndex.english} />
      )}
    </div>
  );
}
