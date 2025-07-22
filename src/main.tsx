import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import App from "./App.tsx";
import { GlobalStyle } from "./styles/global.ts";
import { defaultTheme } from "./styles/themes/default.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <App />
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
