import axios from "axios";
import { pool } from "../db.js";
import cron from "node-cron";
import { FINNHUB_API_KEY, FINNHUB_BASE_URL } from "../config.js";

async function syncStocks() {
  try {
    const result = await pool.query("SELECT symbol FROM stocks");
    const stocks = result.rows;
    console.log("Acciones a sincronizar:", stocks);

    for (const stock of stocks) {
      const symbol = stock.symbol;
      const url = `${FINNHUB_BASE_URL}/quote?symbol=${symbol}&token=${FINNHUB_API_KEY}`;

      try {
        const response = await axios.get(url);
        console.log(`Respuesta de la API para ${symbol}:`, response.data);

        const price = parseFloat(response.data["c"]); // Precio actual

        if (!isNaN(price)) {
          await pool.query("UPDATE stocks SET price = $1 WHERE symbol = $2", [
            price,
            symbol,
          ]);
          console.log(`Precio actualizado para ${symbol}: ${price}`);
        } else {
          console.error(
            `No se pudo obtener un precio válido para ${symbol}. Respuesta:`,
            response.data
          );
        }
      } catch (APIError) {
        console.error(
          `Error al obtener el precio para ${symbol}:`,
          APIError.response?.data || APIError.message
        );
      }
    }

    console.log("Sincronización completa.");
  } catch (error) {
    console.error("Error al sincronizar las acciones:", error.message);
  }
}

export default syncStocks;

cron.schedule("*/5 * * * *", syncStocks);
