export interface PaymentRequest {
  amount: any;
  successUrl: string;
  cancelUrl: string;
  callbackUrl: string;
}

export interface PaymentResponse {
  url: string;
  transactionId: string;
}

export interface PaymentDoc {
  merchantId?: string;
  merchantWallet?: string;
  transactionId?: string;
  mnemonic?: string; //TODO: hide this in the database from client and encrypt
  generatedWallet?: string;
  url?: string;
  amount?: number;
  successUrl?: string;
  cancelUrl?: string;
  callbackUrl?: string;
  createdAt?: any;
}

export interface WebHookData {
  transactionId: string;
  amount: number;
  event: string;
}

export interface CheckoutData {
  apiKey: string;
  checkoutType: string;
  checkoutId: string;
  itemId: string;
  buyerId?: string;
}
