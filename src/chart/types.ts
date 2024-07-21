export type PositionsMap = Record<
  string,
  {
    shares: number;
    currency: string;
  }
>;

export type PositionHistoryStock = {
  symbol: string;
  shares: number;
  price?: number;
  currency: string;
};

export type PositionHistory = {
  date: string;
  stocks: PositionHistoryStock[];
  sum?: number;
};
