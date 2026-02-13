import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";

const router = express.Router();

// Software T: Route for registering a new user
router.post("/register", registerUser);

// Software T: Route for logging in existing user
router.post("/login", loginUser);

export default router;

