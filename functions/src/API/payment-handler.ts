import * as functions from "firebase-functions";
import { callWebHook, refund } from "../utility/payment";
import { checkTx, sendTx } from "../utility/reef";
import { PaymentDoc } from "../utility/types";

// When a new payment request is made calls checkTx
export default functions.firestore
  .document("/paymentRequest/{documentId}")
  .onCreate(async (snap, context) => {
    const doc = snap.data() as PaymentDoc;
    const status = await checkTx(doc);

    functions.logger.info("Transaction Status: " + status);

    switch (status) {
      case "paid":
        await paid(doc);
        break;

      case "unpaid":
        await unpaid(doc);
        break;

      case "overpaid":
        await overPaid(doc);
        break;

      case "underpaid":
        await underPaid(doc);
        break;

      default:
        functions.logger.info("unhandled event");
        break;
    }
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
