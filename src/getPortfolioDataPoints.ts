import {
  AccountHoldingsAccount,
  UniversalActivity,
} from "snaptrade-typescript-sdk";

export enum TradeAction {
  BUY = "BUY",
  SELL = "SELL",
  BUY_COVER = "BUY_COVER",
  SELL_SHORT = "SELL_SHORT",
  BUY_OPEN = "BUY_OPEN",
  BUY_CLOSE = "BUY_CLOSE",
  SELL_OPEN = "SELL_OPEN",
  SELL_CLOSE = "SELL_CLOSE",
  DIVIDEND = "DIVIDEND",
  CONTRIBUTION = "CONTRIBUTION",
  WITHDRAWAL = "WITHDRAWAL",
  EXTERNAL_ASSET_TRANSFER_IN = "EXTERNAL_ASSET_TRANSFER_IN",
  EXTERNAL_ASSET_TRANSFER_OUT = "EXTERNAL_ASSET_TRANSFER_OUT",
  INTERNAL_CASH_TRANSFER_IN = "INTERNAL_CASH_TRANSFER_IN",
  INTERNAL_CASH_TRANSFER_OUT = "INTERNAL_CASH_TRANSFER_OUT",
  INTERNAL_ASSET_TRANSFER_IN = "INTERNAL_ASSET_TRANSFER_IN",
  INTERNAL_ASSET_TRANSFER_OUT = "INTERNAL_ASSET_TRANSFER_OUT",
  INTEREST = "INTEREST",
  REBATE = "REBATE",
  GOV_GRANT = "GOV_GRANT",
  TAX = "TAX",
  FEE = "FEE",
  REI = "REI",
  FXT = "FXT",
}

interface CashFlow {
  date: Date;
  amount: number;
}

interface PortfolioMetrics {
  initialInvestment: number;
  cashFlows: CashFlow[];
  finalValue: number;
  finalDate: Date;
}

function calculatePortfolioMetrics(
  positions: AccountHoldingsAccount[],
  transactions: UniversalActivity[]
): PortfolioMetrics {
  let initialInvestment = 0;
  const cashFlows: CashFlow[] = [];
  let finalValue = 0;
  let finalDate: Date = new Date(0);

  // Sort transactions by settlement date
  transactions.sort(
    (a, b) =>
      new Date(a.settlement_date || a.trade_date || 0).getTime() -
      new Date(b.settlement_date || b.trade_date || 0).getTime()
  );

  // Calculate initial investment and cash flows
  transactions.forEach((transaction) => {
    const amount = transaction.amount || 0;
    const date = new Date(
      transaction.settlement_date || transaction.trade_date || new Date()
    );

    if (transaction.type === TradeAction.CONTRIBUTION) {
      initialInvestment += amount;
      cashFlows.push({ date, amount });
    } else if (transaction.type === TradeAction.BUY) {
      cashFlows.push({ date, amount: amount });
    } else if (transaction.type === TradeAction.SELL) {
      cashFlows.push({ date, amount });
    } else if (transaction.type === TradeAction.WITHDRAWAL) {
      cashFlows.push({ date, amount: amount });
    } else if (transaction.type === TradeAction.DIVIDEND) {
      cashFlows.push({ date, amount: amount });
    }

    if (date > finalDate) {
      finalDate = date;
    }
  });

  console.log("Initial Investment:", initialInvestment);
  console.log("Cash Flows:", cashFlows);

  // Calculate final value of the portfolio
  positions.forEach((position) => {
    finalValue += position.units * position.price;
    console.log(
      `Position: ${position.symbol.description}, Units: ${
        position.units
      }, Fractional Units: ${position.fractional_units || 0}, Price: ${
        position.price
      }, Total: ${
        (position.units + (position.fractional_units || 0)) * position.price
      }`
    );
  });

  console.log("Final Value Calculated:", finalValue);

  // Determine the final date
  if (positions.length > 0) {
    finalDate = new Date(); // Set final date to today
  } else if (finalDate.getTime() === 0 && transactions.length > 0) {
    finalDate = new Date(
      transactions[transactions.length - 1].settlement_date || new Date()
    ); // Set to the last transaction date if there are no positions
  }

  console.log("Final Date:", finalDate);

  return {
    initialInvestment,
    cashFlows,
    finalValue,
    finalDate,
  };
}

export default calculatePortfolioMetrics;
