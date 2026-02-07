import React, { createContext, useContext, useEffect, useState } from "react";
import { AppTheme } from "./types";
import { THEMES, DEFAULT_THEME_ID } from "./registry";

interface ThemeContextValue {
  theme: AppTheme;
  themeId: string;
  setThemeId: (id: string) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [themeId, setThemeId] = useState(DEFAULT_THEME_ID);

  // Load from storage
  useEffect(() => {
    const stored = localStorage.getItem("themeId");
    if (stored && THEMES[stored]) {
      setThemeId(stored);
    }
  }, []);

  // Persist + apply CSS vars
  useEffect(() => {
    const theme = THEMES[themeId];
    if (!theme) return;

    localStorage.setItem("themeId", themeId);

    const root = document.documentElement;

    Object.entries(theme.colors).forEach(([key, value]) => {
      root.style.setProperty(`--${key}`, value);
    });

    Object.entries(theme.fonts).forEach(([key, value]) => {
      root.style.setProperty(`--font-${key}`, value);
    });
  }, [themeId]);

  const theme = THEMES[themeId];

  return (
    <ThemeContext.Provider value={{ theme, themeId, setThemeId }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
