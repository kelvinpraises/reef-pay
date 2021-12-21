import * as functions from "firebase-functions";
import * as https from "https";
import { WebHookData } from "./types";

export async function callWebHook(callbackUrl: string, data: WebHookData) {
  const { transactionId, event, amount } = data;
  const { hostname, pathname } = new URL(callbackUrl);

  const postData = JSON.stringify({
    event: event,
    transactionId: transactionId,
    amount: amount,
  });

  const options = {
    method: "POST",
    hostname: hostname,
    path: pathname,
    headers: {
      "Content-Type": "application/json",
    },
    maxRedirects: 20,
  };

  await new Promise((resolve, reject) => {
    const req = https.request(options, function (res) {
      const chunks: any[] = [];

      res.on("data", function (chunk) {
        chunks.push(chunk);
      });

      res.on("end", function () {
        try {
          const body = Buffer.concat(chunks).toString();
          // TODO: resolve res.statusCode and know wether to retry webhook
          resolve(body);
        } catch (error) {
          reject(error);
        }
      });

      res.on("error", function (error) {
        console.error(error);
        reject(error);
      });
    });

    req.write(postData);

    req.end();
  });
}

export async function refund(address: string, amount: any) {}
