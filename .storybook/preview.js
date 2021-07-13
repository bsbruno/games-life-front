import { ThemeProvider } from "styled-components";
import { CreateGlobalStyled } from "../src/styles/global";
import theme from "../src/styles/theme";

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <CreateGlobalStyled />
      <Story />
    </ThemeProvider>
  ),
];
