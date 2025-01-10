import dotenv from "dotenv";
dotenv.config();

import express from "express";
import usersRoutes from "./routes/users.routes.js";
import stocksRoutes from "./routes/stocks.routes.js";
import transactionRoutes from "./routes/transactions.routes.js";
import signup from "./routes/signup.routes.js";
import login from "./routes/login.routes.js";
import syncStocks from "./services/syncStocksService.js";
import morgan from "morgan";
import { PORT } from "./config.js";

const app = express();

app.use(morgan("dev"));

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use(usersRoutes);
app.use(stocksRoutes);
app.use(transactionRoutes);
app.use(signup);
app.use(login);

// Sync stocks
syncStocks();

//Port
app.listen(PORT);
console.log("Server on port", PORT);
