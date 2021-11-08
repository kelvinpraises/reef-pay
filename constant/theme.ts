import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  backgroundColor: "#FFFFFF",
  primary: "#512DA8",
  text: "#E2EFE6", // #121212
  error: "#D32F2F",
  dark: false,
};

export const darkTheme: DefaultTheme = {
  backgroundColor: "#121212",
  primary: "#B39DDB",
  text: "#E2EFE6",
  error: "#EF9A9A",
  dark: true,
};

export type ThemeType = typeof lightTheme;
