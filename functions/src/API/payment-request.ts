import * as cors from "cors";
import * as express from "express";
import * as functions from "firebase-functions";
import {
  createCheckoutDetail,
  createPaymentDetail,
  getItemCheckoutAmount,
  getMerchant,
} from "../utility/firebase";
import { handleError } from "../utility/middleware";
import { generateKeyPair } from "../utility/reef";
import { CheckoutRequest, PaymentRequest } from "../utility/types";

// TODO: Uncomment to use cache, and hashed API key and encrypted mnemonics in prod.
// import { hashAPIKey } from "./utils/crypto";
// const hashedAPIKey = hashAPIKey(apiKey);
// import * as apicache from "apicache";
// app.use(apicache.middleware("30 minutes"));

const app = express();

app.use(cors({ origin: true }));

app.use((req, res, next) => {
  handleError(express.json(), req, res, next);
});

app.post("/payment-request", async (req, res) => {
  const apiKey = req.get("X-API-KEY");

  if (!apiKey) {
    res.sendStatus(400);
  } else {
    const { exists, merchantId, merchantWallet } = await getMerchant(apiKey);

    if (exists == false) return res.sendStatus(400);

    const generated = await generateKeyPair();
    const { keyPair, mnemonic } = generated!;

    const body = req.body as PaymentRequest;

    const { saved, data } = await createPaymentDetail(
      keyPair,
      mnemonic,
      merchantId!,
      merchantWallet!,
      body
    );

    if (saved === false) return res.sendStatus(500);

    return res.send({ data });
  }
});

app.post("/checkout-request", async (req, res) => {
  // TODO: version the SDK's!!!
  const version = req.get("SDK-Version");
  const apiKey = req.get("X-API-KEY");

  if (!version) {
    res.sendStatus(400);
  } else if (!apiKey) {
    res.sendStatus(400);
  } else {
    const body = req.body as CheckoutRequest;

    const { exists, merchantId, merchantWallet } = await getMerchant(apiKey);

    if (exists === false) return res.sendStatus(400);

    const generated = await generateKeyPair();
    const { keyPair, mnemonic } = generated!;

    const { exists: itemExists, amount } = await getItemCheckoutAmount(
      merchantId!,
      body
    );

    if (itemExists === false) return res.sendStatus(400);

    const { saved, data } = await createCheckoutDetail(
      keyPair,
      mnemonic,
      merchantId!,
      merchantWallet!,
      amount
    );

    if (saved == false) return res.sendStatus(500);

    return res.send({ data });
  }
});

const main = express();
main.use("/api", app);

export default functions.https.onRequest(main);
