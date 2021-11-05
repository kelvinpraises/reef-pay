import functions = require("firebase-functions");
import { checkTx, sendTx } from "./utils/reef";

// When a new payment request is made checkTx
export default functions.firestore
  .document("/paymentRequest/{documentId}")
  .onCreate(async (snap, context) => {
    const merchantId = "";
    const address = "";
    const amount = 4;
    const time = new Date();

    const data = { merchantId, address, amount, time };

    await checkTx(data, paid, unpaid, underPaid, overPaid);
  });

const paid = async (
  merchantd: string,
  mnemonic: string,
  address: string,
  amount: string
) => {
  console.log("paid");
  // TODO: call webhook with success

  // TODO: recursively call transfer to merchants addrees
  sendTx(mnemonic, address, amount)
    .catch(console.error)
    .finally(() => process.exit());
};

const unpaid = async (
  merchantId: string,
  mnemonic: string,
  address: string,
  amount: string
) => {
  console.log("unpaid");
  // TODO: call webhook with unpaid and failed
};

const underPaid = async (
  merchantId: string,
  mnemonic: string,
  address: string,
  amount: string
) => {
  console.log("under paid");
  // TODO: call webhook with underpaid and failed

  // TODO: call refund
};

const overPaid = async (
  merchantId: string,
  mnemonic: string,
  address: string,
  amount: string
) => {
  console.log("over paid");
  // TODO: call webhook with success

  // TODO: recursively call transfer to merchants address
  sendTx(mnemonic, address, amount)
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
