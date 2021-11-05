import paymentHandler from "./payment-handler";
import PaymentRequest from "./payment-request";
import admin = require("firebase-admin");

admin.initializeApp();

// API to the app version 1
exports.apiV1 = PaymentRequest;

exports.paymentHandler = paymentHandler;
