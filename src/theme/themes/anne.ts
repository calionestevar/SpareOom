import { AppTheme } from "../types";
import { anneTokens } from "../tokens/anne.tokens";
import { ANNE_GRADIENT } from "../backgrounds";

export const anneTheme: AppTheme = {
  id: "anne",
  name: "Anne of Green Gables",
  colors: anneTokens.colors,
  backgroundStyle: "anne-gradient",
  backgroundGradient: ANNE_GRADIENT,
  fonts: anneTokens.fonts,
};
