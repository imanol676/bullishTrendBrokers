import express from "express";
import { authenticateToken } from "../middlewares/auth.js";
import { depositController } from "../controllers/depositController.js";
import { withdrawController } from "../controllers/withdrawController.js";

const router = express.Router();

router.post("/deposit", authenticateToken, depositController);
router.post("/withdraw", authenticateToken, withdrawController);

export default router;
