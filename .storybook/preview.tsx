import "../src/index.css";
import "../src/styles/theme.css";
import { PublicShell } from "../src/shells/PublicShell";
import type { Decorator } from "@storybook/react";
import type { Preview } from "@storybook/react";
import React from "react";

import { ThemeProvider } from "../src/theme/ThemeProvider";
import { lotrTheme } from "../src/theme/themes/lotr";

const withShell: Decorator = (Story) => (
  <PublicShell>
    <Story />
  </PublicShell>
);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "app",
    values: [
      {
        name: "app",
        value: "rgb(15 26 20)", // LOTR background
      },
      {
        name: "light",
        value: "#ffffff",
      },
    ],
  },
};

export const decorators = [withShell];

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider initialTheme={lotrTheme}>
        <div
          className="min-h-screen p-6"
          style={{ backgroundColor: "rgb(15 26 20)" }}
        >
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export default preview;