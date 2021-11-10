import { createPaymentDetail, getMerchant } from "../utility/firebase";
import { handleError } from "../utility/middleware";
import { generateKeyPair } from "../utility/reef";
import { PaymentRequest } from "../utility/types";
import * as cors from "cors";
import * as express from "express";
import * as functions from "firebase-functions";
import * as apicache from "apicache";

// TODO: use hashed API key and encrypted mnemonics in prod
// import { hashAPIKey } from "./utils/crypto";
// const hashedAPIKey = hashAPIKey(apiKey);

const app = express();
// Uncomment to use cache.
// app.use(apicache.middleware("30 minutes"));

app.use(cors({ origin: true }));

app.use((req, res, next) => {
  handleError(express.json(), req, res, next);
});

app.post("/payment-request", async (req, res) => {
  const apiKey = req.get("X-API-KEY");

  if (!apiKey) {
    res.sendStatus(400);
  } else {
    const { exists, merchantId } = await getMerchant(apiKey);

    if (!exists) res.sendStatus(400);

    const generated = await generateKeyPair();
    const { keyPair, mnemonic } = generated!;

    const body = req.body as PaymentRequest;

    const { saved, data } = await createPaymentDetail(
      keyPair,
      mnemonic,
      merchantId,
      body
    );

    if (!saved) res.sendStatus(500);

    res.send({ data });
  }
});

const main = express();
main.use('/api', app);

export default functions.https.onRequest(main);
