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
  line-height: 1.4em;
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
export default function ApiDocumentation() {
  return (
    <SDocumentation>
      <SContainer>
        <SHeader>Make a payment request</SHeader>
        <SText>
          To make a successful Payment Request an API Key is generated in the
          Settings Page of the Admin Dashboard, the API Key is sent in an
          X-API-KEY Header Request and a content type of JSON
        </SText>
        <SContent>
          <SImg src="/assets/request.png" alt="" />
          <SImgText>Example Curl Request with X-API-KEY Header</SImgText>
        </SContent>
        <SText>
          The payment request object sent to the API should contain four
          mandatory feilds. The amount feild is the price to charge the payer in
          reef, successUrl is the page a payer is redirect to after a
          successfull payment is made and cancelUrl is the page to redirect to
          when a payer has not made a complete payment, the callbackUrl is the
          url the API calls when the payment is processed
        </SText>
        <SContent>
          <SImg src="/assets/payment request.png" alt="" />
          <SImgText>A Payment Request Interface</SImgText>
        </SContent>
      </SContainer>

      <SContainer>
        <SHeader>Handle a payment request response</SHeader>
        <SText>
          A successful Payment Request response is sent back in JSON with feilds
          of url which is the payment url to redirect the user to, and a
          transactionId feild which is the id of the payment request to track.
          the url feild is time sensitve and becomes invalid after 5 minutes
          with webhook call event of a payment failed type.
        </SText>
        <SContent>
          <SImg src="/assets/payment response.png" alt="" />
          <SImgText>A Payment Response Interface</SImgText>
        </SContent>
      </SContainer>

      <SContainer>
        <SHeader>Handle a webhook event</SHeader>
        <SText>
          A webhook triger from the API is made the callbackUrl provided with
          each payment request, when the transaction processing is done an event
          is sent for each payment state.
        </SText>
        <SContent>
          <SImg src="/assets/example express request.png" alt="" />
          <SImgText>Example Express App Receiving a Webhook</SImgText>
        </SContent>
        <SText>
          The response JSON object contains an event feild which could be a list
          of four possible transaction states, a &quot;payment.paid.success&quot; is sent
          out when the payer pays the exact reef tokens specified in the payment
          request, a &quot;payment.overpaid.success&quot; is sent when a payer sends in
          excess reef tokens the balance is refunded with service fees, a
          &quot;payment.unpaid.failed&quot; is sent when a user fails to pay, and a
          &quot;payment.underpaid.failed&quot; is sent when the user makes a lower than
          expected payment with the money refunded with service fee.
          transactionId feild feild is used to identify the payment and an
          amount feild specifies the reef the API handled
        </SText>
        <SContent>
          <SImg src="/assets/webhook response.png" alt="" />
          <SImgText>A Webhook Call Interface</SImgText>
        </SContent>
      </SContainer>
    </SDocumentation>
  );
}
