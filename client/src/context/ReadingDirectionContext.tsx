import React, { createContext, useContext, useState, ReactNode } from 'react';

interface DirectionContextProps {
  direction: 'ltr' | 'rtl';
  toggleDirection: () => void;
}

const DirectionContext = createContext<DirectionContextProps | undefined>(undefined);

export const useDirection = () => {
  const context = useContext(DirectionContext);
  if (!context) {
    throw new Error('useDirection must be used within a DirectionProvider');
  }
  return context;
};

export const DirectionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [direction, setDirection] = useState<'ltr' | 'rtl'>('ltr');

  const toggleDirection = () => {
    setDirection((prevDirection) => (prevDirection === 'ltr' ? 'rtl' : 'ltr'));
  };

  return (
    <DirectionContext.Provider value={{ direction, toggleDirection }}>
      <div dir={direction}>
        {children}
      </div>
    </DirectionContext.Provider>
  );
};
