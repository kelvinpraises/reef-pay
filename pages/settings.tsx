import type { NextPage } from "next";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import SettingsData from "../components/Settings/SettingsData";
import { Auth, getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../firebase/clientApp";
import Router from "next/router";

const Settings: NextPage = () => {
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
          Router.push("/");
        }
      });
    }
  }, [auth]);

  if (!loggedIn) {
    return null;
  } else {
    return (
      <div>
        <Head>
          <title>Reef Pay | Settings</title>
          <meta
            name="description"
            content="A payment processor built on reef"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <SettingsData />
      </div>
    );
  }
};

export default Settings;
