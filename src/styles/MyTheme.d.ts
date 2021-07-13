export type MyTheme = {
  grid: {
    container: string;
    gutter: string;
  };
  border: {
    radius: string;
  };
  font: {
    family: string;
    light: number;
    normal: number;
    bold: number;
    sizes: {
      xsmall: string;
      small: string;
      medium: string;
      large: string;
      xlarge: string;
      xxlarge: string;
    };
  };
  colors: {
    primary: string;
    secondary: string;
    terciary: string;
    mainBg: string;
    white: string;
    black: string;
    lightGray: string;
    gray: string;
    darkGray: string;
  };
  spacings: {
    xxsmall: string;
    xsmall: string;
    small: string;
    medium: string;
    large: string;
    xlarge: string;
    xxlarge: string;
  };
  layers: {
    base: number;
    menu: number;
    overlay: number;
    modal: number;
    alwaysOnTop: number;
  };
};
