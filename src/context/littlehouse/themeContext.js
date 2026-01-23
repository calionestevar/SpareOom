import React, { createContext, useContext, useState, useEffect } from 'react';
import { THEMES, DEFAULT_THEME, loadThemeFonts, applyThemeFonts } from '../../constants/narnia/themes';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(DEFAULT_THEME);

  // Load saved theme on mount
  useEffect(() => {
    const savedThemeId = localStorage.getItem('spare-oom-theme');
    if (savedThemeId && THEMES[savedThemeId.toUpperCase()]) {
      setCurrentTheme(THEMES[savedThemeId.toUpperCase()]);
    }
  }, []);

  // Apply theme fonts whenever theme changes
  useEffect(() => {
    loadThemeFonts(currentTheme);
    applyThemeFonts(currentTheme);
  }, [currentTheme]);

  // Save theme when it changes
  const changeTheme = (themeId) => {
    const newTheme = THEMES[themeId.toUpperCase()];
    if (newTheme) {
      setCurrentTheme(newTheme);
      localStorage.setItem('spare-oom-theme', themeId.toLowerCase());
    }
  };

  const value = {
    theme: currentTheme,
    changeTheme,
    availableThemes: Object.values(THEMES),
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};