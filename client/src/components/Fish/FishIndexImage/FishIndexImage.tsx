// FishIndexImage.tsx

import { IFishIndex } from "../../../interfaces/IFish";

interface IFishIndexImageProps {
  fishIndex: IFishIndex;
  size?: 'small' | 'medium' | 'large';
}


export default function FishIndexImage({ fishIndex, size = 'medium' }: IFishIndexImageProps) {
  const imageUrl = `http://127.0.0.1:3000/api/fishIndex/image/${fishIndex._id}/${fishIndex.image.src}`;

  const imageSizeClass =
    size === 'small'
      ? 'w-16 h-16 rounded-full'
      : size === 'large'
        ? 'w-full h-32 rounded-lg'
        : 'h-24 rounded-lg';

  return (
    <img className={`${imageSizeClass} object-cover transition-transform transform hover:scale-110`}
      src={imageUrl} alt={fishIndex.image.alt}
    >
    </img>
  );
}


