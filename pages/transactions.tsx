import type { NextPage } from "next";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import TransactionsData from "../components/Transactions/TransactionsData";
import { ITransaction } from "../models/transactions";
import { Auth, getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../firebase/clientApp";
import Router from "next/router";

const date = new Date();
// const transactions = Array<ITransaction>(10).fill({
//   id: "Hse98eudolms",
//   amount: "50000",
//   amountInBtc: "0.206732",
//   status: "pending",
//   type: "deposit",
//   createdAt: date.toLocaleDateString(),
// });
const Transactions: NextPage = () => {
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
          <title>Reef Pay | Transactions</title>
          <meta
            name="description"
            content="A payment processor built on reef"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <TransactionsData transactions={[]} />
      </div>
    );
  }
};

export default Transactions;
