import dayjs from "dayjs";
import { Position, UniversalActivity } from "snaptrade-typescript-sdk";
import utc from "dayjs/plugin/utc";
import getPositionsOnStartDate, {
  getCurrentPositions,
} from "./initialPositions";
import { groupBy } from "lodash";
import { PositionHistory } from "./types";

dayjs.extend(utc);

export const groupedTransactions = (transactions: UniversalActivity[]) =>
  groupBy(transactions, (transaction) =>
    dayjs.utc(transaction.settlement_date).format("YYYY-MM-DD")
  );

const getPositionHistory = (
  startDate: Date,
  endDate: Date,
  accountPositions: Position[],
  transactions: UniversalActivity[]
) => {
  const relevantTransactions = transactions
    .filter((transaction) => {
      return (
        dayjs.utc(transaction.settlement_date).isAfter(startDate) ||
        dayjs.utc(transaction.settlement_date).isSame(startDate)
      );
    })
    .sort((a, b) => {
      return dayjs(a.settlement_date).unix() - dayjs(b.settlement_date).unix();
    });

  const currentPositions = getCurrentPositions(accountPositions);
  const initialPositions = getPositionsOnStartDate(
    relevantTransactions,
    currentPositions
  );
  const transactionMap = groupedTransactions(relevantTransactions);
  const positionHistory: PositionHistory[] = [];

  let positions = { ...initialPositions };

  for (
    let date = startDate;
    date <= endDate;
    date = dayjs(date).add(1, "day").toDate()
  ) {
    const transactionsOnDate = transactionMap[dayjs(date).format("YYYY-MM-DD")];

    if (transactionsOnDate) {
      transactionsOnDate.forEach((transaction) => {
        const symbol = transaction.symbol?.symbol || "";
        const units = transaction.units;
        if (transaction.type === "BUY" || transaction.type === "SELL") {
          positions[symbol] = (positions[symbol] || 0) + (units || 0);
        }
      });
    }

    // If it's the first day, use the initial positions
    const stocks = Object.entries(
      dayjs(date).isSame(startDate) ? initialPositions : positions
    ).map(([symbol, shares]) => ({
      symbol,
      shares,
      currency: "USD", // Assuming all transactions are in USD
    }));

    positionHistory.push({
      date: dayjs(date).format("YYYY-MM-DD"),
      stocks,
    });
  }

  return positionHistory;
};

export default getPositionHistory;
