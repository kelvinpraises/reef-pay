import paymentHandler from "./payment-handler";
import PaymentRequest from "./payment-request";
import saveWalletAdress from "./merchant/saveWalletAddress"
import generateAPIKey from "./merchant/reGenerateApiKey"
import oncreate from "./merchant/oncreate"

// API to the app version 1
exports.apiV1 = PaymentRequest;

exports.paymentHandler = paymentHandler;

exports.saveWalletAdress = saveWalletAdress;
exports.generateAPIKey = generateAPIKey;
exports.oncreate = oncreate;