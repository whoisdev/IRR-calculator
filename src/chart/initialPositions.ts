import dayjs from "dayjs";
import { Position, UniversalActivity } from "snaptrade-typescript-sdk";
import utc from "dayjs/plugin/utc";
import { PositionsMap } from "./types";

dayjs.extend(utc);

export const getCurrentPositions = (positions: Position[]) => {
  const positionMap: {
    [symbol: string]: {
      shares: number;
      currency: string;
    };
  } = {};

  positions.forEach((position) => {
    const symbol = position.symbol?.symbol?.symbol || "";
    const shares = position.units || 0;

    if (positionMap[symbol]) {
      positionMap[symbol] = {
        shares: positionMap[symbol].shares + shares,
        currency: position?.currency?.code || "USD",
      };
    } else {
      positionMap[symbol] = {
        shares,
        currency: position?.currency?.code || "USD",
      };
    }
  });

  return positionMap;
};

const getPositionsOnStartDate = (
  transactions: UniversalActivity[],
  currentPositions: PositionsMap = {}
) => {
  const positionTransactions: PositionsMap = {};
  transactions.forEach((transaction) => {
    const symbol = transaction.symbol?.symbol || "";
    const shares = transaction.units || 0;

    if (!symbol) {
      return;
    }
    if (!positionTransactions[symbol]) {
      positionTransactions[symbol] = {
        shares: 0,
        currency: transaction.currency.code,
      };
    }

    // Handle different transaction types
    switch (transaction.type) {
      case "BUY":
      case "SELL":
        positionTransactions[symbol] = {
          shares: positionTransactions[symbol].shares + shares,
          currency: transaction.currency.code,
        };
        break;
      default:
        break;
    }
  });

  const relevantSymbols = [
    ...Object.keys(positionTransactions),
    ...Object.keys(currentPositions),
  ];

  const positionsOnStartDate: PositionsMap = {};

  relevantSymbols.forEach((symbol) => {
    const currentUnits = currentPositions[symbol] || {
      shares: 0,
      currency: "USD",
    };
    const transactionUnits = positionTransactions[symbol]?.shares || 0;
    positionsOnStartDate[symbol] = {
      shares: currentUnits.shares - transactionUnits,
      currency: currentUnits.currency,
    };
  });

  return positionsOnStartDate;
};

export default getPositionsOnStartDate;
