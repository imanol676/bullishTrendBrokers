import bcrypt from "bcryptjs";
import generateToken from "../utils/jwt.js";
import { pool } from "../db.js";

export const signup = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const response = await pool.query(
      "INSERT INTO users (name,email,password) VALUES ($1,$2,$3) RETURNING *",
      [username, email, hashedPassword]
    );
    const token = generateToken(response.rows[0].id);
    res.status(201).send({ token });
  } catch (err) {
    console.error("Error executing query", err.stack);
  }
};
