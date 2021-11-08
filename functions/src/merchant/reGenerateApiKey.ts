import * as admin from "firebase-admin";
import * as functions from "firebase-functions";
import { generateAPIKey } from "../utility/crypto";

const db = admin.firestore();

export default functions.https.onCall(async (data, context) => {
  const uid = context.auth?.uid;
  const generated = await generateAPIKey();
  const { apiKey } = generated!;
  return db
    .collection("merchants")
    .doc(uid!)
    .set({ apiKey }, { merge: true })
    .catch((error) => {
      functions.logger.error(error);
    });
});
