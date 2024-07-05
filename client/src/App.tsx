import './App.css';
import { useEffect, useState } from 'react';
import FishCard from './components/Fish/FishCard/FishCard';
import { DirectionProvider, useDirection } from './context/ReadingDirectionContext';
import { IFish } from './interfaces/IFish';

function DirectionToggle() {
  const { toggleDirection } = useDirection();
  return (
    <button
      onClick={toggleDirection}
      className="px-4 py-2 bg-blue-500 text-white rounded"
    >
      Toggle Direction
    </button>
  );
}

const apiCall: string = 'http://127.0.0.1:3000/api/fish';

function App() {
  const [fishData, setFishData] = useState<IFish | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFishData = async () => {
      try {
        const response = await fetch(apiCall);
        if (!response.ok) {
          throw new Error('Failed to fetch fish data');
        }
        const data = await response.json();
        setFishData(data.data);
        setLoading(false);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
        setError(errorMessage);
        setLoading(false);
      }
    };

    fetchFishData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <DirectionProvider>
      <div className="min-h-screen bg-blue-200 flex flex-col items-center justify-center p-6">
        <DirectionToggle />
        {fishData && <FishCard fishData={fishData} />}
      </div>
    </DirectionProvider>
  );
}

export default App;
