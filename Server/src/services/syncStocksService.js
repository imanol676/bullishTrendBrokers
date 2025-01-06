import { getStockData } from "./apiServices";
import pool from "../db.js";
import cron from "node-cron";

const ARG_TICKERS = [
  "ALUA",
  "BBAR",
  "BMA",
  "BYMA",
  "CEPU",
  "CRES",
  "CVH",
  "EDN",
  "GGAL",
  "MELI",
  "PAMP",
  "SUPV",
  "TECO2",
  "TGNO4",
  "TGSU2",
  "TRAN",
  "TXAR",
  "VALO",
  "YPFD",
];

const NASDAQ_TICKERS = [
  "APPL",
  "AMZN",
  "GOOGL",
  "MSFT",
  "TSLA",
  "FB",
  "NVDA",
  "PYPL",
  "ADBE",
  "NFLX",
  "INTC",
  "CSCO",
  "CMCSA",
  "PEP",
  "COST",
  "TMUS",
  "AVGO",
  "TXN",
  "QCOM",
  "SBUX",
];

const syncStocks = async () => {
  const tickers = [...ARG_TICKERS, ...NASDAQ_TICKERS];

  for (const ticker of tickers) {
    try {
      const stockData = await getStockData(ticker);
      const { ticker, currentPrice } = stockData;

      const query = `
        INSERT INTO stocks (ticker, name, current_price, last_updated)
        VALUES ($1, $2, $3, CURRENT_TIMESTAMP)
        ON CONFLICT (ticker)
        DO UPDATE SET 
          current_price = EXCLUDED.current_price,
          last_updated = EXCLUDED.last_updated;
      `;

      await pool.query(query, [stockData.ticker, stockData.currentPrice]);
      console.log(`Stock data for ${ticker} synced successfully`);
    } catch (error) {
      console.error(`Error syncing stock data for ${ticker}: ${error}`);
    }
  }
};

cron.schedule("*/5 * * * *", syncStocks); // Sincronización cada 5 minutos
