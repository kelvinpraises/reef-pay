import React from "react";
import styled from "styled-components";

const SOverviewData = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  align-content: center;
  justify-content: center;
  text-align: center;
  gap: 2em;
  margin: 2em;
  margin-bottom: 2em;
  max-width: 100%;
`;

const SCard = styled.div`
  padding: 3em;
  width: 200px;
  height: 200px;
  border-radius: 10px;
  background-color: red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SOverviewCount = styled.div`
  color: white;
  font-size: 80px;
  padding: 0.5em;
`;

const SDescription = styled.div`
  color: white;
  font-weight: 700;
  font-size: 24px;
  padding: 0.5em;
`;

export default function OverviewData() {
  return (
    <SOverviewData>
      <SCard style={{ backgroundColor: "#47D276" }}>
        <SOverviewCount>0</SOverviewCount>
        <SDescription>Total&nbsp;Paid</SDescription>
      </SCard>
      <SCard style={{ backgroundColor: "gray" }}>
        <SOverviewCount>0</SOverviewCount>
        <SDescription>Transactions</SDescription>
      </SCard>
      <SCard style={{ backgroundColor: "orange" }}>
        <SOverviewCount>0</SOverviewCount>
        <SDescription>Payments&nbsp;Failed</SDescription>
      </SCard>
      <SCard style={{ backgroundColor: "#D24747" }}>
        <SOverviewCount>0</SOverviewCount>
        <SDescription>Account&nbsp;Errors</SDescription>
      </SCard>
    </SOverviewData>
  );
}
