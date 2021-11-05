import { ApiPromise, Keyring } from "@polkadot/api";
import { WsProvider } from "@polkadot/rpc-provider";
import { options } from "@reef-defi/api";
import bip39 = require("bip39");
import { checkUniqueMnemonic } from "./firebase";
import { TXBalance } from "./types";

// Generates the key pair
export async function generateKeyPair() {
  const provider = new WsProvider("wss://rpc-testnet.reefscan.com/ws");
  const api = new ApiPromise(options({ provider }));
  await api.isReady;

  const mnemonic = bip39.generateMnemonic();
  const keyring = new Keyring();
  const newPair = keyring.addFromUri(mnemonic);

  // TODO: Hash the mnemonic string and check for the hash here
  // Ensures key pair is unique in Database
  const isNew = await checkUniqueMnemonic(mnemonic);

  if (!isNew) {
    generateKeyPair();
  } else {
    return newPair;
  }
}

// Sign and send a transfer
export async function sendTx(
  mnemonic: string,
  address: string,
  amount: string
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
  data: TXBalance,
  paid: Function,
  unpaid: Function,
  underPaid: Function,
  overPaid: Function
) {
  const provider = new WsProvider("wss://rpc-testnet.reefscan.com/ws");
  const api = new ApiPromise(options({ provider }));
  await api.isReady;

  const { merchantId, address, amount, time } = data;

  const unsub = await api.query.system.account(
    address,
    async ({
      data: { free: currentFree, reserved: currentReserved },
      nonce: currentNonce,
    }) => {
      console.log(
        `balance: ${currentFree} reserved: ${currentReserved} nonce: ${currentNonce}`
      );
      if ((currentFree as unknown as number) === amount) {
        await paid();
        unsub();
      } else if ((currentFree as unknown as number) > amount) {
        await overPaid();
        unsub();
      } else if (
        (currentFree as unknown as number) !== 0 &&
        (currentFree as unknown as number) < amount
      ) {
        await underPaid();
        unsub();
      }
    }
  );

  // TODO: Check time
  await unpaid();
  unsub();
}
