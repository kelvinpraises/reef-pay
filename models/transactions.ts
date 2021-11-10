export type TTransactionStatus = "success" | "pending" | "failed";
export type TTransactionType = "deposit" | "withdraw" | "transfer";

export interface ITransaction {
  id: string;
  amount: string;
  status: TTransactionStatus;
  createdAt: string;
}
