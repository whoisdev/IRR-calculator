import dayjs from "dayjs";
import _, { uniq } from "lodash";
import { Position, UniversalActivity } from "snaptrade-typescript-sdk";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

export const getCurrentPositions = (positions: Position[]) => {
  const positionMap: { [symbol: string]: number } = {};

  positions.forEach((position) => {
    const symbol = position.symbol?.symbol?.symbol || "";
    const shares = position.units || 0;
    positionMap[symbol] = shares;
  });

  return positionMap;
};

const getPositionsOnStartDate = (
  transactions: UniversalActivity[],
  currentPositions: Record<string, number> = {}
) => {
  const positionTransactions: Record<string, number> = {};
  transactions.forEach((transaction) => {
    const symbol = transaction.symbol?.symbol || "";
    const shares = transaction.units || 0;

    if (!symbol) {
      return;
    }
    if (!positionTransactions[symbol]) {
      positionTransactions[symbol] = 0;
    }

    // Handle different transaction types
    switch (transaction.type) {
      case "BUY":
      case "SELL":
        positionTransactions[symbol] += shares;
        break;
      default:
        break;
    }
  });

  const relevantSymbols = uniq([
    ...Object.keys(positionTransactions),
    ...Object.keys(currentPositions),
  ]);

  const positionsOnStartDate: Record<string, number> = {};

  relevantSymbols.forEach((symbol) => {
    const currentUnits = currentPositions[symbol] || 0;
    const transactionUnits = positionTransactions[symbol] || 0;
    positionsOnStartDate[symbol] = currentUnits - transactionUnits;
  });

  return positionsOnStartDate;
};

export default getPositionsOnStartDate;
