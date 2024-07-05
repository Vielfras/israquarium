import "./FishImage.css";

interface IFishImageProps {
  fishId: string,
  src: string;
  alt: string;
}

export default function FishImage({ fishId, src, alt }: IFishImageProps) {
  const imageUrl = `http://127.0.0.1:3000/api/fish/image/${fishId}/${src}`;  // Adjust the URL according to your API route

  return (
    <div className="flex justify-center">
      <a href={imageUrl} target="_blank" rel="noopener noreferrer">
        <img src={imageUrl} alt={alt} className="w-full h-48 object-cover rounded-lg shadow-md transition-transform transform hover:scale-105" />
      </a>
    </div>
  );
}
