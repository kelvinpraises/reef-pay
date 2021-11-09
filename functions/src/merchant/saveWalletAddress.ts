import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

const db = admin.firestore();

export default functions.https.onCall(async ({ walletAddress }, context) => {
  const uid = context.auth?.uid;
  return db
    .collection("merchants")
    .doc(uid!)
    .set({ walletAddress: walletAddress }, { merge: true })
    .catch((error) => {
      functions.logger.error(error);
    });
});
