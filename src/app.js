import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import gigRoutes from "./routes/gigRoutes.js";

// Initialize Express application
const app = express();

// Enable CORS for cross-origin requests
app.use(cors());

// Parse incoming JSON requests
app.use(express.json());

// Health check routes
app.get("/", (req, res) => {
  res.json({ message: "GigGoals API is running" });
});

app.get("/health", (req, res) => {
  res.json({ status: "API is running" });
});

// Mount API routes
app.use("/api/auth", authRoutes);
app.use("/api/gigs", gigRoutes);

export default app;
