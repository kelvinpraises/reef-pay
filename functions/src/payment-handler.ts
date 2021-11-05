import functions = require("firebase-functions");
import { checkTx, sendTx } from "./utils/reef";
import { PaymentDoc } from "./utils/types";
import { callWebHook, refund } from "./utils/payment";

// When a new payment request is made calls checkTx
export default functions.firestore
  .document("/paymentRequest/{documentId}")
  .onCreate(async (snap, context) => {
    const doc = snap.data() as PaymentDoc;
    functions.logger.log("processing", context.params.documentId, doc);
    await checkTx(doc, paid, unpaid, underPaid, overPaid);
  });

const paid = async (doc: PaymentDoc) => {
  const { callbackUrl, mnemonic, address, amount, transactionId } = doc;

  const data = {
    event: "payment.paid.success",
    transactionId: transactionId!,
    amount: amount!,
  };

  callWebHook(callbackUrl!, data);

  // TODO: Recursively call transfer to merchants address twice then call manual review
  // TODO: Call manual review with doc details
  sendTx(mnemonic!, address!, amount!)
    .catch(console.error)
    .finally(() => process.exit());
};

const unpaid = async (doc: PaymentDoc) => {
  const { callbackUrl, transactionId, amount } = doc;

  const data = {
    event: "payment.unpaid.failed",
    transactionId: transactionId!,
    amount: amount!,
  };

  callWebHook(callbackUrl!, data);
};

const underPaid = async (doc: PaymentDoc) => {
  const { callbackUrl, transactionId, amount } = doc;

  const data = {
    event: "payment.underpaid.failed",
    transactionId: transactionId!,
    amount: amount!,
  };

  callWebHook(callbackUrl!, data);

  const refundAddress = "";
  const refundAmount = "";
  refund(refundAddress, refundAmount);
};

const overPaid = async (doc: PaymentDoc) => {
  const { callbackUrl, mnemonic, address, transactionId, amount } = doc;

  const data = {
    event: "payment.overpaid.success",
    transactionId: transactionId!,
    amount: amount!,
  };

  callWebHook(callbackUrl!, data);

  // TODO: recursively call transfer to merchants address
  sendTx(mnemonic!, address!, amount!)
    .catch(console.error)
    .finally(() => process.exit());

  const refundAddress = "";
  const refundAmount = "";
  refund(refundAddress, refundAmount);
};
