import { Router } from "express";
const router = Router();

import {
  getTransactions,
  getTransactionsById,
  createTransaction,
  deleteTransaction,
  updateTransaction,
} from "../controllers/transactionController.js";
import { authenticateToken, authorizeRoles } from "../middlewares/auth.js";

router.get(
  "/transactions",
  authenticateToken,
  authorizeRoles("admin"),
  getTransactions
);
router.get(
  "/transactions/:transactionId",
  authenticateToken,
  authorizeRoles("admin"),
  getTransactionsById
);
router.post("/transactions", authenticateToken, createTransaction);
router.delete(
  "/transactions/:transactionId",
  authenticateToken,
  deleteTransaction
);
router.put(
  "/transactions/:transactionId",
  authenticateToken,
  updateTransaction
);

export default router;
