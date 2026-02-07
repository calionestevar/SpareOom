import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/preset-create-react-app",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding"
  ],
  "framework": "@storybook/react-webpack5",
  "staticDirs": [
    "..\\public"
  ],
  webpackFinal: async (config) => {
    // Filter out the ESLintWebpackPlugin to prevent linting during Storybook builds
    config.plugins = config.plugins?.filter(
      (plugin) => plugin != null &&plugin.constructor.name !== 'ESLintWebpackPlugin'
    );
    return config;
  },

};

export default config;