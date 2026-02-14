import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Software T: Register route
router.post("/register", registerUser);

// Software T: Login route
router.post("/login", loginUser);

// Software T: Protected profile route
router.get("/profile", protect, (req, res) => {
  res.json(req.user);
});

export default router;


