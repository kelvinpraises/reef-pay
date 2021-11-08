export type TTransactionStatus = | "success" | "pending" | "failed" | "awaiting_approval";
export type TTransactionType = "deposit" | "withdraw" | "transfer";

export interface ITransaction {
  id: string;
  amount: string;
  amountInBtc: string;
  type: TTransactionType;
  status: TTransactionStatus;
  createdAt: string;
}
