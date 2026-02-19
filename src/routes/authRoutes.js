import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// REGISTER
router.post("/register", registerUser);

// LOGIN
router.post("/login", loginUser);

// PROTECTED PROFILE ROUTE
router.get("/profile", protect, (req, res) => {
  res.json(req.user);
});

export default router;
