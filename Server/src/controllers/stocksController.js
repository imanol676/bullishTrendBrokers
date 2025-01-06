import { response } from "express";
import { pool } from "../db.js";

export const getStocks = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM stocks");
    console.log(result.rows);
    res.status(200).send(result.rows);
  } catch (err) {
    console.error("Error executing query", err.stack);
    res.status(500).send("Error retrieving stocks");
  }
};

export const getStockById = async (req, res) => {
  try {
    const { stockId } = req.params;
    const response = await pool.query("SELECT * FROM stocks WHERE id = $1", [
      stockId,
    ]);
    console.log(response.rows);
    res.status(200).send(response.rows);
  } catch (err) {
    console.error("Error executing query", err.stack);
    res.status(500).send("Error retrieving stock");
  }
};

export const createStock = async (req, res) => {
  try {
    const { name, price, quantity } = req.body;
    await pool.query(
      "INSERT INTO stocks (name, price, quantity) VALUES ($1, $2, $3)",
      [name, price, quantity]
    );
    res.status(201).send("Stock created");
  } catch (err) {
    console.error("Error executing query", err);
    if (!res.headersSent) {
      res.status(500).send("Error creating stock");
    }
  }
};

export const deleteStock = async (req, res) => {
  try {
    const { stockId } = req.params;
    await pool.query("DELETE FROM stocks WHERE id = $1", [stockId]);
    res.status(200).send("Stock deleted successfully");
  } catch (err) {
    console.error("Error executing query", err.stack);
    res.status(500).send("Error deleting stock");
  }
};

export const updateStock = async (req, res) => {
  try {
    const { stockId } = req.params;
    const { name, price, quantity } = req.body;
    await pool.query(
      "UPDATE stocks SET name = $1, price = $2, quantity = $3 WHERE id = $4",
      [name, price, quantity, stockId]
    );
    res.status(200).send("Stock updated successfully");
  } catch (err) {
    console.error("Error executing query", err.stack);
    res.status(500).send("Error updating stock");
  }
};
