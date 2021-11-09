import { ApiPromise, Keyring } from "@polkadot/api";
import { WsProvider } from "@polkadot/rpc-provider";
import { options } from "@reef-defi/api";
import { checkUniqueMnemonic } from "./firebase";
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
  mnemonic: string,
  address: string,
  amount: number
) {
  const provider = new WsProvider("wss://rpc-testnet.reefscan.com/ws");
  const api = new ApiPromise(options({ provider }));
  await api.isReady;
  const keyring = new Keyring({ type: "sr25519" });
  const sender = keyring.addFromUri(mnemonic);
  await api.tx.balances.transfer(address, amount).signAndSend(sender);
}

// Subscribe to balance changes for our account
export async function checkTx(
  doc: PaymentDoc,
  paid: Function,
  unpaid: Function,
  underPaid: Function,
  overPaid: Function
) {
  const provider = new WsProvider("wss://rpc-testnet.reefscan.com/ws");
  const api = new ApiPromise(options({ provider }));
  await api.isReady;

  const { walletAddress, amount } = doc;

  const unsub = await api.query.system.account(
    walletAddress!,
    async ({
      data: { free: currentFree, reserved: currentReserved },
      nonce: currentNonce,
    }) => {
      const message = `balance: ${currentFree} reserved: ${currentReserved} nonce: ${currentNonce}`;
      functions.logger.info(message); // TODO: Remove in Prod

      let currentBalance = currentFree as unknown as number;
      currentBalance = currentBalance / 1000000000000000000;

      functions.logger.info(currentBalance); // TODO: Remove in Prod
      functions.logger.info(amount); // TODO: Remove in Prod

      if (currentBalance == amount!) {
        await paid(doc);
        unsub();
      } else if (currentBalance > amount!) {
        await overPaid(doc);
        unsub();
      } else if (currentBalance > 0 && currentBalance < amount!) {
        await underPaid(doc);
        unsub();
      }
    }
  );

  // A 15 minute count down timer that calls unpaid
  setTimeout(async () => {
    await unpaid(doc);
    unsub();
  }, 900000);
}
