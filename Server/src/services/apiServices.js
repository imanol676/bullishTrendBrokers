import axios from "axios";

const API_KEY = "ZSQGJ5O4L04R6TJL";

async function getStockData(ticker) {
  const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticker}&apikey=${API_KEY}`;

  try {
    const response = await axios.get(url);
    const data = response.data["global_quote"];

    if (data) {
      return {
        ticker: data["01. symbol"],
        currentPrice: parseFloat(data["05. price"]),
      };
    } else {
      throw new Error("Invalid ticker");
    }
  } catch (error) {
    console.error(`Error fetching stock data for ${ticker}: ${error}`);
    throw error;
  }
}

export { getStockData };
