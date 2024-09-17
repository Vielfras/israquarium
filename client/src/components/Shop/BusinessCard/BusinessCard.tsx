// BusinessCard.tsx

import { useState } from 'react';
import { AiOutlineLike } from 'react-icons/ai';
import { IBusinessCard } from '../../../interfaces/IBusinessCard';
import { doToggleCardLike } from '../../../services/CardServices';

interface IBusinessCardProps {
  userId: string;
  card: IBusinessCard;
  goToCardDetails: (cardId: string) => void;
}

export default function BusinessCard({ userId, card, goToCardDetails }: IBusinessCardProps) {
  const [localCard, setLocalCard] = useState<IBusinessCard | null>(card);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLikeToggle = async () => {
    setIsLoading(true);
    const { error, result } = await doToggleCardLike(card._id);
    if (error) {
      setError(error);
      setIsLoading(false);
    } else {
      setLocalCard(result);
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden text-center">
      <div className="font-semibold text-lg py-2">{localCard?.title}</div>
      <img className="w-full h-56 object-cover"
        src={localCard?.image.src} alt={localCard?.image.alt}
      />
      <div className="p-4">
        <h5 className="text-xl font-medium mb-2">{localCard?.subtitle}</h5>
        <p className="text-gray-700">{localCard?.description}</p>
        <button onClick={() => goToCardDetails(card._id)}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg"
        >
          Go to card
        </button>
      </div>
      <div onClick={handleLikeToggle}
        className="bg-gray-100 py-2 text-gray-600 flex justify-center items-center gap-2 cursor-pointer"
      >
        {localCard?.likes.length} <AiOutlineLike size={18} className={`${localCard?.likes.includes(userId) ? 'text-blue-500' : ''}`} />
      </div>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
}
