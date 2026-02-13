
import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";

// Software T: Create express application instance
const app = express();

//  T: Enable CORS so frontend can talk to backend
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true
  })
);

//  T: Allow server to read JSON in request body
app.use(express.json());

//  T: Temporary health check route to confirm server works
app.get("/", (req, res) => {
  res.json({ message: "GigGoals API is running 🚀" });
});

// Software T: Mount auth routes under /api/auth
app.use("/api/auth", authRoutes);


// : Export app so server.js can use it
export default app;
