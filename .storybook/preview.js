import { ThemeProvider } from "styled-components";
import { CreateGlobalStyled } from "../src/styles/global";
import theme from "../src/styles/theme";
import { AuthProvider } from "../src/hooks/auth";
export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <CreateGlobalStyled />
        <Story />
      </AuthProvider>
    </ThemeProvider>
  ),
];
