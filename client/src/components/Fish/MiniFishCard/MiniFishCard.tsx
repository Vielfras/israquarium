import React from 'react';
import { IFish } from "../../../interfaces/IFish";
import { useTranslation } from 'react-i18next';

interface MiniFishCardProps {
  fish: IFish;
  onClick: () => void;
}

export default function MiniFishCard({ fish, onClick }: MiniFishCardProps) {
  const { i18n } = useTranslation();
  const currentLang = i18n.language as 'en' | 'he' | 'ru'; 

  return (
    <div className="border p-4 rounded-lg cursor-pointer" onClick={onClick}>
      <h3 className="text-lg font-bold">{fish.languages[currentLang]?.subclass || fish.name}</h3>
      <img src={fish.images[0]?.src} alt={fish.images[0]?.alt || 'Fish Image'} className="w-full h-32 object-cover rounded" />
    </div>
  );
}
