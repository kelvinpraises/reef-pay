import { ApiPromise, Keyring } from "@polkadot/api";
import { WsProvider } from "@polkadot/rpc-provider";
import { options } from "@reef-defi/api";
import { overPaid, paid, underPaid, unpaid } from "../API/payment-handler";
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

  const { generatedWallet, amount } = doc;

  const unsub = await api.query.system.account(
    generatedWallet!,
    async ({ data: { free: currentFree } }) => {
      let currentBalance = currentFree as unknown as number;
      currentBalance = currentBalance / 1000000000000000000;

      if (currentBalance == amount!) {
        unsub();
        await paid(doc);
      } else if (currentBalance > amount!) {
        unsub();
        await overPaid(doc);
      } else if (currentBalance > 0 && currentBalance < amount!) {
        unsub();
        await underPaid(doc);
      }
    }
  );

  // A 5 minute count down timer that calls unpaid
  setTimeout(async () => {
    await unpaid(doc);
    unsub();
  }, 300000);
}
