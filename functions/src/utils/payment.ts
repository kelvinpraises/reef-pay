import * as https from "https";
import { WebHookData } from "./types";

export async function callWebHook(callbackUrl: string, data: WebHookData) {
  const { transactionId, event } = data;
  const { hostname, pathname } = new URL(callbackUrl);

  const postData = JSON.stringify({
    data: {
      id: transactionId,
      amount: 1000,
      created: Date.now(),
    },
    type: event,
  });

  const options = {
    method: "POST",
    hostname: hostname,
    path: pathname,
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
