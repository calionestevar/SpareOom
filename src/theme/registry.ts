import { AppTheme } from "./types";
import { lotrTheme } from "./themes/lotr";
import { anneTheme } from "./themes/anne";
// later:
// import { narniaTheme } from "./themes/narnia";
// import { voyagerTheme } from "./themes/voyager";

export interface ThemeOption {
  theme: AppTheme;
  available: boolean;
}

export const themeRegistry: ThemeOption[] = [
  { theme: lotrTheme, available: true },
  { theme: anneTheme, available: true },

  // Coming soon
  {
    theme: { id: "narnia", name: "Narnia" } as AppTheme,
    available: false,
  },
  {
    theme: { id: "voyager", name: "Voyager (LCARS)" } as AppTheme,
    available: false,
  },
  {
    theme: { id: "little-house", name: "Little House" } as AppTheme,
    available: false,
  },
  {
    theme: { id: "stargate", name: "Stargate" } as AppTheme,
    available: false,
  },
  {
    theme: { id: "chuck", name: "Chuck" } as AppTheme,
    available: false,
  },
];

export const THEMES: Record<string, AppTheme> = {
  lotr: lotrTheme,
  anne: anneTheme,
  // narnia: narniaTheme,
  // voyager: voyagerTheme,
};

export const DEFAULT_THEME_ID = "lotr";
