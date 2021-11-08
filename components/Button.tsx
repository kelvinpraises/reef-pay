import React from "react";
import styled from "styled-components";
import { darkBlue } from "../constant/colors";

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
`;

export default function Button({
  text,
  backgroundColor,
  click,
}: {
  text: string;
  backgroundColor?: string;
  click: any;
}) {
  return (
    <SButton onClick={click} style={{ backgroundColor, textAlign: "center" }}>
      {text}
    </SButton>
  );
}
