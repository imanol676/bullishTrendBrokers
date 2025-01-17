import { pool } from "../db.js";

export const depositController = async (req, res) => {
  const { userId, amount, currency } = req.body;

  console.log(
    `Deposit request: userId=${userId}, amount=${amount}, currency=${currency}`
  );

  if (!["USD", "ARS"].includes(currency)) {
    return res.status(400).json({ message: "Invalid currency" });
  }

  if (amount <= 0) {
    return res.status(400).json({ message: "Invalid amount" });
  }

  try {
    // Verificar si el usuario existe
    const userCheck = await pool.query("SELECT id FROM users WHERE id = $1", [
      userId,
    ]);
    if (userCheck.rowCount === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    await pool.query("BEGIN");
    console.log(`Transaction started for userId=${userId}`);

    // Insertar transacción
    const insertTransaction =
      "INSERT INTO financial_transactions (user_id, type, amount, currency, description) VALUES ($1, $2, $3, $4, $5) RETURNING id";
    await pool.query(insertTransaction, [
      userId,
      "deposit",
      amount,
      currency,
      "Deposit money",
    ]);

    console.log(
      `Transaction inserted for userId=${userId}, amount=${amount}, currency=${currency}`
    );

    // Actualizar saldo del usuario
    const updateUserQuery =
      currency === "USD"
        ? "UPDATE users SET balance_usd = balance_usd + $1 WHERE id = $2"
        : "UPDATE users SET balance_ars = balance_ars + $1 WHERE id = $2";
    console.log(
      `Updating balance for userId=${userId} by amount=${amount} in currency=${currency}`
    );
    await pool.query(updateUserQuery, [amount, userId]);

    // Consultar saldos actualizados
    const balanceQuery = `
      SELECT balance_usd, balance_ars 
      FROM users 
      WHERE id = $1
    `;
    const balanceResult = await pool.query(balanceQuery, [userId]);
    const balances = balanceResult.rows[0];

    await pool.query("COMMIT");
    console.log(
      `Deposit successful for userId=${userId}, new balances:`,
      balances
    );

    return res.status(200).json({
      message: "Deposit successful",
      balances,
    });
  } catch (error) {
    await pool.query("ROLLBACK");
    console.error("Error during deposit:", error);

    if (error.code === "23503") {
      return res.status(400).json({ message: "Invalid user ID" });
    }

    return res.status(500).json({ message: "Internal server error" });
  }
};
