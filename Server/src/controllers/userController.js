import { response } from "express";
import { pool } from "../db.js";

export const getUsers = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users");
    console.log(result.rows);
    res.status(200).send(result.rows);
  } catch (err) {
    console.error("Error executing query", err.stack);
    res.status(500).send("Error retrieving users");
  }
};

export const getUserById = async (req, res) => {
  try {
    const { userId } = req.params;
    const response = await pool.query("SELECT * FROM users WHERE id = $1", [
      userId,
    ]);
    console.log(response.rows);
    res.status(200).send(response.rows);
  } catch (err) {
    console.error("Error executing query", err.stack);
    res.status(500).send("Error retrieving user");
  }
};

export const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    await pool.query(
      "INSERT INTO users (name, email, password) VALUES ($1, $2, $3)",
      [name, email, password]
    );
    res.status(201).send("User created");
  } catch (err) {
    console.error("Error executing query", err);
    if (!res.headersSent) {
      res.status(500).send("Error creating user");
    }
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { userId } = req.params;
    await pool.query("DELETE FROM users WHERE id = $1", [userId]);
    res.status(200).send("User deleted successfully");
  } catch (err) {
    console.error("Error executing query", err.stack);
    res.status(500).send("Error deleting user");
  }
};

export const updateUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const { name, email, password } = req.body;
    await pool.query(
      "UPDATE users SET name = $1, email = $2, password = $3 WHERE id = $4",
      [name, email, password, userId]
    );
    res.status(200).send("User updated successfully");
  } catch (err) {
    console.error("Error executing query", err.stack);
    res.status(500).send("Error updating user");
  }
};
