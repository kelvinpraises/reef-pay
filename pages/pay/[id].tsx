import { doc, Firestore, getFirestore, onSnapshot } from "firebase/firestore";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import EmptyState from "../../components/EmptyState";
import CountDownTimer from "../../components/Timer";
import { almostBlack, darkBlue } from "../../constant/colors";
import app from "../../firebase/clientApp";

const Label = styled.div`
  font-size: 20px;
  color: white;
`;

const Feild = styled.div`
  font-size: 24px;
  color: white;
  background-color: ${almostBlack};
  padding: 0.5em;
  margin: 0.5em 0;
  border-radius: 10px;
`;

const SPayment = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const SCard = styled.div`
  margin: 1em;
  padding: 3em;
  background-color: ${darkBlue};
  border-radius: 20px;
  overflow-x: auto;
`;

const PayTransactionId: NextPage = () => {
  const router = useRouter();
  const queryKey = "id";
  const uid =
    router.query[queryKey] ||
    router.asPath.match(new RegExp(`[&?]${queryKey}=(.*)(&|$)`));

  const [db, setDb] = useState<Firestore | null>(null);

  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [successUrl, setSuccessUrl] = useState("");
  const [cancelUrl, setCancelUrl] = useState("");
  const [createdAt, setCreatedAt] = useState("");

  const [urlValid, setUrlValid] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore(app);
    db && setDb(db);
  }, []);

  useEffect(() => {
    if (db !== null && uid?.length! > 0) {
      const unsub = onSnapshot(
        doc(db, "paymentRequest", uid as string),
        (doc) => {
          if (doc.exists()) {
            setLoading(false);
            const { walletAddress, amount, successUrl, cancelUrl, createdAt } =
              doc.data();

            setAddress(walletAddress);
            setAmount(amount);
            setSuccessUrl(successUrl);
            setCancelUrl(cancelUrl);
            setCreatedAt("" + createdAt.toDate());
          } else {
            setUrlValid(false);
          }
        }
      );

      return () => unsub();
    }
  }, [db, uid]);

  if (!urlValid) {
    return (
      <>
        <Head>
          <title>Reef Pay | Error</title>
          <meta
            name="description"
            content="A payment processor built on reef"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <EmptyState>
          <h1 style={{ color: "white", textAlign: "center", fontSize: "2rem" }}>
            Sorry That Payment Route Doesn&apos;t Exist!
          </h1>
        </EmptyState>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Reef Pay | Payment</title>
        <meta name="description" content="A payment processor built on reef" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {loading ? (
        <EmptyState>
          <h1 style={{ color: "white", textAlign: "center", fontSize: "2rem" }}>
            Loading...
          </h1>
        </EmptyState>
      ) : (
        <SPayment>
          <SCard>
            <Label>This payment link expires in</Label>
            <Feild>
              <CountDownTimer date={createdAt} />
            </Feild>
            <br />
            <Label>Wallet address to transfer into</Label>
            <Feild>{address}</Feild>
            <br />
            <Label>Amount of Reef tokens to transfer</Label>
            <Feild>{amount}</Feild>
          </SCard>
        </SPayment>
      )}
    </>
  );
};

export default PayTransactionId;
