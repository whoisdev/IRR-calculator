import dayjs from "dayjs";
import getPositionHistory from "./chart/positionHistory";
import mockPositions from "./mock/mockPositions";
import transactions from "./mock/mockTransactions";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

console.log(
  JSON.stringify(
    getPositionHistory(
      dayjs.utc().subtract(30, "days").toDate(),
      dayjs.utc().subtract(1, "day").toDate(),
      mockPositions,
      transactions
    ),
    null,
    3
  )
);

export { getPositionHistory };
