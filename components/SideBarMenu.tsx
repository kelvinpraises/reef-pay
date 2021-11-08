import React, { ReactElement } from "react";
import styled from "styled-components";

const SDiv = styled.div`
  display: none;

  @media only screen and (max-width: 950px) {
    display: block;
  }
`;

export default function SideBarMenu(): ReactElement {
  function onOpen() {
    const sidebar = document.getElementById("sidebar") as HTMLElement;
    sidebar.style.display = "block";
  }

  return (
    <SDiv>
      <button onClick={onOpen} name="open side bar">
        open
      </button>
    </SDiv>
  );
}
