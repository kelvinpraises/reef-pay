import { useRouter } from "next/router";
import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { almostBlack, darkBlue } from "../constant/colors";
import CloseSideBarButton from "./CloseSideBarMenu";
import NavItem from "./NavItem";
import SideBarMenu from "./SideBarMenu";

const navbar_height = "100px";
const sidebar_width = "250px";

const SLayout = styled.div`
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  position: fixed;
  background: ${almostBlack};

  @media only screen and (min-width: 950px) {
    display: grid;
  }
`;

const SSidebar = styled.div`
  background-color: ${almostBlack};
  position: fixed;
  height: 100%;
  z-index: 20;
  border-right: solid 5px ${darkBlue};
  padding: 0px;
  margin: 0px;
  overflow: auto;
  display: block;

  @media only screen and (max-width: 950px) {
    display: none;
    width: 250px;
  }

  @media only screen and (min-width: 950px) {
    width: ${sidebar_width};
    max-width: 250px;
    display: block;
  }
`;

const SMain = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px;
  margin: 0px;
  max-width: 100%;
  position: relative;

  @media only screen and (min-width: 950px) {
    width: calc(100vw - ${sidebar_width});
    margin-left: ${sidebar_width};
  }
`;

const SLogo = styled.div`
  display: flex;
  align-items: center;
  height: ${navbar_height};
  padding: 0 0 0 1em;
`;

const SNavBar = styled.header`
  position: fixed;
  width: 100%;
  height: ${navbar_height};
  padding: 0px;
  background-color: ${almostBlack};
  z-index: 1;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 950px) {
    width: 100%;
    align-content: center;
    justify-content: space-between;
  }

  @media only screen and (min-width: 950px) {
    width: 100%;
    align-content: space-between;
    justify-content: space-between;
  }
`;

const SNavBarActions = styled.div`
  display: flex;

  @media only screen and (max-width: 950px) {
    display: none;
  }
`;

const SButton = styled.button`
  display: block;

  @media only screen and (max-width: 950px) {
    display: none;
  }
`;

const SContent = styled.main`
  width: 100%;
  height: calc(100vh - ${navbar_height});
  position: relative;
  top: ${navbar_height};
  overflow-y: auto !important;
  z-index: 0;

  div {
    /* overflow: auto !important; */
  }
`;

export default function Layout({ children }: { children: any }) {
  const router = useRouter();

  const childElement = useRef<HTMLDivElement | null>(null);

  const [state, setName] = useState("null");

  useEffect(() => {
    const topPos = childElement.current as HTMLElement;
    topPos.scrollIntoView();
  });

  const setActive = useCallback(
    (name: string) => {
      console.log(name);
      return name === state ? true : false;
    },
    [state]
  );

  return (
    <SLayout>
      <SSidebar id="sidebar">
        <div
          style={{ display: "flex", flexDirection: "column", height: "100%" }}
        >
          <SLogo>
            <img src="assets/reef-pay-small.png" alt="" />
            <div style={{ flexGrow: 1 }}></div>
            <CloseSideBarButton />
          </SLogo>
          <NavItem
            setName={setName}
            active={setActive("Overview")}
            route="/overview"
            name="Overview"
            icon="home"
          />
          <NavItem
            setName={setName}
            active={setActive("Transactions")}
            route="/transactions"
            name="Transactions"
            icon="chart"
          />
          <NavItem
            setName={setName}
            active={setActive("Settings")}
            route="/settings"
            name="Settings"
            icon="setting"
          />
          <div style={{ flexGrow: 1 }}></div>
          <NavItem
            setName={setName}
            active={setActive("API Doc")}
            route="/documentation"
            name="API Doc"
            icon="document"
          />
        </div>
      </SSidebar>
      <SMain>
        <>
          <SNavBar>
            <SNavBarActions></SNavBarActions>

            <SideBarMenu />
          </SNavBar>

          <SContent>
            <div ref={childElement}>{children}</div>
          </SContent>
        </>
      </SMain>
    </SLayout>
  );
}
