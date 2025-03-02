import dotenv from "dotenv";

// Cargar las variables de entorno desde el archivo .env
dotenv.config();

// Variables de entorno
export const DB_USER = process.env.DB_USER;
export const DB_HOST = process.env.DB_HOST;
export const DB_PASSWORD = process.env.DB_PASSWORD?.toString();
export const DB_DATABASE = process.env.DB_DATABASE;
export const DB_PORT = process.env.DB_PORT;

// Puerto en el que se ejecutará el servidor
export const PORT = process.env.PORT || 3000;

// JWT
export const JWT_SECRET = process.env.JWT_SECRET;
export const JWT_EXPIRATION = process.env.JWT_EXPIRATION || "1h";

// Finnhub
export const FINNHUB_API_KEY = process.env.FINNHUB_API_KEY;
export const FINNHUB_BASE_URL =
  process.env.FINNHUB_BASE_URL || "https://finnhub.io/api/v1";
