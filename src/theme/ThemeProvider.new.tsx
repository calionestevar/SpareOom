// src/theme/ThemeProvider.tsx
import { ReactNode, useEffect } from "react";
import { AppTheme } from "./types";

interface ThemeProviderProps {
  theme: AppTheme;
  children: ReactNode;
}

export function ThemeProvider({ theme, children }: ThemeProviderProps) {
  useEffect(() => {
    const root = document.documentElement;

    Object.entries(theme.colors).forEach(([key, value]) => {
      root.style.setProperty(`--${toKebab(key)}`, value);
    });

    Object.entries(theme.fonts).forEach(([key, value]) => {
      root.style.setProperty(`--font-${toKebab(key)}`, value);
    });
  }, [theme]);

  return <>{children}</>;
}

function toKebab(value: string) {
  return value.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);
}
