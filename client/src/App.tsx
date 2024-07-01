import './App.css';

import FishCard from './components/Fish/FishCard/FishCard';
import { DirectionProvider, useDirection } from './context/ReadingDirectionContext';

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

function App() {
  return (
    <DirectionProvider>
      <div className="min-h-screen bg-blue-200 flex flex-col items-center justify-center p-6">
        <DirectionToggle />
        <FishCard />
      </div>
    </DirectionProvider>
  );
}

export default App;
