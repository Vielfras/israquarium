// FishIndexes.tsx

import { useEffect, useState, useCallback } from 'react';
import { apiBase } from '../../config';
import { DirectionProvider } from '../../context/ReadingDirectionContext';
import FishCard from '../../components/Fish/FishCard/FishCard';
import FishMiniCard from '../../components/Fish/FishMiniCard/FishMiniCard';
import FishIndexImage from '../../components/Fish/FishIndexImage/FishIndexImage';
import { IFish, IFishIndex } from '../../interfaces/IFish';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Spinner from '../../components/Misc/Spinner/Spinner';
import AlphabetRow from '../../components/Misc/AlphabetRow/AlphabetRow';
import FishIndexCard from '../../components/Fish/FishIndexCard/FishIndexCard';
import { doGetFishByIndexAndLetter, doGetFishById } from '../../services/FishServices';
import UseMediaQuery from '../../hooks/UseMediaQuery';

const apiFishIndexCall = `${apiBase}/api/fishIndex`;

export default function FishIndexes() {
  const { fishIndexName } = useParams<{ fishIndexName?: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const currentLang = (i18n.language as 'en' | 'he' | 'ru') || 'en';

  const [fishIndexData, setFishIndexData] = useState<IFishIndex[] | null>(null);
  const [fishData, setFishData] = useState<IFish[] | null>(null);
  const [loading, setLoading] = useState(false);

  const [errorFishIndex, setErrorFishIndex] = useState<string | null>(null);
  const [errorFishData, setErrorFishData] = useState<string | null>(null);

  const [isIndexCollapsed, setIsIndexCollapsed] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<IFishIndex | null>(null);
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
  const [expandedFishId, setExpandedFishId] = useState<string | null>(null);

  const isSmallScreen = UseMediaQuery('(max-width: 640px)');

  const queryParams = new URLSearchParams(location.search);
  const fishIdFromURL = queryParams.get('fishId');

  /**
   * Handler to select a fish index.
   * Navigates to the selected index without any fishId.
   */
  const handleIndexClick = useCallback(
    (index: IFishIndex) => {
      setSelectedIndex(index);
      setSelectedLetter(null);
      setExpandedFishId(null);
      setErrorFishData(null);

      const newSearchParams = new URLSearchParams(location.search);
      newSearchParams.delete('fishId');
      navigate(`/fish-index/${encodeURIComponent(index.english)}?${newSearchParams.toString()}`);
    },
    [navigate, location.search]
  );

  /**
   * Handler to select a letter.
   */
  const handleLetterClick = useCallback(
    (letter: string) => {
      setSelectedLetter(letter);
      setExpandedFishId(null);
      setErrorFishData(null);
    },
    []
  );

  /**
   * Handler to select a fish.
   * Navigates to the current index with the selected fishId.
   */
  const handleFishCardClick = useCallback(
    (fishId: string) => {
      setExpandedFishId(fishId);
      setErrorFishData(null);

      if (selectedIndex) {
        navigate(`/fish-index/${encodeURIComponent(selectedIndex.english)}?fishId=${fishId}`);
      }
    },
    [navigate, selectedIndex]
  );

  /**
   * Effect to handle screen size changes.
   * Collapses the index if the screen is small.
   */
  useEffect(() => {
    if (!isSmallScreen) {
      setIsIndexCollapsed(false);
    }
  }, [isSmallScreen]);

  /**
   * Effect to fetch fish index data on component mount.
   */
  useEffect(() => {
    const fetchFishIndexData = async () => {
      setLoading(true);
      setErrorFishIndex(null);
      try {
        const response = await fetch(apiFishIndexCall);
        if (!response.ok) {
          throw new Error(t('FishPage.errorFetchingIndex'));
        }
        const data = await response.json();
        setFishIndexData(data.data);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : t('FishPage.unknownError');
        setErrorFishIndex(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchFishIndexData();
  }, [t]);

  /**
   * Effect to handle fishIndexName and preserve fishId if present.
   * Selects the corresponding index without navigating if fishId is present.
   */
  useEffect(() => {
    if (fishIndexData && fishIndexName) {
      const index = fishIndexData.find(
        (i) =>
          i.english.toLowerCase() === fishIndexName.toLowerCase() ||
          i.hebrew.toLowerCase() === fishIndexName.toLowerCase() ||
          i.russian.toLowerCase() === fishIndexName.toLowerCase()
      );
      if (index) {
        if (!selectedIndex || selectedIndex._id !== index._id) {
          if (!fishIdFromURL) {
            handleIndexClick(index);
          } else {
            setSelectedIndex(index);
            setSelectedLetter(null);
            setExpandedFishId(null);
          }
        }
      } else {
        setErrorFishIndex(t('FishPage.invalidIndex'));
      }
    }
  }, [
    fishIndexData,
    fishIndexName,
    t,
    handleIndexClick,
    selectedIndex,
    fishIdFromURL,
  ]);

  /**
   * Effect to handle fishId from URL.
   * Loads the specified fish and updates the state accordingly.
   */
  useEffect(() => {
    const loadFishById = async (fishId: string) => {
      setLoading(true);
      setErrorFishData(null);
      try {
        const { error, result } = await doGetFishById(fishId);
        if (error || !result) {
          throw new Error(t('FishPage.invalidFishId'));
        }

        const fishIndex = fishIndexData?.find((index) => result.fishIndices.includes(index._id));

        if (!fishIndex) {
          throw new Error(t('FishPage.indexNotFound'));
        }

        if (!selectedIndex || selectedIndex._id !== fishIndex._id) {
          setSelectedIndex(fishIndex);
        }

        const fishSpecies = result.species;

        const firstLetter = fishSpecies.charAt(0).toUpperCase();

        setSelectedLetter(firstLetter);

        setExpandedFishId(fishId);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : t('FishPage.unknownError');
        setErrorFishData(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    if (fishIdFromURL && fishIndexData) {
      loadFishById(fishIdFromURL);
    }
  }, [
    fishIdFromURL,
    fishIndexData,
    t,
    selectedIndex,
  ]);

  /**
   * Effect to fetch fish data based on selected letter and index.
   */
  useEffect(() => {
    if (!selectedLetter || !selectedIndex) return;

    const fetchFishDataByLetter = async () => {
      setLoading(true);
      setErrorFishData(null);
      setFishData([]);

      try {
        const { error: fetchError, result } = await doGetFishByIndexAndLetter(
          selectedIndex._id,
          selectedLetter
        );

        if (fetchError) {
          throw new Error(fetchError);
        }

        if (result && result.length > 0) {
          setFishData(result);
        } else {
          throw new Error(`${t('FishPage.letterEmpty')} '${selectedLetter}'.`);
        }
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : t('FishPage.unknownError');
        setErrorFishData(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchFishDataByLetter();
  }, [selectedLetter, selectedIndex, t]);

  const sortedFishIndexData = fishIndexData
    ? [...fishIndexData].sort((a, b) => {
      const nameA =
        currentLang === 'en'
          ? a.english
          : currentLang === 'he'
            ? a.hebrew
            : a.russian;
      const nameB =
        currentLang === 'en'
          ? b.english
          : currentLang === 'he'
            ? b.hebrew
            : b.russian;
      return nameA.localeCompare(nameB);
    })
    : null;

  return (
    <div className="flex flex-col items-center">
      {/* Loading Spinner */}
      {loading && <Spinner message={t('FishPage.loadingMessage')} />}

      {/* Error Message for Fish Index */}
      {errorFishIndex && <div className="text-red-500">{errorFishIndex}</div>}

      {/* Fish Index Buttons */}
      {!loading && !errorFishIndex && sortedFishIndexData && (
        <div className="w-full">
          {/* Collapse/Expand Button for small screens */}
          {isSmallScreen && selectedIndex && (
            <div className="flex justify-center mb-2">
              <button className="px-4 py-2 bg-blue-500 text-white rounded"
                onClick={() => setIsIndexCollapsed(!isIndexCollapsed)}
              >
                {isIndexCollapsed ? t('FishPage.showIndexes') : t('FishPage.hideIndexes')}
              </button>
            </div>
          )}

          {/* Index Buttons */}
          <div className={`${isIndexCollapsed && isSmallScreen ? 'hidden' : ''
              } ${selectedIndex
                ? 'flex flex-row flex-wrap gap-4 pb-2 justify-center'
                : 'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 pb-4 justify-items-center'
              }`}
          >
            {sortedFishIndexData.map((index) => {
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
                <button key={index._id}
                  className={`${buttonSizeClass} flex flex-col items-center justify-center rounded-lg font-bold ${isSelected
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-800 dark:text-white'
                    }`}
                  onClick={() => { handleIndexClick(index); }}
                  >
                  <FishIndexImage fishIndex={index} size={imageSize} />
                  <div className="text-center mt-1 text-sm">{displayName}</div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Alphabet Row */}
      {selectedIndex && (
        <AlphabetRow selectedLetter={selectedLetter} onLetterClick={handleLetterClick} />
      )}

      <DirectionProvider>
        {/* Error Message for Fish Data */}
        {errorFishData && <div className="text-red-500">{errorFishData}</div>}

        {/* Fish Card or Mini Fish Cards */}
        {!loading && selectedLetter && fishData && fishData.length > 0 && (
          expandedFishId ? (
            // Display only the FishCard of the selected fish
            <>
              {fishData.find((fish) => fish._id === expandedFishId) && (
                <FishCard fishData={fishData.find((fish) => fish._id === expandedFishId)!} />
              )}
            </>
          ) : (
            // Display the grid of FishMiniCards
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
              {fishData.map((fish) => (
                <div key={fish._id}>
                  <FishMiniCard fish={fish} onClick={() => handleFishCardClick(fish._id)} />
                </div>
              ))}
            </div>
          )
        )}

        {/* No Fish Data Message */}
        {!loading && selectedLetter && (!fishData || fishData.length === 0) && !errorFishData && (
          <p>{`${t('FishPage.letterEmpty')} '${selectedLetter}'.`}</p>
        )}

        {/* Prompt to Select a Letter */}
        {!selectedLetter && !loading && !errorFishIndex && selectedIndex && (
          <h1 className="my-4 text-3xl font-extrabold text-center text-blue-600 dark:text-blue-400">
            {t('FishPage.selectLetter')}
          </h1>
        )}
      </DirectionProvider>

      {/* Display FishIndexCard */}
      {selectedIndex && !selectedLetter && <FishIndexCard fishIndexKey={selectedIndex.english} />}
    </div>
  );
}
