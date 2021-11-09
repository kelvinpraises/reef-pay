import React, { ReactChild } from "react";
import styled from "styled-components";

const SEmptyState = styled.section`
  padding: 1em;
`;

const SBox = styled.div`
  height: calc(100vh - 100px - 4.6rem);
  display: grid;
  place-items: center;
`;

export default function EmptyState({ children }: { children: ReactChild }) {
  return (
    <SEmptyState>
      <SBox>
        <div>{children}</div>
      </SBox>
    </SEmptyState>
  );
}
