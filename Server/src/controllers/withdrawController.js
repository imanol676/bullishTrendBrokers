import { pool } from "../db.js";

export const withdrawController = async (req, res) => {
  const { userId, amount, currency } = req.body;

  if (!["USD", "ARS"].includes(currency)) {
    return res.status(400).json({ message: "Invalid currency" });
  }

  if (amount <= 0) {
    return res.status(400).json({ message: "Invalid amount" });
  }

  try {
    await pool.query("BEGIN");
    const userBalance = `SELECT balance_usd, balance_ars FROM users WHERE id = $1`;
    const rows = await pool.query(userBalance, [userId]);

    if (rows.rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    const currentBalance =
      rows.rows[0][currency === "USD" ? "balance_usd" : "balance_ars"];

    if (currentBalance < amount) {
      return res.status(400).json({ message: "Insufficient funds" });
    }

    const insertTransaction = `INSERT INTO financial_transactions (user_id, type, amount, currency, description) VALUES ($1, $2, $3, $4, $5)`;

    await pool.query(insertTransaction, [
      userId,
      "withdraw",
      amount,
      currency,
      "Withdraw money",
    ]);

    const updateUserQuery = `
            UPDATE users
            SET ${currency === "USD" ? "balance_usd" : "balance_ars"} = ${
      currency === "USD" ? "balance_usd" : "balance_ars"
    } - $1
            WHERE id = $2
        `;
    await pool.query(updateUserQuery, [amount, userId]);

    await pool.query("COMMIT");
    return res.status(200).json({ message: "Withdraw successful" });
  } catch (error) {
    await pool.query("ROLLBACK");
    return res.status(500).json({ message: "Internal server error" });
  }
};
