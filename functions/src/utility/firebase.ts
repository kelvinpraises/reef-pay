import { KeyringPair } from "@polkadot/keyring/types";
import { PaymentRequest, PaymentResponse } from "./types";
import admin = require("firebase-admin");
import { v1 as uuidv1 } from "uuid";
import functions = require("firebase-functions");

admin.initializeApp();

const db = admin.firestore();

// Checks database to see if the merchant exists
export async function getMerchant(apiKey: string) {
  const exists = true;
  const merchantId = "3435";
  return { merchantId, exists };
}

// TODO:
// Checks the keypair in the database is unique
export async function checkUniqueAPIKey(apiKey: string) {
  return true;
}

// TODO:
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
  let saved;
  const { amount, successUrl, cancelUrl, callbackUrl } = body;
  const transactionId = uuidv1();
  const url = "https://www.reef-pay.web.app/pay/" + transactionId;

  const doc = {
    merchantId,
    transactionId,
    mnemonic, //TODO: hide this in the database from client and encrypt
    walletAddress: keyPair.address,
    url,
    amount,
    successUrl,
    cancelUrl,
    callbackUrl,
    createdAt: admin.firestore.Timestamp.now(),
  };

  await db
    .collection("paymentRequest")
    .doc(transactionId)
    .set(doc)
    .then(() => {
      saved = true;
    })
    .catch((error) => {
      saved = false;
      functions.logger.error(error);
    });

  const data: PaymentResponse = { url, transactionId };
  return { saved, data };
}

// TODO:
// Deletes a payment doc from the database
export async function deletePaymentDetail(transactionId: string) {
  return true;
}
