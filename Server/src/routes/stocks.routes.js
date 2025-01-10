import express from "express";
import {
  getStocks,
  createStock,
  updateStock,
  deleteStock,
  getStockById,
} from "../controllers/stocksController.js";
import { authenticateToken, authorizeRoles } from "../middlewares/auth.js";

const router = express.Router();

router.get("/stocks", authenticateToken, getStocks);
router.get(
  "/stocks/:stockId",
  authenticateToken,
  authorizeRoles("admin"),
  getStockById
);
router.post("/stocks", authenticateToken, authorizeRoles("admin"), createStock);
router.put(
  "/stocks/:stockId",
  authenticateToken,
  authorizeRoles("admin"),
  updateStock
);
router.delete(
  "/stocks/:stockId",
  authenticateToken,
  authorizeRoles("admin"),
  deleteStock
);

export default router;
