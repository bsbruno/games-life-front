import { createGlobalStyle } from "styled-components";
import theme from "./theme";

export const CreateGlobalStyled = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;

&::before,
&::after{
  box-sizing: inherit;
}
a {
    text-decoration: none;
  }


}
html{
  font-size: 62.5%;
}

body{
  font-family: ${theme.font.family};
  font-size: ${theme.font.sizes.medium};
  background-color: ${theme.colors.mainBg};

}


`;
