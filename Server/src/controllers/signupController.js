import bcrypt from "bcryptjs";
import generateToken from "../utils/jwt.js";
import { pool } from "../db.js";

export const signup = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400).send("Please fill all the fields");
  }

  try {
    const userExist = await pool.query(
      "SELECT id FROM users WHERE email = $1",
      [email]
    );

    if (userExist.rows.length > 0) {
      return res.status(400).json({ error: "El email ya está registrado." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const query = `
      INSERT INTO users (name, email, password)
      VALUES ($1, $2, $3)
      RETURNING id, name, email, role, balance_usd, balance_ars
    `;

    const values = [username, email, hashedPassword];
    const result = await pool.query(query, values);

    const token = generateToken(result.rows[0].id);
    res.status(201).send({ token });
  } catch (err) {
    console.error("Error executing query", err.stack);
  }
};
