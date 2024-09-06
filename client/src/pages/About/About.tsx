import { DirectionProvider } from '../../context/ReadingDirectionContext';
import './About.scss';

import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-centertext-gray-900 dark:text-white">
      <h1 className="text-4xl font-bold m-6">{t('AboutPage.title')}</h1>

      <DirectionProvider>
        <div className="max-w-4xl mx-auto p-6">
          <p className="text-lg mb-4">{t('AboutPage.description1')}</p>
          <p className="text-lg mb-4">{t('AboutPage.description2')}</p>
          <p className="text-lg">{t('AboutPage.description3')}</p>
        </div>
      </DirectionProvider>
    </div>
  );
}
