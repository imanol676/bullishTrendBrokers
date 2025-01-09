import { response } from "express";
import { pool } from "../db.js";

export const getTransactions = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM transactions");
    console.log(result.rows);
    res.status(200).send(result.rows);
  } catch (err) {
    console.error("Error executing query", err.stack);
    res.status(500).send("Error retrieving transactions");
  }
};

export const getTransactionsById = async (req, res) => {
  try {
    const { transactionId } = req.params;
    const response = await pool.query(
      "SELECT * FROM transactions WHERE id = $1",
      [transactionId]
    );
    console.log(response.rows);
    res.status(200).send(response.rows);
  } catch (err) {
    console.error("Error executing query", err.stack);
    res.status(500).send("Error retrieving transaction");
  }
};

export const createTransaction = async (req, res) => {
  try {
    const { userId, stockId, type, quantity, price } = req.body;
    await pool.query(
      "INSERT INTO transactions (user_id, stock_id, transaction_type, quantity, price_per_stock) VALUES ($1, $2, $3, $4, $5)",
      [userId, stockId, type, quantity, price]
    );
    res.status(201).send("Transaction created");
  } catch (err) {
    console.error("Error executing query", err);
    if (!res.headersSent) {
      res.status(500).send("Error creating transaction");
    }
  }
};

export const deleteTransaction = async (req, res) => {
  try {
    const { transactionId } = req.params;
    await pool.query("DELETE FROM transactions WHERE id = $1", [transactionId]);
    res.status(200).send("Transaction deleted successfully");
  } catch (err) {
    console.error("Error executing query", err.stack);
    res.status(500).send("Error deleting transaction");
  }
};

export const updateTransaction = async (req, res) => {
  try {
    const { transactionId } = req.params;
    const { userId, stockId, type, quantity, price } = req.body;
    await pool.query(
      "UPDATE transactions SET user_id = $1, stock_id = $2, transaction_type = $3, quantity = $4, price_per_stock = $5 WHERE id = $6",
      [userId, stockId, type, quantity, price, transactionId]
    );
    res.status(200).send("Transaction updated successfully");
  } catch (err) {
    console.error("Error executing query", err.stack);
    res.status(500).send("Error updating transaction");
  }
};
