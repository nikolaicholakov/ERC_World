export interface IHistoryTableRow {
  sellerImg: string;
  sellerName: string;
  buyerImg: string;
  buyerName: string;
  type: "sell" | "transfer";
  date: string;
  price: number;
}

export interface IBidsTableRow {
  userImg: string;
  userName: string;
  type: "bid";
  date: string;
  offeredPrice: number;
}
