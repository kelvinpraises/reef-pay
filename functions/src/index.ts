import { paymentHandler, checkoutHandler } from "./API/payment-handler";
import PaymentRequest from "./API/payment-request";
import oncreate from "./merchant/oncreate";
import generateAPIKey from "./merchant/reGenerateApiKey";
import saveWalletAddress from "./merchant/saveWalletAddress";

// API to the app version 1
exports.api = PaymentRequest;
exports.paymentHandler = paymentHandler;
exports.checkoutHandler = checkoutHandler;

exports.saveWalletAddress = saveWalletAddress;
exports.generateAPIKey = generateAPIKey;
exports.oncreate = oncreate;
