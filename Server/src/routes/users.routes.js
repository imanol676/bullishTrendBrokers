import { Router } from "express";
const router = Router();
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";
import { authenticateToken, authorizeRoles } from "../middlewares/auth.js";

router.get("/users", authenticateToken, authorizeRoles("admin"), getUsers);
router.get(
  "/users/:userId",
  authenticateToken,
  authorizeRoles("admin"),
  getUserById
);
router.post("/users", authenticateToken, authorizeRoles("admin"), createUser);
router.put(
  "/users/:userId",
  authenticateToken,
  authorizeRoles("admin"),
  updateUser
);
router.delete(
  "/users/:userId",
  authenticateToken,
  authorizeRoles("admin"),
  deleteUser
);

export default router;
