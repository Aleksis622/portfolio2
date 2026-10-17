import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import LanguageProvider from "./i18n/LanguageProvider";
import "./styles/global.css";
import "./styles/portfolio.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>
);
