import { MyTheme } from "./MyTheme";

const theme: MyTheme = {
  grid: {
    container: "130rem",
    gutter: "3.2rem",
  },
  border: {
    radius: "0.4rem",
  },
  font: {
    family: "Roboto Slab,  'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      xsmall: "1.2rem",
      small: "1.4rem",
      medium: "1.6rem",
      large: "1.8rem",
      xlarge: "2.0rem",
      xxlarge: "2.8rem",
    },
  },
  colors: {
    primary: "#0074E4",
    secondary: "#C47AF5",
    terciary: "#35BDAC",
    mainBg: "#121212",
    white: "#FAFAFA",
    black: "#030517",
    lightGray: "#BBBBBB",
    gray: "#2D2D2D",
    darkGray: "#2E2F42",
  },
  spacings: {
    xxsmall: "0.8rem",
    xsmall: "1.6rem",
    small: "2.4rem",
    medium: "3.2rem",
    large: "4.0rem",
    xlarge: "4.8rem",
    xxlarge: "5.6rem",
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50,
  },
};

export default theme;
