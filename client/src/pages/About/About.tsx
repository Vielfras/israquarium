import { useTranslation } from 'react-i18next';
import { DirectionProvider } from '../../context/ReadingDirectionContext';

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="flex justify-center items-center py-4">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 max-w-4xl w-full">
        <h1 className="text-5xl font-extrabold text-center text-blue-600 dark:text-blue-400 mb-8">
          {t('AboutPage.title')}
        </h1>

        <DirectionProvider>
          <div className="space-y-8">
            <section>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
                {t('AboutPage.introduction')}
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-4 border-b border-gray-300 dark:border-gray-700 pb-2">
                {t('AboutPage.missionTitle')}
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                {t('AboutPage.missionDescription')}
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-4 border-b border-gray-300 dark:border-gray-700 pb-2">
                {t('AboutPage.offerTitle')}
              </h2>
              <ul className="list-disc list-inside text-lg text-gray-700 dark:text-gray-300 ml-4 space-y-2">
                <li>{t('AboutPage.offerList.item1')}</li>
                <li>{t('AboutPage.offerList.item2')}</li>
                <li>{t('AboutPage.offerList.item3')}</li>
                <li>{t('AboutPage.offerList.item4')}</li>
              </ul>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mt-6">
                {t('AboutPage.offerDescription')}
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-4 border-b border-gray-300 dark:border-gray-700 pb-2">
                {t('AboutPage.globalTitle')}
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
                {t('AboutPage.globalDescription1')}
              </p>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                {t('AboutPage.globalDescription2')}
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-4 border-b border-gray-300 dark:border-gray-700 pb-2">
                {t('AboutPage.whyChooseUsTitle')}
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                {t('AboutPage.whyChooseUsDescription1')}
              </p>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mt-4">
                {t('AboutPage.whyChooseUsDescription2')}
              </p>
            </section>
          </div>
        </DirectionProvider>
      </div>
    </div>
  );
}
