import axios from "axios";
import { pool } from "../db.js";
import cron from "node-cron";

async function syncStocks() {
  try {
    const result = await pool.query("SELECT symbol FROM stocks");
    const stocks = result.rows;
    console.log("Acciones a sincronizar:", stocks);

    for (const stock of stocks) {
      const symbol = stock.symbol;
      const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=ZSQGJ5O4L04R6TJL`;

      try {
        const response = await axios.get(url);

        console.log(
          `Respuesta completa de la API para ${symbol}:`,
          response.data
        );

        const price = parseFloat(response.data["Global Quote"]?.["05. price"]);

        if (!isNaN(price)) {
          await pool.query("UPDATE stocks SET price = $1 WHERE symbol = $2", [
            price,
            symbol,
          ]);
          console.log(`Precio actualizado para ${symbol}: ${price}`);
        } else {
          console.error(
            `No se pudo obtener el precio para ${symbol}. Respuesta:`,
            response.data
          );
        }
      } catch (apiError) {
        console.error(
          `Error al obtener datos de la API para ${symbol}:`,
          apiError.message
        );
      }
    }

    console.log("Sincronización completa.");
  } catch (error) {
    console.error("Error al sincronizar acciones:", error.message);
  }
}

export default syncStocks;

cron.schedule("*/5 * * * *", syncStocks);
