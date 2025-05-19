import React, { createContext, useContext, useState, useEffect } from 'react';
import { getColorMode, setColorMode } from './utils/resource/color';
import type { ColorMode } from './utils/resource/color';

type ThemeContextType = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Load initial theme
    getColorMode().then(mode => {
      setIsDarkMode(mode === 'dark');
    });
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(prev => {
      const newMode = !prev ? 'dark' : 'light';
      setColorMode(newMode as ColorMode);
      return !prev;
    });
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
