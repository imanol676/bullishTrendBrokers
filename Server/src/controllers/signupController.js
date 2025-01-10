import bcrypt from "bcryptjs";
import generateToken from "../utils/jwt.js";
import { pool } from "../db.js";

export const signup = async (req, res) => {
  const { username, email, password, role } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const response = await pool.query(
      "INSERT INTO users (name,email,password,role) VALUES ($1,$2,$3,$4) RETURNING *",
      [username, email, hashedPassword, role]
    );
    const token = generateToken(response.rows[0].id, role);
    res.status(201).send({ token });
  } catch (err) {
    console.error("Error executing query", err.stack);
  }
};
