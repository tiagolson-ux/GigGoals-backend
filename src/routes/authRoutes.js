import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";
import { protect } from "../middleware/authMiddleware.js";

router.get("/profile", protect, (req, res) => {
  res.json(req.user);
});


const router = express.Router();

// Register
router.post("/register", registerUser);

// Login
router.post("/login", loginUser);

export default router;



