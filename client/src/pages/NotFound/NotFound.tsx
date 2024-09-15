// NotFound.tsx

import { useTranslation } from 'react-i18next';
import FishSVG from '../../components/Misc/FishSVG/FishSVG';
import { DirectionProvider } from '../../context/ReadingDirectionContext';

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen overflow-hidden">

      {/* Floating Text */}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-center">
        <h1 className="text-6xl font-bold text-blue-600 dark:text-blue-400 animate-float">
          404
        </h1>
        <DirectionProvider>

          <p className="text-xl mt-4 text-gray-700 dark:text-gray-300 animate-float">
            {t('NotFound.message')}
          </p>
          <a
            href="/"
            className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors animate-float"
          >
            {t('NotFound.goHome')}
          </a>
        </DirectionProvider>
      </div>

      {/* Swimming Fish 1 */}
      <div className="absolute bottom-0 left-0 w-24 h-auto animate-swim">
        <FishSVG />
      </div>

      {/* Swimming Fish 2 */}
      <div className="absolute bottom-20 left-1/3 w-16 h-auto animate-swim-reverse">
        <FishSVG />
      </div>

      {/* Swimming Fish 3 */}
      <div className="absolute bottom-10 right-0 w-24 h-auto animate-swim">
        <FishSVG />
      </div>

      {/* Swimming Fish 4 */}
      <div className="absolute bottom-30 right-1/4 w-16 h-auto animate-swim-reverse">
        <FishSVG />
      </div>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <div className="w-4 h-4 bg-white bg-opacity-50 rounded-full mb-2 animate-bubble"></div>
        <div className="w-3 h-3 bg-white bg-opacity-50 rounded-full mb-2 animate-bubble delay-1s"></div>
        <div className="w-2 h-2 bg-white bg-opacity-50 rounded-full mb-2 animate-bubble delay-2s"></div>
      </div>
    </div>
  );
}
