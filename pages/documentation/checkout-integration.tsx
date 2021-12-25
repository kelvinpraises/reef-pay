import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import styled from "styled-components";

const SDocumentation = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  width: 75%;
  max-width: 900px;
  margin-left: 3em;
  margin-top: 2em;
`;

const SContainer = styled.h1`
  margin-bottom: 3em;
`;

const SHeader = styled.h1`
  color: white;
  font-size: 45px;
  margin-bottom: 1em;
`;

const SImg = styled.img`
  width: 100%;
  border-radius: 15px;
`;

const SImgText = styled.div`
  font-size: 16px;
`;

const SText = styled.div`
  color: white;
  margin-bottom: 1em;
  font-size: 20px;
  line-height: 1.7;
`;

const SContent = styled.div`
  color: white;
  margin-bottom: 4em;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 90%;
`;

const CheckoutIntegration: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Reef Pay | Checkout Integration</title>
        <meta name="description" content="A payment processor built on reef" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SDocumentation>
        <SContainer>
          <SHeader>What&apos;s a Checkout Quickshop?</SHeader>
          <SText>
            Checkout enable merchants to quicky accept payments in reef without
            the need for an intermediary server, while Quickshops is a service
            under Checkout that groups items with fixed prices that don&apos;t
            change often under a shop. You can create as much shops for as much
            services you need to charge in reef.
          </SText>
        </SContainer>

        <SContainer>
          <SHeader>Add a Checkout Quickshop</SHeader>
          <SText>
            To add a new shop, go to the menu on the left and click the Checkout
            nav with a cart icon and select the &quot;Create New Shop&quot;
            button.
          </SText>
          <SText>
            Ensure the &quot;Shop ID&quot; is unique to the shop. Add new items
            to the shop, the expected item properties are &quot;Item Name&quot;
            representing the name of the item in the shop, the &quot;Item
            Price&quot; which represents the price of the item in the shop and
            the &quot;Item Quantity&quot; this is the amount of items to sell
            before the stock runs out, leaving it empty means the item is in
            unlimited supply such as a fungible digital good.
          </SText>
        </SContainer>

        <SContainer>
          <SHeader>Integrate the SDK in your website</SHeader>
          <SText>
            1. Copy the shops configuration from checkout by clicking &quot;Shop
            Config&quot; button.
          </SText>
          <SContent>
            <SImg src="/assets/example config.png" alt="" />
            <SImgText>An Example Quickshop Config</SImgText>
          </SContent>
          <SText>
            2. Add the JavaScript SDK CDN link as the first script tag to your
            website.{" "}
            <span style={{ color: "goldenrod" }}>
              https://cdn.jsdelivr.net/gh/kelvinpraises/reef-pay-checkout-sdk@main/dist/bundle.js
            </span>
          </SText>

          <SContent>
            <SImg src="/assets/sdk.png" alt="" />
            <SImgText>Example Code Snippet Using SDK</SImgText>
          </SContent>
          <SText>
            3. Pass the configuration copied in{" "}
            <span style={{ fontWeight: "bold" }}>Step 1</span> to the SDK{" "}
            <span style={{ fontWeight: "bold", color: "goldenrod" }}>
              initializeShop
            </span>{" "}
            function to initialize the shop. The{" "}
            <span style={{ fontWeight: "bold", color: "goldenrod" }}>
              initializeShop
            </span>{" "}
            function returns a{" "}
            <span style={{ fontWeight: "bold", color: "goldenrod" }}>
              Checkout
            </span>{" "}
            function which accepts an{" "}
            <span style={{ fontWeight: "bold" }}>itemId</span> parameter.
          </SText>
          <SContent>
            <SImg src="/assets/initialize shop.png" alt="" />
            <SImgText>Initialize SDK to get Checkout Function</SImgText>
          </SContent>
          <SText>
            4. Call the{" "}
            <span style={{ fontWeight: "bold", color: "goldenrod" }}>
              Checkout
            </span>{" "}
            function with the <span style={{ fontWeight: "bold" }}>itemId</span>{" "}
            in an onclick event. The{" "}
            <span style={{ fontWeight: "bold" }}>itemId</span> parameter to be
            passed is the name of any item in a shop the config got copied from
          </SText>
          <SContent>
            <SImg src="/assets/checkout.png" alt="" />
            <SImgText>Call Checkout To Initialize Payments</SImgText>
          </SContent>
          <SText>
            5. The{" "}
            <span style={{ fontWeight: "bold", color: "goldenrod" }}>
              Checkout
            </span>{" "}
            function call opens a{" "}
            <a
              href="https://www.reefpay.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              reefpay.io
            </a>{" "}
            payment link for the shop&apos;s item
          </SText>
        </SContainer>
      </SDocumentation>
    </div>
  );
};

export default CheckoutIntegration;
