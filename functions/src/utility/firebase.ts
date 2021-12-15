import { KeyringPair } from "@polkadot/keyring/types";
import { v1 as uuidv1 } from "uuid";
import { PaymentRequest, PaymentResponse } from "./types";
import admin = require("firebase-admin");
import functions = require("firebase-functions");

process.env.FIRESTORE_EMULATOR_HOST = "localhost:8086";

admin.initializeApp();

const db = admin.firestore();

// Checks database to see if the merchant exists
export async function getMerchant(apiKey: string) {
  let exists;
  let merchantId;
  let merchantWallet;

  const merchantsRef = db.collection("merchants");

  const snapshot = await merchantsRef.where("apiKey", "==", apiKey).get();
  if (snapshot.empty) {
    return { exists: false };
  }

  snapshot.forEach((doc) => {
    merchantId = doc.id;
    merchantWallet = doc.data().merchantWallet;

    functions.logger.debug(merchantId);
    functions.logger.debug(merchantWallet);
  });

  return { merchantId, exists, merchantWallet };
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
  merchantWallet: string,
  body: PaymentRequest
) {
  let saved = false;
  const { amount, successUrl, cancelUrl, callbackUrl } = body;
  const transactionId = uuidv1();
  const url = "https://reef-pay.web.app/pay/" + transactionId;

  const doc = {
    merchantId,
    merchantWallet,
    transactionId,
    mnemonic, //TODO: hide this in the database from client and encrypt
    generatedWallet: keyPair.address,
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

export async function saveTx(
  merchantId: string,
  transactionId: string,
  hash: string,
  from: string,
  to: string,
  amount: any
) {
  const doc = {
    hash,
    from,
    to,
    amount,
    createdAt: admin.firestore.Timestamp.now(),
  };

  await db
    .collection("merchants")
    .doc(merchantId)
    .collection("transactions")
    .doc(transactionId)
    .set(doc)
    .catch((error) => {
      functions.logger.error(error);
    });
}
