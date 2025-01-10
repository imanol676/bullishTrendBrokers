import dotenv from "dotenv";

// Cargar las variables de entorno desde el archivo .env
dotenv.config();

export const DB_USER = process.env.DB_USER;
export const DB_HOST = process.env.DB_HOST;
export const DB_PASSWORD = process.env.DB_PASSWORD?.toString();
export const DB_DATABASE = process.env.DB_DATABASE;
export const DB_PORT = process.env.DB_PORT;

export const PORT = process.env.PORT || 3000;

export const JWT_SECRET = process.env.JWT_SECRET;
export const JWT_EXPIRATION = process.env.JWT_EXPIRATION || "1h";
