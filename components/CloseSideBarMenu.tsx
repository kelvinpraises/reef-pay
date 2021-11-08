import React, { ReactElement } from "react";
import styled from "styled-components";

const SButton = styled.button`
  display: none;

  @media only screen and (max-width: 950px) {
    display: block;
  }
`;

export default function CloseSideBarButton(): ReactElement {
  function onClose() {
    const sidebar = document.getElementById("sidebar") as HTMLElement;
    sidebar.style.display = "none";
  }

  return <SButton onClick={onClose} name="close side bar">close</SButton>;
}
