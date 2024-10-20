// FavoriteToggle.tsx

interface IFavoriteIconProps {
  isFavorited: boolean;       
  onToggle: () => void; 
}

export default function FavoriteIcon({ isFavorited, onToggle }: IFavoriteIconProps) {
  return (
    <button onClick={onToggle} className="text-red-500 hover:text-red-600 transition duration-300">
      {isFavorited ? (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path fillRule="evenodd" d="M12 4.5c1.657-1.657 4.343-1.657 6 0 1.657 1.657 1.657 4.343 0 6L12 18.5 6 10.5c-1.657-1.657-1.657-4.343 0-6 1.657-1.657 4.343-1.657 6 0z" clipRule="evenodd" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 011.697-1.697 4.5 4.5 0 015.364 0 4.5 4.5 0 015.364 0 4.5 4.5 0 011.697 1.697c1.657 1.657 1.657 4.343 0 6L12 19.682l-7.682-7.364c-1.657-1.657-1.657-4.343 0-6z" />
        </svg>
      )}
    </button>
  );
}
