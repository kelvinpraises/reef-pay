import { Auth, getAuth, onAuthStateChanged } from "firebase/auth";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import CheckoutData from "../../components/Checkout/CheckoutData";
import AddShopModal from "../../components/Modal/AddShopModal";
import app from "../../firebase/clientApp";
import { ICheckout } from "../../models/checkout";

const SCheckoutData = styled.section`
  padding: 3em;
  /* padding: 0em; */
`;

const SBox = styled.div`
  height: calc(100vh - 100px - 4.6rem);
  max-height: 400px;
  display: flex;
  justify-content: center;
`;

const date = new Date();
const shops = Array<ICheckout>(10).fill({
  id: "Food Shop",
  items: "3",
  createdAt: date.toLocaleDateString(),
});

const shop: ICheckout[] = [];

const Checkout: NextPage = () => {
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

        <AddShopModal setShow={setShowAddShop} show={showAddShop} />
        {shop.length > 1 ? (
          <CheckoutData shops={shops} />
        ) : (
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
                  Create a Checkout Quickshop
                </h1>
                <br />
                <br />
                <p
                  style={{
                    color: "#969ba1",
                    textAlign: "center",
                    fontSize: "1.5rem",
                    maxWidth: "50ch",
                    lineHeight: "1.7",
                  }}
                >
                  Set up shops in seconds with no server integration. Checkout
                  is great for items with static prices. Read the
                  <Link
                    href="/documentation/checkout-integration"
                    passHref={true}
                  >
                    <a> docs </a>
                  </Link>
                  to learn more about integrating the Checkout Quickshop SDK.
                </p>
                <br />
                <br />
                <br />
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    text="Create&nbsp;New&nbsp;Shop"
                    click={() => {
                      setShowAddShop(!showAddShop);
                    }}
                  />
                </div>
              </div>
            </SBox>
          </SCheckoutData>
        )}
      </div>
    );
  }
};

export default Checkout;
