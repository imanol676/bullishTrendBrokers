import { pool } from "../db.js";

async function updateStockInDb(stockData) {
  const { ticker, currentPrice } = stockData;

  const query = `
    INSERT INTO stocks (ticker, current_price, last_updated)
    VALUES ('${ticker}', ${currentPrice}, CURRENT_TIMESTAMP)
    ON CONFLICT (ticker)
        DO UPDATE SET 
      current_price = EXCLUDED.current_price,
      last_updated = EXCLUDED.last_updated;
  `;
  try {
    await pool.query(query, [ticker, currentPrice]);
    console.log(`Stock data for ${ticker} updated successfully`);
  } catch (error) {
    console.error(`Error updating stock data for ${ticker}: ${error}`);
    throw error;
  }
}

export { updateStockInDb };
