// DarkLightToggle.tsx

import { useEffect, useState, useCallback } from 'react';

const MoonIcon = (
  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
  </svg>
);

const SunIcon = (
  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4"></circle>
    <path d="M12 2v2"></path>
    <path d="M12 20v2"></path>
    <path d="m4.93 4.93 1.41 1.41"></path>
    <path d="m17.66 17.66 1.41 1.41"></path>
    <path d="M2 12h2"></path>
    <path d="M20 12h2"></path>
    <path d="m6.34 17.66-1.41 1.41"></path>
    <path d="m19.07 4.93-1.41 1.41"></path>
  </svg>
);

export default function DarkLightToggle() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const storedTheme = localStorage.getItem('theme');
    
    if (storedTheme) {
      return storedTheme === 'dark';
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const toggleTheme = useCallback(() => {
    setIsDarkMode((prevMode) => !prevMode);
  }, []);

  useEffect(() => {
    const rootElement = document.documentElement;
    const currentTheme = isDarkMode ? 'dark' : 'light';

    if (isDarkMode) {
      rootElement.classList.add('dark');
      rootElement.classList.remove('light');
    } else {
      rootElement.classList.add('light');
      rootElement.classList.remove('dark');
    }

    localStorage.setItem('theme', currentTheme);
  }, [isDarkMode]);

  return (
    <button onClick={toggleTheme}
      className="p-2 rounded-full text-gray-800 dark:text-neutral-200 hover:text-neutral-200 hover:bg-gray-900 dark:hover:bg-gray-200 dark:hover:text-gray-800 focus:outline-none"
    >
      {isDarkMode ? SunIcon : MoonIcon}
    </button>
  );
}
