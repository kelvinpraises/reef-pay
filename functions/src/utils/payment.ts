import { WebHookData } from "./types";

export async function callWebHook(callbackUrl: string, data: WebHookData) {
  /* 
    {
  "id": "evt_1CiPtv2eZvKYlo2CcUZsDcO6",
  "object": "event",
  "api_version": "2018-05-21",
  "created": 1530291411,
  "data": {
    "object": {
      "id": "src_1CiPsl2eZvKYlo2CVVyt3LKy",
      "object": "source",
      "amount": 1000,
      "client_secret": "src_client_secret_D8hHhtdrGWQyK8bLM4M3uFQ6",
      "created": 1530291339,
      "currency": "eur",
      "flow": "redirect",
      "livemode": false,
      "metadata": {},
      "owner": {
        "address": null,
        "email": null,
        "name": null,
        "phone": null,
        "verified_address": null,
        "verified_email": null,
        "verified_name": "Jenny Rosen",
        "verified_phone": null
      },
      "redirect": {
        "failure_reason": null,
        "return_url": "https://minkpolice.com",
        "status": "succeeded",
        "url": "https://hooks.stripe.com/redirect/authenticate/src_1CiPsl2eZvKYlo2CVVyt3LKy?client_secret=src_client_secret_D8hHhtdrGWQyK8bLM4M3uFQ6"
      },
      "sofort": {
        "country": "DE",
        "bank_code": "DEUT",
        "bank_name": "Deutsche Bank",
        "bic": "DEUTDE2H",
        "iban_last4": "3000",
        "statement_descriptor": null,
        "preferred_language": null
      },
      "statement_descriptor": null,
      "status": "chargeable",
      "type": "sofort",
      "usage": "single_use"
    }
  },
  "livemode": false,
  "pending_webhooks": 0,
  "request": {
    "id": null,
    "idempotency_key": null
  },
  "type": "source.chargeable"
}
 */
}

export async function refund(address: string, amount: any) {}
