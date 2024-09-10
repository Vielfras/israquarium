import { IPlant } from "../../../interfaces/IPlant";

interface PlantMiniCardProps {
  plant: IPlant;
  onClick: () => void;
}

export default function PlantMiniCard({ plant, onClick }: PlantMiniCardProps) {
  return (
    <div
      className="border p-4 flex flex-col items-center cursor-pointer hover:shadow-lg transition-shadow"
      onClick={onClick}
    >
      <h4 className="font-bold mb-2">{plant.name}</h4>
      {plant.images.length > 0 && (
        <img
          src={plant.images[0].src}
          alt={plant.images[0].alt}
          className="w-full h-32 object-cover mb-2"
        />
      )}
    </div>
  );
}
