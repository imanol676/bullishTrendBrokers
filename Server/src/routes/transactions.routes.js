import { Router } from "express";
const router = Router();

import {
  getTransactions,
  getTransactionsById,
  createTransaction,
  deleteTransaction,
  updateTransaction,
} from "../controllers/transactionController.js";

router.get("/transactions", getTransactions);
router.get("/transactions/:transactionId", getTransactionsById);
router.post("/transactions", createTransaction);
router.delete("/transactions/:transactionId", deleteTransaction);
router.put("/transactions/:transactionId", updateTransaction);

export default router;
