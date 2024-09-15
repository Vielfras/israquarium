// NotFound.tsx

import { useTranslation } from 'react-i18next';
import FishSVG from '../../components/Misc/FishSVG/FishSVG';
import UseMediaQuery from '../../hooks/UseMediaQuery';
import { BubbleAnimation, FishAnimation } from '../../interfaces/IAnimations';
import { useMemo } from 'react';
import { DirectionProvider } from '../../context/ReadingDirectionContext';
import { Link } from 'react-router-dom';

function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomFloat(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

function randomChoice<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default function NotFound() {
  const { t } = useTranslation();

  const isLargeScreen = UseMediaQuery('(min-width: 1024px)');
  const isMediumScreen = UseMediaQuery('(min-width: 640px) and (max-width: 1023px)');

  const NUM_FISH = isLargeScreen ? 6 : isMediumScreen ? 4 : 2;
  const NUM_BUBBLES = isLargeScreen ? 25 : isMediumScreen ? 15 : 10;

  const fishData: FishAnimation[] = useMemo(() => {
    return Array.from({ length: NUM_FISH }, (_, index) => {
      const direction = randomChoice(['left', 'right'] as const);
      return {
        id: index,
        direction,
        size: randomFloat(0.8, 1.2),
        initialX: randomInt(-10, 110),
        initialY: randomInt(10, 90),
        duration: randomFloat(15, 25),
        delay: randomFloat(0, 1),
      };
    });
  }, [NUM_FISH]);

  const bubbleData: BubbleAnimation[] = useMemo(() => {
    return Array.from({ length: NUM_BUBBLES }, (_, index) => ({
      id: index,
      size: randomInt(5, 15),
      initialX: randomInt(1, 100),
      initialY: randomInt(1, 100),
      duration: randomFloat(4, 8),
      delay: randomFloat(1, 8),
    }));
  }, [NUM_BUBBLES]);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden ">

      {/* Dynamic Fish Animations */}
      {fishData.map(fish => (
        <div key={fish.id}
          className={`absolute ${fish.direction === 'left' ? 'animate-swim' : 'animate-swim-reverse'}`}
          style={{
            left: `${fish.initialX}%`,
            bottom: `${fish.initialY}%`,
            transform: `scale(${fish.size})`,
            animationDuration: `${fish.duration}s`,
            animationDelay: `${fish.delay}s`,
          }}
        >
          <FishSVG direction={fish.direction} className="hover:scale-110" />
        </div>
      ))}

      {/* Floating Text */}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-center">
        <h1 className="text-6xl font-bold text-blue-600 dark:text-blue-400 animate-float">
          404
        </h1>
        <DirectionProvider>
          <p className="text-xl mt-4 text-gray-700 dark:text-gray-300 animate-float">
            {t('NotFound.message')}
          </p>
          <Link to="/"
            className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full animate-float"
          >
            {t('NotFound.goHome')}
          </Link>
        </DirectionProvider>
      </div>

      {/* Dynamic Bubble Animations */}
      {bubbleData.map(bubble => (
        <div key={bubble.id}
          className="absolute animate-bubble"
          style={{
            left: `${bubble.initialX}%`,
            bottom: `${bubble.initialY}%`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            backgroundColor: 'rgba(255, 255, 255, 0.6)',
            borderRadius: '50%',
            animationDuration: `${bubble.duration}s`,
            animationDelay: `${bubble.delay}s`,
          }}
        ></div>
      ))}
    </div>
  );
}
