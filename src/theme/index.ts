import { lotrTheme } from "./themes/lotr";
import { anneTheme } from "./themes/anne";
// import { narniaTheme } from "./narnia";
// import { voyagerTheme } from "./star-trek-voyager";
// import { stargateTheme } from "./stargate";
// import { chuckTheme } from "./chuck";

export { themeRegistry } from "./registry";
export { ThemeProvider, useTheme } from "./ThemeProvider";
export * from "./types";

export const themes = [
  lotrTheme,
  anneTheme
  // narniaTheme,
  // voyagerTheme,
  // stargateTheme,
  // chuckTheme,
];
