export interface PaymentRequest {
  amount: any;
  success_url: string;
  cancel_url: string;
  callbackUrl: string;
}

export interface PaymentResponse {
  url: string;
  transactionId: string;
}

export interface TXBalance {
  merchantId: string;
  address: string;
  amount: number;
  time: Date;
}
