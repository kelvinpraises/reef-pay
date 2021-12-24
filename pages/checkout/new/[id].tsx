import { Auth, getAuth, onAuthStateChanged } from "firebase/auth";
import type { NextPage } from "next";
import Head from "next/head";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../../../components/Button";
import AddItemsModal from "../../../components/Modal/AddItemsModal";
import app from "../../../firebase/clientApp";

const SCheckoutData = styled.section`
  padding: 3em;
`;

const SBox = styled.div`
  height: calc(100vh - 100px - 4.6rem);
  max-height: 400px;
  display: flex;
  justify-content: center;
`;

const NewShop: NextPage = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const [auth, setAuth] = useState<Auth | null>(null);

  const [showAddShop, setShowAddShop] = useState(false);


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
          <title>Reef Pay | Checkout</title>
          <meta
            name="description"
            content="A payment processor built on reef"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <AddItemsModal
          setShow={setShowAddShop}
          show={showAddShop}
        />

        <SCheckoutData>
          <SBox>
            <div>
              <h1
                style={{
                  color: "white",
                  textAlign: "center",
                  fontSize: "2.2rem",
                }}
              >
                Add a Checkout Quickshop Item
              </h1>
              <br />
              <br />
              <p
                style={{
                  color: "#969ba1",
                  textAlign: "center",
                  fontSize: "1.5rem",
                  maxWidth: "40ch",
                  lineHeight: "1.7",
                }}
              >
                Add an item you&apos;ll sell in Checkout to your shop. A shop without
                an item gets deleted.
              </p>
              <br />
              <br />
              <br />
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button
                  text="Add&nbsp;New&nbsp;Item"
                  click={() => {
                    setShowAddShop(!showAddShop);
                  }}
                />
              </div>
            </div>
          </SBox>
        </SCheckoutData>
      </div>
    );
  }
};

export default NewShop;
