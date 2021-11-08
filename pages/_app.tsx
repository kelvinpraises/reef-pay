import { Auth, getAuth, onAuthStateChanged } from "firebase/auth";
import type { AppProps } from "next/app";
import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import LayOut from "../components/Layout";
import { darkTheme, lightTheme } from "../constant/theme";
import ThemeContext from "../context/theme";
import app from "../firebase/clientApp";
import GlobalStyle from "../styles/global";
import "../styles/global.ts";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState("dark");
  const [loggedIn, setLoggedIn] = useState(false);

  const [auth, setAuth] = useState<Auth | null>(null);

  useEffect(() => {
    const auth = getAuth(app);
    auth && setAuth(auth);
  }, []);

  useEffect(() => {
    if (auth !== null) {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          setLoggedIn(true);
        } else {
          setLoggedIn(false);
        }
      });
    }
  }, [auth]);

  if (loggedIn) {
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
  } else if (loggedIn === false) {
    return (
      <>
        <ThemeContext.Provider value={setTheme}>
          <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
            <GlobalStyle />
            <Component {...pageProps} />
          </ThemeProvider>
        </ThemeContext.Provider>
      </>
    );
  }
}

export default MyApp;
