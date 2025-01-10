import axios from "axios";

const API_KEY = "ZSQGJ5O4L04R6TJL"; // Tu clave de API

const apiClient = axios.create({
  baseURL: "https://www.alphavantage.co", // URL base de la API
});

export async function fetchData(symbol) {
  try {
    // Modifica el endpoint para usar /query con parámetros adecuados
    const response = await apiClient.get("/query", {
      params: {
        function: "TIME_SERIES_DAILY", // Función para datos diarios
        symbol: symbol, // Símbolo de la acción (e.g., "AAPL")
        apikey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error al obtener datos:", error.message);
    throw error;
  }
}
