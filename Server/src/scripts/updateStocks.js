import { getStockData } from "../services/apiServices.js";
import { updateStockInDb } from "../services/stockServices.js";

async function updateStocks() {
  const tickers = ["AAPL", "GOOGL", "AMZN", "MSFT", "TSLA"];

  for (const ticker of tickers) {
    try {
      const stockData = await getStockData(ticker);
      await updateStockInDb(stockData);
    } catch (error) {
      console.error(`Error updating stock ${ticker}: ${error}`);
    }
  }
  console.log("Stocks updated successfully");
}

updateStocks();
