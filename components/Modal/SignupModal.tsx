import {
  Auth,
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import React, { useCallback, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { almostBlack, darkBlue } from "../../constant/colors";
import app from "../../firebase/clientApp";
import Button from "../Button";
import BaseModal from "./BaseModal";
import { doc, Firestore, getFirestore, setDoc } from "firebase/firestore";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const SSignupModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 35px;
  background-color: ${darkBlue};
  border-radius: 25px;
`;

const SLoader = styled.div`
  border: 5px solid #f3f3f3;
  border-radius: 50%;
  border-top: 5px solid ${almostBlack};
  min-width: 30px;
  min-height: 30px;
  animation: ${spin} 2s linear infinite;
`;

const SInput = styled.input`
  color: #333333 !important;
  background-color: rgba(255, 255, 255, 0.7);
  border: 0 !important;

  width: 100%;
  max-width: 288px;
  font-size: 24px;
  padding: 10px 6px;
  margin-bottom: 0.7em; ;
`;

const Label1 = styled.label`
  font-size: 24px;
  color: white;
`;

export default function SignupModal({
  show,
  setShow,
}: {
  show: boolean;
  setShow: any;
}) {
  const [auth, setAuth] = useState<Auth | null>(null);
  const [db, setDb] = useState<Firestore | null>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [wallet, setWallet] = useState("");

  useEffect(() => {
    const auth = getAuth(app);
    auth && setAuth(auth);
  }, []);


  useEffect(() => {
    const db = getFirestore(app);
    db && setDb(db);
  }, []);

  const onChange = useCallback((event: any, id: string) => {
    let value = event.target.value;

    switch (id) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "wallet":
        setWallet(value);
        break;
      case "password":
        setPassword(value);
        break;

      default:
        break;
    }
  }, []);

  function register() {
    if (auth) {
      const promise = createUserWithEmailAndPassword(auth, email, password);

      promise.then((r) => {
        if (db !== null) {
          const userRef = doc(db, "merchants", r.user.uid);
          setDoc(
            userRef,
            {
              merchantWallet: wallet,
            },
            { merge: true }
          );
        }

        updateProfile(r.user, {
          displayName: name,
        });
      });

      promise.catch((e) => alert(e.message));
    }
  }

  return (
    <BaseModal show={show} setShow={setShow} title="Deposit">
      <SSignupModal>
        <div style={{ maxWidth: 300 }}>
          <Label1 htmlFor="name">Display Name</Label1>
          <SInput
            type="text"
            id="name"
            onChange={(e) => onChange(e, "name")}
            value={name}
          />
          <Label1 htmlFor="email">Email Address</Label1>
          <SInput
            type="text"
            id="email"
            onChange={(e) => onChange(e, "email")}
            value={email}
          />
          <Label1 htmlFor="address">Wallet Address</Label1>
          <SInput
            type="text"
            id="wallet"
            onChange={(e) => onChange(e, "wallet")}
            value={wallet}
          />
          <Label1 htmlFor="password">Password</Label1>
          <SInput
            type="password"
            id="password"
            onChange={(e) => onChange(e, "password")}
            value={password}
          />
          <br />
          <br />
          <Button
            click={() => register()}
            text="Create Account"
            backgroundColor={almostBlack}
          />
        </div>
      </SSignupModal>
    </BaseModal>
  );
}

{
  /* <SLoader style={{ display: loading ? "block" : "none" }} /> */
}
