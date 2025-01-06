import pg from "pg";
import {
  DB_DATABASE,
  DB_HOST,
  DB_PASSWORD,
  DB_PORT,
  DB_USER,
} from "./config.js";

// Configura los parámetros de conexión
export const pool = new pg.Pool({
  user: DB_USER,
  host: DB_HOST,
  database: DB_DATABASE,
  password: DB_PASSWORD,
  port: DB_PORT,
});

// Prueba la conexión
pool
  .connect()
  .then((client) => {
    console.log("Conexión exitosa a PostgreSQL");
    client.release();
  })
  .catch((err) => console.error("Error al conectar a PostgreSQL", err.stack));
