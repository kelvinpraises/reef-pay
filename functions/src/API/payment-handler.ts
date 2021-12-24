import * as functions from "firebase-functions";
import { callWebHook, refund } from "../utility/payment";
import { checkTx, sendTx } from "../utility/polkadot";
import { PaymentDoc } from "../utility/types";

// When a new payment request is made calls checkTx
export const paymentHandler = functions.firestore
  .document("/paymentRequest/{documentId}")
  .onCreate(async (snap, context) => {
    const doc = snap.data() as PaymentDoc;
    await checkTx(doc);
  });

// When a new checkout request is made calls checkTx
export const checkoutHandler = functions.firestore
  .document("/checkoutRequest/{documentId}")
  .onCreate(async (snap, context) => {
    const doc = snap.data() as PaymentDoc;
    await checkTx(doc);
  });

export const paid = async (doc: PaymentDoc) => {
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
  await sendTx(
    merchantId!,
    transactionId!,
    mnemonic!,
    merchantWallet!,
    amount!
  ).catch((e) => {
    functions.logger.error(e);
  });
};

export const unpaid = async (doc: PaymentDoc) => {
  const { callbackUrl, transactionId, amount } = doc;

  const data = {
    event: "payment.unpaid.failed",
    transactionId: transactionId!,
    amount: amount!,
  };

  await callWebHook(callbackUrl!, data);
};

export const underPaid = async (doc: PaymentDoc) => {
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

export const overPaid = async (doc: PaymentDoc) => {
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
  await sendTx(
    merchantId!,
    transactionId!,
    mnemonic!,
    merchantWallet!,
    amount!
  ).catch((e) => {
    functions.logger.error(e);
  });

  const refundAddress = "";
  const refundAmount = "";
  refund(refundAddress, refundAmount);
};
