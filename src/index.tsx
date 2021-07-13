import React from "react";
import ReactDOM from "react-dom";
import theme from "./styles/theme";
import { CreateGlobalStyled } from "./styles/global";
import { ThemeProvider } from "styled-components";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <CreateGlobalStyled />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
