import { Auth, getAuth, onAuthStateChanged } from "firebase/auth";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import LoginModal from "../components/Modal/LoginModal";
import SignupModal from "../components/Modal/SignupModal";
import app from "../firebase/clientApp";

const SHome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

const SText = styled.div`
  color: white;
  max-width: 400px;
  text-align: center;
`;

const SButtons = styled.div`
  padding: 2em;
  width: 260px;
`;

const Home: NextPage = () => {
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

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
          Router.push("/overview");
        } else {
          setLoggedIn(false);
        }
      });
    }
  }, [auth]);

  if (loggedIn) {
    return null;
  } else {
    return (
      <div>
        <Head>
          <title>reef pay</title>
          <meta
            name="description"
            content="A payment processor built on reef"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <SHome>
          <SignupModal show={showSignup} setShow={setShowSignup} />
          <LoginModal show={showLogin} setShow={setShowLogin} />
          <img src="assets/reef-pay-big.png" alt="" />
          <SButtons>
            <Button
              text="Create&nbsp;Account"
              click={() => {
                setShowSignup(!showSignup);
              }}
            />
            <br />
            <Button
              text="Login"
              click={() => {
                setShowLogin(!showLogin);
              }}
            />
          </SButtons>
          <SText>
            Welcome to Reef Pay create an account or login to accept payments,
            or read the
            <Link href="/documentation" passHref={true}>
              <a> docs</a>
            </Link>
          </SText>
        </SHome>
      </div>
    );
  }
};

export default Home;
