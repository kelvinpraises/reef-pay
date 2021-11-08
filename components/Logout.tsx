import { getAuth } from "firebase/auth";
import React from "react";
import styled from "styled-components";
import app from "../firebase/clientApp";


interface ILogout {
  show: boolean;
}

const SLogOut = styled.div`
  top: 85px;
  position: absolute;
  color: white;
  font-size: 18px;
  padding: 0.3em 1.5em;
  background-color: red;
  border-radius: 5px;
  cursor: pointer;
`;

export default function LogOut({ show = true }: ILogout) {
  const auth = getAuth(app);

  if (!show) {
    return null;
  }

  return <SLogOut onClick={() => auth.signOut()}>Logout</SLogOut>;
}
