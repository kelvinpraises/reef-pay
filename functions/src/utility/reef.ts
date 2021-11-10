import { ApiPromise, Keyring } from "@polkadot/api";
import { WsProvider } from "@polkadot/rpc-provider";
import { options } from "@reef-defi/api";
import { checkUniqueMnemonic, saveTx } from "./firebase";
import { PaymentDoc } from "./types";
import bip39 = require("bip39");
import functions = require("firebase-functions");

// Generates the key pair
export async function generateKeyPair() {
  const provider = new WsProvider("wss://rpc-testnet.reefscan.com/ws");
  const api = new ApiPromise(options({ provider }));
  await api.isReady;

  const mnemonic = bip39.generateMnemonic();
  const keyring = new Keyring();
  const keyPair = keyring.addFromUri(mnemonic);

  console.log(mnemonic);

  // TODO: Hash the mnemonic string and check for the hash hereR
  // Ensures key pair is unique in Database
  const isNew = await checkUniqueMnemonic(mnemonic);

  if (!isNew) {
    generateKeyPair();
  } else {
    return { keyPair, mnemonic };
  }
}

// Sign and send a transfer
export async function sendTx(
  merchantId: string,
  transactionId: string,
  mnemonic: string,
  address: string,
  amount: any
) {
  const provider = new WsProvider("wss://rpc-testnet.reefscan.com/ws");
  const api = new ApiPromise(options({ provider }));
  await api.isReady;
  const keyring = new Keyring({ type: "sr25519" });
  const sender = keyring.addFromUri(mnemonic);
  const hash = await api.tx.balances
    .transfer(address, amount)
    .signAndSend(sender);
  await saveTx(
    merchantId,
    transactionId,
    "" + hash,
    sender.address,
    address,
    amount
  );
}

// Subscribe to balance changes for our account
export async function checkTx(doc: PaymentDoc) {
  const provider = new WsProvider("wss://rpc-testnet.reefscan.com/ws");
  const api = new ApiPromise(options({ provider }));
  await api.isReady;

  let status = "";

  const { generatedWallet, amount } = doc;

  const unsub = await api.query.system.account(
    generatedWallet!,
    ({
      data: { free: currentFree, reserved: currentReserved },
      nonce: currentNonce,
    }) => {
      let currentBalance = currentFree as unknown as number;
      currentBalance = currentBalance / 1000000000000000000;

      if (currentBalance == amount!) {
        status = "paid";
      } else if (currentBalance > amount!) {
        status = "overpaid";
      } else if (currentBalance > 0 && currentBalance < amount!) {
        status = "underpaid";
      }
    }
  );

  // A 5 minute count down timer that calls unpaid
  setTimeout(() => {
    status = "unpaid";
  }, 300000);

  if (status.length > 0) {
    unsub();
    return status;
  }
}
