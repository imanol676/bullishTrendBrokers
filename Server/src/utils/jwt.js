import JWT from "jsonwebtoken";
import { JWT_SECRET, JWT_EXPIRATION } from "../config.js";

const generateToken = (userId, role) => {
  return JWT.sign({ userId, role }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
};

export default generateToken;
