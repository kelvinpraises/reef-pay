import { Auth, getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, Firestore, getFirestore, onSnapshot } from "firebase/firestore";
import { Functions, getFunctions, httpsCallable } from "firebase/functions";
import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { grey } from "../../constant/colors";
import app from "../../firebase/clientApp";
import Button from "../Button";

type NullString = string | null;

const SAddress = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2em;
`;

const SAPIKey = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2em;
`;

const SInput = styled.input`
  min-width: 300px;
  width: 100%;
  max-width: 500px;
  font-size: 24px;
  padding: 6px;
`;

const Label1 = styled.label`
  font-size: 28px;
  color: white;
`;

const Label2 = styled.label`
  font-size: 14px;
  color: ${grey};
`;

const SToggle = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  color: ${grey};
`;

const SApiKeyGroup1 = styled.div`
  display: flex;
  width: 100%;
`;

const SApiKeyGroup2 = styled.div`
  display: flex;
  min-width: 312px;
  width: 80%;
  max-width: 512px;
  justify-content: flex-end;
  align-items: center;
`;

export default function SettingsData() {
  const [db, setDb] = useState<Firestore | null>(null);
  const [auth, setAuth] = useState<Auth | null>(null);
  const [functions, setFunctions] = useState<Functions | null>(null);

  const [address, setAddress] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [show, setShow] = useState(false);

  const [uid, setUid] = useState<NullString>("");

  useEffect(() => {
    const db = getFirestore(app);
    db && setDb(db);
  }, []);

  useEffect(() => {
    const auth = getAuth(app);
    auth && setAuth(auth);
  }, []);

  useEffect(() => {
    const functions = getFunctions(app);
    functions && setFunctions(functions);
  }, []);

  useEffect(() => {
    if (auth !== null) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUid(user.uid);
        }
      });
    }
  }, [auth]);

  useEffect(() => {
    if (db !== null && uid?.length! > 0) {
      const unsub = onSnapshot(doc(db, "merchants", uid!), (doc) => {
        if (doc.exists()) {
          const { walletAddress, apiKey } = doc.data();

          setAddress(walletAddress);
          setApiKey(apiKey);
        }
      });

      return () => unsub();
    }
  }, [db, uid]);

  const handleChange = (event: any) => {
    let value = event.target.value;
    setAddress(value);
  };

  const generateAPIKey = useCallback(() => {
    if (functions !== null) {
      const generateAPIKey = httpsCallable(functions, "generateAPIKey");

      generateAPIKey();
    }
  }, [functions]);

  const saveWalletAddress = useCallback(() => {
    if (functions !== null) {
      const saveWalletAddress = httpsCallable(functions, "saveWalletAddress");

      saveWalletAddress({ walletAddress: address });
    }
  }, [functions, address]);

  return (
    <div>
      <SAddress>
        <Label1 htmlFor="address">Wallet Address</Label1>
        <Label2 htmlFor="address">
          This wallet is where your funds are sent too
        </Label2>
        <div style={{ display: "flex" }}>
          <SInput
            type="text"
            name="address"
            value={address}
            onChange={(e) => handleChange(e)}
          />
          &nbsp; &nbsp; &nbsp; &nbsp;
          <Button text="Save" click={() => saveWalletAddress()} />
        </div>
      </SAddress>
      <SAPIKey>
        <Label1 htmlFor="apiKey">API Key</Label1>
        <Label2 htmlFor="apiKey">Keep safe your API key</Label2>
        <SApiKeyGroup1>
          <SApiKeyGroup2>
            <SInput
              type={show ? "text" : "password"}
              name="apiKey"
              value={apiKey}
            />
            <SToggle>
              <img
                onClick={() => {
                  setShow(false);
                }}
                style={{
                  padding: 10,
                  width: 35,
                  display: show ? "block" : "none",
                }}
                src="assets/hide.svg"
                alt=""
              />
              <img
                onClick={() => {
                  setShow(true);
                }}
                style={{
                  padding: 10,
                  width: 35,
                  display: show ? "none" : "block",
                }}
                src="assets/show.svg"
                alt=""
              />
            </SToggle>
          </SApiKeyGroup2>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <div style={{ display: "flex" }}>
            <Button text="Generate Key" click={() => generateAPIKey()} />
            &nbsp; &nbsp; &nbsp; &nbsp;
            <Button
              text="Copy"
              click={() => {
                alert("not yet working");
              }}
            />
          </div>
          <div style={{ flex: 2 }}></div>
        </SApiKeyGroup1>
      </SAPIKey>
    </div>
  );
}
