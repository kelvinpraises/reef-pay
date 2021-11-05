import { KeyringPair } from "@polkadot/keyring/types";
import { PaymentRequest, PaymentResponse } from "./types";

// Checks database to see if the user exists
export async function getMerchant(apiKey: string) {
  const exists = true;
  const merchantId = "3435";
  return { merchantId, exists };
}

// Checks the keypair in the database is unique
export async function checkUniqueAPIKey(apiKey: string) {
  return true;
}

// Checks the keypair in the database is unique
export async function checkUniqueMnemonic(mnemonic: string) {
  return true;
}

// Saves keypair to the database
// Creates a payment url saves to the database
export async function createPaymentDetail(
  keyPair: KeyringPair,
  mnemonic: string,
  merchantId: string,
  body: PaymentRequest
) {
  const { amount, successUrl, cancelUrl, callbackUrl } = body;

  const doc = {
    merchantId,
    transactionId: "",
    mnemonic, //TODO: hide this in the database from client and encrypt
    address: "",
    url: "",
    amount,
    time: "",
    successUrl,
    cancelUrl,
    callbackUrl,
  };
  const data: PaymentResponse = { url: "url", transactionId: "33455" };
  const saved = true;
  return { saved, data };
}

// Deletes a payment doc from the database
export async function deletePaymentDetail(transactionId: string) {
  return true;
}
