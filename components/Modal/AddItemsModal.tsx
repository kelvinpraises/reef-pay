import { Auth, getAuth } from "firebase/auth";
import { Firestore, getFirestore } from "firebase/firestore";
import { Functions, getFunctions, httpsCallable } from "firebase/functions";
import React, { useCallback, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { almostBlack, darkBlue } from "../../constant/colors";
import app from "../../firebase/clientApp";
import Button from "../Button";
import BaseModal from "./BaseModal";

const SSignupModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 35px;
  background-color: ${darkBlue};
  border-radius: 25px;
`;

const SInput = styled.input`
  border: 2px solid #ccc;
  width: 100%;
  max-width: 288px;
  font-size: 24px;
  padding: 10px 6px;
  margin-top: 0.2em;
  margin-bottom: 0.7em;
  border-radius: 4px;
  color: #333333;
  background-color: #f8f8f8;
`;

const STextArea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 10px 6px;
  margin-top: 0.2em;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  color: #333333;
  background-color: #f8f8f8;
  font-size: 24px;
  resize: none;
`;

const Label = styled.label`
  font-size: 24px;
  color: white;
`;

export default function AddItemsModal({
  show,
  setShow,
}: {
  show: boolean;
  setShow: any;
}) {
  const [auth, setAuth] = useState<Auth | null>(null);
  const [db, setDb] = useState<Firestore | null>(null);
  const [functions, setFunctions] = useState<Functions | null>(null);

  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");
  const [shop, setShop] = useState("");

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const auth = getAuth(app);
    auth && setAuth(auth);
  }, []);

  useEffect(() => {
    const db = getFirestore(app);
    db && setDb(db);
  }, []);

  useEffect(() => {
    const functions = getFunctions(app);
    functions && setFunctions(functions);
  }, []);

  useEffect(() => {
    const location = window.location.href;
    const locationArray = location.split("/");
    setShop(locationArray[locationArray.length - 1]);
  }, []);

  const onChange = useCallback((event: any, id: string) => {
    let value = event.target.value;

    switch (id) {
      case "item":
        setItem(value);
        break;
      case "price":
        setPrice(value);
        break;
      case "quantity":
        setQuantity(value);
        break;
      case "description":
        setDescription(value);
        break;

      default:
        break;
    }
  }, []);

  const addCheckoutItem = useCallback(() => {
    if (functions !== null) {
      setLoading(true);
      const addCheckoutItem = httpsCallable(functions, "addCheckoutItem");

      addCheckoutItem({ description, price, quantity, item, shop })
        .then(() => {
          setLoading(false);
          const host = window.location.host;
          const url = "http://" + host + "/checkout/" + shop;
          window.location.href = url;
        })
        .catch(() => setLoading(false));
    }
  }, [functions, description, price, quantity, shop, item]);

  return (
    <BaseModal show={show} setShow={setShow} title="Deposit">
      <SSignupModal>
        <div style={{ maxWidth: 300 }}>
          <Label htmlFor="item">Item Name</Label>
          <SInput
            type="text"
            id="item"
            onChange={(e) => onChange(e, "item")}
            value={item}
          />
          <Label htmlFor="price">Item Price</Label>
          <SInput
            type="number"
            id="price"
            onChange={(e) => onChange(e, "price")}
            value={price}
          />
          <Label htmlFor="quantity">Item quantity</Label>
          <SInput
            type="number"
            id="quantity"
            onChange={(e) => onChange(e, "quantity")}
            value={quantity}
          />
          <Label htmlFor="description">Description</Label>
          <STextArea
            id="description"
            onChange={(e) => onChange(e, "description")}
            value={description}
          />
          <br />
          <br />
          <Button
            click={() => addCheckoutItem()}
            text="Add Item"
            backgroundColor={almostBlack}
            loading={loading}
          />
        </div>
      </SSignupModal>
    </BaseModal>
  );
}
