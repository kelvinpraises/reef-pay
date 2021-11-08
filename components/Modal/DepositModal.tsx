import { Functions, getFunctions, httpsCallable } from "firebase/functions";
import React, { useCallback, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { secondary_deep_color_400 } from "../../constants";
import app from "../../firebase/clientApp";
import Button from "../Button";
import BaseModal from "./BaseModal";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const SDepositModal = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  margin-bottom: 40px;
`;

const SContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SContainer1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SLoader = styled.div`
  border: 5px solid #f3f3f3;
  border-radius: 50%;
  border-top: 5px solid ${secondary_deep_color_400};
  min-width: 30px;
  min-height: 30px;
  animation: ${spin} 2s linear infinite;
`;

const SInput = styled.input`
  width: 90%;
  max-width: 500px;
  color: #333333 !important;
  background-color: rgba(255, 255, 255, 0.7);
  font: inherit;
  font-weight: bold;
  font-size: 24px;
  padding: 15px 18px;
  margin: 0.4em;
  border: 0 !important;
  box-shadow: 0px 0px 10px ${secondary_deep_color_400} !important;
`;

export default function DepositModal({ show, setShow }: { show: boolean; setShow: any }) {
  const [functions, setFunctions] = useState<Functions | null>(null);
  const [loading, setLoading] = useState(false);
  const [deposit, setDeposit] = useState<number>();

  useEffect(() => {
    const functions = getFunctions(app);
    functions && setFunctions(functions);
  }, []);

  const onChange = useCallback((event: any) => {
    let value = event.target.value;

    setDeposit(value);
  }, []);

  const makeDeposit = useCallback(() => {
    setLoading(true);

    const value = Math.sign(deposit!);

    if (value !== 1) {
      alert("Please enter a valid amount in dollars");
      return setLoading(false);
    }

    if (functions !== null) {
      const userDeposit = httpsCallable(functions, "user-deposit");

      userDeposit({ deposit: deposit })
        .then((result) => {
          const response: any = result.data;

          const parsedData = JSON.parse(response);

          const error = response?.error;

          if (parsedData) {
            if (parsedData.success) {
              const redirectUrl = parsedData.data.redirect_url;

              // redirect to the payment page
              window.location.href = redirectUrl;
            } else {
              // errors from globee
              parsedData.errors.forEach((e: any) => {
                alert(e.message);
              });
            }
          } else if (error) {
            alert(error.errorInfo.message);
          }
        })
        .catch((e) => console.error(e))
        .finally(() => setLoading(false));
    }
  }, [deposit]);

  return (
    <BaseModal show={show} setShow={setShow} title="Deposit">
      <SDepositModal>
        <SContainer>
          <div>
            <label htmlFor="deposit" style={{ color: "white" }}>
              Amount
            </label>
            <SContainer1>
              <h2 style={{ color: "white", margin: 0 }}>$</h2>
              <SInput
                type="number"
                id="deposit"
                onChange={(e) => onChange(e)}
                value={deposit}
              />
              <SLoader style={{ display: loading ? "block" : "none" }} />
            </SContainer1>
          </div>
        </SContainer>
        <br />
        <Button
          style={{ fontSize: 18, width: "50%", margin: "auto", maxWidth: 500 }}
          click={() => makeDeposit()}
        >
          <p style={{ fontSize: 18, margin: "auto", textAlign: "center" }}>Deposit</p>
        </Button>
      </SDepositModal>
    </BaseModal>
  );
}
