import React from 'react';
import { useTheme } from '../context/littlehouse/themeContext';

// Import default/fallback components
import DefaultBridge from './startrek/Bridge';
import DefaultViewScreen from './startrek/ViewScreen';
import DefaultWelcomeScreen from './startrek/WelcomeScreen';

// Import theme-specific components
import LCARSBridge from './startrek/Bridge.LCARS';
import NarniaBridge from './narnia/Bridge.Chronicle';
import LOTRBridge from './lotr/Bridge.Manuscript';
// ... import others as you create them

/**
 * ThemeRouter - Dynamically loads the correct component based on active theme
 * 
 * This allows each theme to have completely different layouts while
 * maintaining the same component interface.
 */

// Component mappings for each theme
const THEME_COMPONENTS = {
  // Bridge (Weekly Calendar) mappings
  bridge: {
    startrek: LCARSBridge,
    narnia: NarniaBridge,
    lotr: LOTRBridge,
    stargate: DefaultBridge, // TODO: Create Stargate version
    anne: DefaultBridge,     // TODO: Create Anne version
    littlehouse: DefaultBridge, // TODO: Create Little House version
    default: DefaultBridge
  },
  
  // ViewScreen (Daily Detail) mappings
  viewscreen: {
    startrek: DefaultViewScreen, // TODO: Create LCARS version
    narnia: DefaultViewScreen,   // TODO: Create Chronicle version
    lotr: DefaultViewScreen,     // TODO: Create Manuscript version
    stargate: DefaultViewScreen,
    anne: DefaultViewScreen,
    littlehouse: DefaultViewScreen,
    default: DefaultViewScreen
  },

  // WelcomeScreen mappings
  welcome: {
    startrek: DefaultWelcomeScreen,
    narnia: DefaultWelcomeScreen,
    lotr: DefaultWelcomeScreen,
    stargate: DefaultWelcomeScreen,
    anne: DefaultWelcomeScreen,
    littlehouse: DefaultWelcomeScreen,
    default: DefaultWelcomeScreen
  }
};

/**
 * ThemedBridge - Renders the theme-appropriate Bridge component
 */
export const ThemedBridge = (props) => {
  const { theme } = useTheme();
  const Component = THEME_COMPONENTS.bridge[theme.id] || THEME_COMPONENTS.bridge.default;
  return <Component {...props} />;
};

/**
 * ThemedViewScreen - Renders the theme-appropriate ViewScreen component
 */
export const ThemedViewScreen = (props) => {
  const { theme } = useTheme();
  const Component = THEME_COMPONENTS.viewscreen[theme.id] || THEME_COMPONENTS.viewscreen.default;
  return <Component {...props} />;
};

/**
 * ThemedWelcomeScreen - Renders the theme-appropriate WelcomeScreen component
 */
export const ThemedWelcomeScreen = (props) => {
  const { theme } = useTheme();
  const Component = THEME_COMPONENTS.welcome[theme.id] || THEME_COMPONENTS.welcome.default;
  return <Component {...props} />;
};

/**
 * Generic ThemedComponent - For any component that needs theme routing
 * 
 * Usage:
 * <ThemedComponent 
 *   componentType="bridge" 
 *   {...props} 
 * />
 */
export const ThemedComponent = ({ componentType, ...props }) => {
  const { theme } = useTheme();
  const componentMap = THEME_COMPONENTS[componentType];
  
  if (!componentMap) {
    console.warn(`No component map found for type: ${componentType}`);
    return null;
  }
  
  const Component = componentMap[theme.id] || componentMap.default;
  return <Component {...props} />;
};

export default {
  ThemedBridge,
  ThemedViewScreen,
  ThemedWelcomeScreen,
  ThemedComponent
};