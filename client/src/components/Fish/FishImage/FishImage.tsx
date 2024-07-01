import "./FishImage.css"

interface IFishImage {
  src: string;
  alt: string;
}

export default function FishImage({ src, alt }: IFishImage) {
  return (
    <div className="flex justify-center">
      <a href={src} target="_blank" rel="noopener noreferrer">
        <img src={src} alt={alt} className="w-full h-48 object-cover rounded-lg shadow-md transition-transform transform hover:scale-105" />
      </a>
    </div>
  );
}
