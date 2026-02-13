import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";

const router = express.Router();

// Software T: register route
router.post("/register", registerUser);

// Software T: login route
router.post("/login", loginUser);

export default router;


