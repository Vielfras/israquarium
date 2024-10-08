// AlphabetRow.tsx

interface IAlphabetRowProps {
  selectedLetter: string | null;
  onLetterClick: (letter: string) => void;
}

const alphabetMap = {
  en: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
};

export default function AlphabetRow({ selectedLetter, onLetterClick }: IAlphabetRowProps) {
  const alphabet = alphabetMap.en; 
  
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-4">
      {alphabet.map((letter) => (
        <button key={letter} onClick={() => onLetterClick(letter)}
          className={`px-2 lg:px-4 py-1 font-bold text-sm md:text-base rounded 
                      ${selectedLetter === letter ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}
                      hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300 ease-in-out transform hover:scale-105`}
        >
          {letter}
        </button>
      ))}
    </div>
  );
}
