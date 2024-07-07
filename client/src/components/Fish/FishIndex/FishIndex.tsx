import { IFishIndex } from "../../../interfaces/IFish";

interface IFishIndexProps {
  fishIndex: IFishIndex,
}

export default function FishIndex({ fishIndex }: IFishIndexProps) {
  const imageUrl = `http://127.0.0.1:3000/api/fishIndex/image/${fishIndex._id}/${fishIndex.image.src}`;  // Adjust the URL according to your API route

  return (
      <a href={imageUrl} target="_blank" rel="noopener noreferrer">
        <img src={imageUrl} alt={fishIndex.image.alt} className="w-full h-24 object-cover rounded-lg shadow-md transition-transform transform hover:scale-105" />
      </a>
  );
}

