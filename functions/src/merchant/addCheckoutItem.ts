import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

const db = admin.firestore();

export default functions.https.onCall(
  async ({ description, price, quantity, shop, item }, context) => {
    const uid = context.auth?.uid;
    db.collection("merchants")
      .doc(uid!)
      .collection("checkout")
      .doc("shop")
      .collection(shop)
      .doc(item)
      .set({ description, price, quantity }, { merge: true })
      .catch((error) => {
        functions.logger.error(error);
      });
  }
);
