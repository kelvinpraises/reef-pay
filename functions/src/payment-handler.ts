import functions = require("firebase-functions");
import { checkTx, sendTx } from "./utils/reef";
import { PaymentDoc } from "./utils/types";
import { callWebHook, refund } from "./utils/payment";

// When a new payment request is made checkTx
export default functions.firestore
  .document("/paymentRequest/{documentId}")
  .onCreate(async (snap, context) => {
    const doc = snap.data() as PaymentDoc;
    functions.logger.log("processing", context.params.documentId, doc);
    await checkTx(doc, paid, unpaid, underPaid, overPaid);
  });

const paid = async (doc: PaymentDoc) => {
  const { callbackUrl, mnemonic, address, amount } = doc;

  callWebHook(callbackUrl!, "payment.paid.success");

  // TODO: recursively call transfer to merchants address
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

  const refumdAddress = "";
  const refundAmount = "";
  refund(refumdAddress, refundAmount);
};

const overPaid = async (doc: PaymentDoc) => {
  const { callbackUrl, mnemonic, address, amount } = doc;

  callWebHook(callbackUrl!, "payment.overpaid.success");

  // TODO: recursively call transfer to merchants address
  sendTx(mnemonic!, address!, amount!)
    .catch(console.error)
    .finally(() => process.exit());

  const refumdAddress = "";
  const refundAmount = "";
  refund(refumdAddress, refundAmount);
};
