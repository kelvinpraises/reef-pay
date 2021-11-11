import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import ApiDocumentation from "../components/Documentation";

const Documentation: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Reef Pay | Documentation</title>
        <meta name="description" content="A payment processor built on reef" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div></div>
      <ApiDocumentation />
    </div>
  );
};

export default Documentation;
