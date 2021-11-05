import functions = require("firebase-functions");
import { checkTx, sendTx } from "./utils/reef";
import { PaymentDoc } from "./utils/types";
import { callWebHook } from "./utils/payment";

// When a new payment request is made checkTx
export default functions.firestore
  .document("/paymentRequest/{documentId}")
  .onCreate(async (snap, context) => {
    const doc = snap.data() as PaymentDoc;
    await checkTx(doc, paid, unpaid, underPaid, overPaid);
  });

const paid = async (doc: PaymentDoc) => {
  const { callbackUrl, mnemonic, address, amount } = doc;

  callWebHook(callbackUrl!, "payment.paid.success");

  // TODO: recursively call transfer to merchants addrees
  sendTx(mnemonic!, address!, amount!)
    .catch(console.error)
    .finally(() => process.exit());
};

const unpaid = async (doc: PaymentDoc) => {
  const { callbackUrl } = doc;

  callWebHook(callbackUrl!, "payment.unpaid.failed");
};

const underPaid = async (doc: PaymentDoc) => {
  const { callbackUrl } = doc;

  callWebHook(callbackUrl!, "payment.underpaid.failed");

  // TODO: call refund
};

const overPaid = async (doc: PaymentDoc) => {
  const { callbackUrl, mnemonic, address, amount } = doc;

  callWebHook(callbackUrl!, "payment.overpaid.success");

  // TODO: recursively call transfer to merchants address
  sendTx(mnemonic!, address!, amount!)
    .catch(console.error)
    .finally(() => process.exit());

  // TODO: call refund
};

// // Grab the current value of what was written to Firestore.
// const original = snap.data().original;

// // Access the parameter `{documentId}` with `context.params`
// functions.logger.log("Uppercasing", context.params.documentId, original);

// const uppercase = original.toUpperCase();

// // TODO: add merchantId
// const address = "";
// const amount = 4;
// const time = new Date();

// const data = { address, amount, time };

// await checkTx(data, paid, unpaid, underPaid, overPaid);

// // You must return a Promise when performing asynchronous tasks inside a Functions such as
// // writing to Firestore.
// // Setting an 'uppercase' field in Firestore document returns a Promise.
// return snap.ref.set({ uppercase }, { merge: true });
//
//
//
//
//
//
//
// const merchantId = "";
// const address = "";
// const amount = 4;
// const time = new Date();

// const doc = { merchantId, address, amount, time };
