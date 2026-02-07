import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";

import "./index.css";
import "./styles/theme.css";

import { ThemeProvider } from "./theme/ThemeProvider";
import { lotrTheme } from "./theme/themes/lotr";

const container = document.getElementById("root");

if (!container) {
  throw new Error("Root container missing in index.html");
}

const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <ThemeProvider initialTheme={lotrTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
