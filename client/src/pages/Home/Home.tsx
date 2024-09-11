import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { doGetRandomFish } from '../../services/FishServices'; 
import { IFish } from '../../interfaces/IFish'; 
import FishCard from '../../components/Fish/FishCard/FishCard';
import { DirectionProvider } from '../../context/ReadingDirectionContext';

export default function HomePage() {
  const { t } = useTranslation();
  const [randomFish, setRandomFish] = useState<IFish | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRandomFish = async () => {
      const result = await doGetRandomFish();
      if (result.error) {
        setError(result.error);
      } else {
        setRandomFish(result.result);
      }
      setLoading(false);
    };

    fetchRandomFish();
  }, []);

  return (
    
    <div className="flex justify-center items-center py-8">

      <DirectionProvider>
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 max-w-6xl w-full">
        <h1 className="text-5xl font-extrabold text-center text-blue-600 dark:text-blue-400 mb-8">
          {t('HomePage.welcomeTitle')}
        </h1>

        <main className="space-y-8">
          <section>
            <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300">
              {t('HomePage.welcomeDescription')}
            </p>
          </section>

          <section className='text-center '>
            <h2 className="border-b border-gray-300 dark:border-gray-700 pb-2 text-center text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
              {t('HomePage.highlightsTitle')}
            </h2>
            <ul className="text-lg text-gray-700 dark:text-gray-300 space-y-2">
              <li>{t('HomePage.highlights.item1')}</li>
              <li>{t('HomePage.highlights.item2')}</li>
              <li>{t('HomePage.highlights.item3')}</li>
            </ul>
          </section>

          <section className="text-center">
            <Link
              to="/about"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition mt-2 mb-4 "
            >
              {t('HomePage.ctaButton')}
            </Link>
          </section>

          <section>
            <h2 className="border-t border-gray-300 dark:border-gray-700 pb-2 text-3xl font-semibold text-center text-blue-600 dark:text-blue-400 pt-4">
              {t('HomePage.randomFishTitle')}
            </h2>

            {loading && <p className="text-center text-lg text-gray-600 dark:text-gray-300">{t('HomePage.loadingFish')}</p>}
            {error && <p className="text-center text-lg text-red-500">{error}</p>}

            {randomFish && <FishCard fishData={randomFish} />}
          </section>
        </main>
      </div>
      </DirectionProvider>

    </div>
  );
}
