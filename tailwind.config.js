/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {
    colors: {
      background: "rgb(var(--background))",
      surface: "rgb(var(--surface))",
      border: "rgb(var(--border))",

      primary: "rgb(var(--primary))",
      accent: "rgb(var(--accent))",

      muted: "rgb(var(--text-muted))",
    },
    fontFamily: {
      heading: "var(--font-heading)",
      body: "var(--font-body)",
      ui: "var(--font-ui)",
    },
  },
};
export const plugins = [];