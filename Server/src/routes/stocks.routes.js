import express from "express";
import {
  getStocks,
  createStock,
  updateStock,
  deleteStock,
  getStockById,
} from "../controllers/stocksController.js";

const router = express.Router();

router.get("/stocks", getStocks);
router.get("/stocks/:stockId", getStockById);
router.post("/stocks", createStock);
router.put("/stocks/:stockId", updateStock);
router.delete("/stocks/:stockId", deleteStock);

export default router;
