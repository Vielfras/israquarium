// FishMiniCard.tsx

import { apiBase } from "../../../config";
import { IFish } from "../../../interfaces/IFish";

interface FishMiniCardProps {
  fish: IFish;
  onClick: () => void;
}

export default function FishMiniCard({ fish, onClick }: FishMiniCardProps) {
  const hasImages = fish.images && fish.images.length > 0;

  return (
    <div
      className="border p-1 flex flex-col items-center cursor-pointer bg-green-50 rounded-lg"
      onClick={onClick}
    >
      <h3 className="text-xl font-extrabold text-green-900 mb-2">
        {fish.name}
      </h3>
      {hasImages ? (
        <img
          className="w-full h-32 object-cover rounded"
          src={`${apiBase}/api/fish/image/${fish._id}/${fish.images[0].src}`}
          alt={fish.images[0].alt || 'Fish Image'}
        />
      ) : (
        <div className="w-full h-32 flex items-center justify-center bg-gray-200 rounded">
          <span>No Image Available</span>
        </div>
      )}
    </div>
  );
}

