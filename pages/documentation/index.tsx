import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import styled from "styled-components";
import LinkedButton from "../../components/LinkButton";

const Container = styled.div`
  display: flex;
  margin: 3em;
`;

const Margin = styled.div`
  margin-right: 2em;
`;

const Documentation: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Reef Pay | Documentation</title>
        <meta name="description" content="A payment processor built on reef" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Margin>
          <LinkedButton
            text="API Integration"
            href="/documentation/api-integration"
          />
        </Margin>
        <Margin>
          <LinkedButton
            text="Checkout Integration"
            href="/documentation/checkout-integration"
          />
        </Margin>
      </Container>
    </div>
  );
};

export default Documentation;
