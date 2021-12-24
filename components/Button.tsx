import React from "react";
import styled, { keyframes } from "styled-components";
import { almostBlack, darkBlue } from "../constant/colors";

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  `;

const SButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${darkBlue};
  color: white;
  padding: 0.9em 3em;
  border-radius: 7.5px;
  cursor: pointer;
  text-align: center;
  font-weight: 500;
  font-size: 1.3em;
`;

const SLoader = styled.div`
  border: 3.5px solid #f3f3f3;
  border-radius: 50%;
  border-top: 3.5px solid ${almostBlack};
  min-width: 17px;
  min-height: 17px;
  animation: ${spin} 2s linear infinite;
`;

export default function Button({
  text,
  backgroundColor,
  click,
  loading,
}: {
  text: string;
  backgroundColor?: string;
  click?: any;
  loading?: boolean;
}) {
  return (
    <SButton onClick={click} style={{ backgroundColor, textAlign: "center" }}>
      {loading ? (
        <SLoader style={{ display: loading ? "block" : "none" }} />
      ) : (
        text
      )}
    </SButton>
  );
}
