import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import { generateAPIKey } from "../utils/crypto";

const db = admin.firestore();

export default functions.auth.user().onCreate(async (merchant) => {
  const generated = await generateAPIKey();
  const { apiKey } = generated!;
  return db
    .collection("merchants")
    .doc(merchant.uid)
    .set({ apiKey }, { merge: true })
    .catch((error) => {
      functions.logger.error(error);
    });
});
