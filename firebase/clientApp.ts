import { initializeApp, getApp } from "firebase/app";
import { connectAuthEmulator, getAuth } from "firebase/auth";
import { connectFunctionsEmulator, getFunctions } from "firebase/functions";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";

let clientCredentials;

clientCredentials = {
  apiKey: "AIzaSyCP9DYCQj19QzrzgNtXgxP68cCh1U2Z_hY",
  authDomain: "reef-pay.firebaseapp.com",
  projectId: "reef-pay",
  storageBucket: "reef-pay.appspot.com",
  messagingSenderId: "64784496406",
  appId: "1:64784496406:web:a93a6af19dc75ab610c237",
};

const app = initializeApp(clientCredentials);

const auth = getAuth(app);
connectAuthEmulator(auth, "http://localhost:9099");

const functions = getFunctions(getApp());
connectFunctionsEmulator(functions, "localhost", 5001);

const db = getFirestore();
connectFirestoreEmulator(db, "localhost", 8081);

export default app;
