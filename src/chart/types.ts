export type InitialPositions = Record<string, number>;
export type CurrentPositions = Record<string, number>;

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
