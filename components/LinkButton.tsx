import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { darkBlue } from "../constant/colors";

const SButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1.5em;
  border-radius: 7.8px;
  background-color: ${darkBlue};
  font-size: 1.3em;
`;

const SLink = styled.a`
  text-decoration: none;
  color: white;
`;

export default function LinkedButton({
  text,
  backgroundColor,
  href,
}: {
  text: string;
  backgroundColor?: string;
  href: string;
}) {
  return (
    <Link passHref={true} href={href}>
      <SLink>
        <SButton style={{ backgroundColor, textAlign: "center" }}>
          {text}
        </SButton>
      </SLink>
    </Link>
  );
}
