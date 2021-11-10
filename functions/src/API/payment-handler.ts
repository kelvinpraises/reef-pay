import * as functions from "firebase-functions";
import { checkTx, sendTx } from "../utility/reef";
import { PaymentDoc } from "../utility/types";
import { callWebHook, refund } from "../utility/payment";

// When a new payment request is made calls checkTx
export default functions.firestore
  .document("/paymentRequest/{documentId}")
  .onCreate(async (snap, context) => {
    const doc = snap.data() as PaymentDoc;
    await checkTx(doc, paid, unpaid, underPaid, overPaid);
  });

const paid = async (doc: PaymentDoc) => {
  const {
    callbackUrl,
    mnemonic,
    merchantWallet,
    merchantId,
    amount,
    transactionId,
  } = doc;

  const data = {
    event: "payment.paid.success",
    transactionId: transactionId!,
    amount: amount!,
  };

  await callWebHook(callbackUrl!, data);

  // TODO: If error recursively call transfer to merchants address twice then call manual review
  // TODO: Call manual review with doc details
  await sendTx(merchantId!, transactionId!, mnemonic!, merchantWallet!, amount!)
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

  await callWebHook(callbackUrl!, data);
};

const underPaid = async (doc: PaymentDoc) => {
  const { callbackUrl, transactionId, amount } = doc;

  const data = {
    event: "payment.underpaid.failed",
    transactionId: transactionId!,
    amount: amount!,
  };

  await callWebHook(callbackUrl!, data);

  const refundAddress = "";
  const refundAmount = "";
  refund(refundAddress, refundAmount);
};

const overPaid = async (doc: PaymentDoc) => {
  const {
    callbackUrl,
    mnemonic,
    merchantWallet,
    merchantId,
    transactionId,
    amount,
  } = doc;

  const data = {
    event: "payment.overpaid.success",
    transactionId: transactionId!,
    amount: amount!,
  };

  await callWebHook(callbackUrl!, data);

  // TODO: recursively call transfer to merchants address
  await sendTx(merchantId!, transactionId!, mnemonic!, merchantWallet!, amount!)
    .catch(console.error)
    .finally(() => process.exit());

  const refundAddress = "";
  const refundAmount = "";
  refund(refundAddress, refundAmount);
};
