import Link from "next/link";
import React, { FC } from "react";
import styled from "styled-components";
import { darkBlue, grey } from "../constant/colors";

interface props {
  icon: string;
  name: string;
  route: string;
  active: boolean;
  setName: React.Dispatch<React.SetStateAction<string>>;
}

interface ISNavItem {
  active: boolean;
}

const SLink = styled.a`
  text-decoration: none;
  color: white;
`;

const SNavItem = styled.div<ISNavItem>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 1em 1em;
  padding: 1em;
  border-radius: 7.8px;

  cursor: pointer;
  color: ${grey};
  font-weight: bold;

  * {
    transition: none !important;
  }

  /* &:hover {
    background-color: white;
  } */

  ${({ active }) =>
    active &&
    `
    color: white !important;
     background-color:${darkBlue};
     a{
      text-decoration: none;
      color: white !important;
     }`}
`;

const NavItem: FC<props> = ({
  icon,
  route,
  name,
  children,
  active,
  setName,
}) => {
  const location = () => {
    if (active) {
      return `/assets/${icon}-active.svg`;
    } else {
      return `/assets/${icon}-inactive.svg`;
    }
  };

  return (
    <div onClick={() => setName(name)}>
      <Link passHref={true} href={route}>
        <SLink>
          <SNavItem active={active} className={"classNames"}>
            <img src={location()} alt="" />
            &nbsp;
            <div>{name}</div>
          </SNavItem>
        </SLink>
      </Link>
    </div>
  );
};

export default NavItem;
