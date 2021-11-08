import type { NextPage } from "next";
import Head from "next/head";
import React from "react";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>reef pay</title>
        <meta name="description" content="A payment processor built on reef" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
};

export default Home;
