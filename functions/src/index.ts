import paymentHandler from "./API/payment-handler";
import PaymentRequest from "./API/payment-request";
import saveWalletAddress from "./merchant/saveWalletAddress"
import generateAPIKey from "./merchant/reGenerateApiKey"
import oncreate from "./merchant/oncreate"

// API to the app version 1
exports.apiV1 = PaymentRequest;
exports.paymentHandler = paymentHandler;

exports.saveWalletAddress = saveWalletAddress;
exports.generateAPIKey = generateAPIKey;
exports.oncreate = oncreate;