import { apiBase } from "../../../config";
import { IPlant } from "../../../interfaces/IPlant";

interface PlantMiniCardProps {
  plant: IPlant;
  onClick: () => void;
}

export default function PlantMiniCard({ plant, onClick }: PlantMiniCardProps) {
  return (
    <div className="border p-1 flex flex-col items-center cursor-pointer bg-green-50 rounded-lg"
      onClick={onClick}
    >
      <h4 className="text-xl font-extrabold text-green-900 mb-2">{plant.name}</h4>
      
      {/* Ensure plant images are displayed correctly */}
      {plant.images.length > 0 && (
        <img className="w-full h-32 object-cover mb-2"
          src={`${apiBase}/api/plant/image/${plant._id}/${plant.images[0].src}`}
          alt={plant.images[0].alt}
        />
      )}
    </div>
  );
}
