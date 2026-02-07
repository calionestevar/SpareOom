export interface ThemeColors {
  background: string;
  surface: string;
  surfaceMuted: string;

  primary: string;
  primaryHover: string;
  primarySoft: string;

  accent: string;
  accentSecondary: string;
  accentHover: string;
  accentSoft: string;
  accentSecondarySoft: string;

  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  textInverse: string;

  success: string;
  warning: string;
  danger: string;

  border: string;
}

export interface ThemeFonts {
  heading: string;
  body: string;
  ui: string;
}

export interface ThemeTokens {
  colors: ThemeColors;
  fonts: ThemeFonts;
}

export interface AppTheme {
  id: string;
  name: string;
  colors: ThemeColors;
  backgroundStyle?: "solid" | "anne-gradient" | "littleHouse-checkerboard";
  backgroundGradient?: string;
  fonts: ThemeFonts;
  comingSoon?: boolean;
}
