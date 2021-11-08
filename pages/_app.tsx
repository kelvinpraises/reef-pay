import "../styles/global.ts";
import type { AppProps } from "next/app";
import React, { useState } from "react";
import GlobalStyle from "../styles/global";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../constant/theme";
import LayOut from "../components/Layout";
import ThemeContext from "../context/theme";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState("light");

  return (
    <>
      <ThemeContext.Provider value={setTheme}>
        <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
          <GlobalStyle />
          <LayOut>
            <Component {...pageProps} />
          </LayOut>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}

export default MyApp;
