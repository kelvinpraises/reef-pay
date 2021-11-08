import { DefaultTheme } from "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    backgroundColor: string;
    primary: string;
    text: string;
    error: string;
    dark: boolean;
  }
}
