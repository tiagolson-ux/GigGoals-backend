import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./config/db.js";

// Software T: Load environment variables first
dotenv.config();

// Software T: Connect to Mongo before starting server
connectDB();

// Software T: Define port
const PORT = process.env.PORT || 5000;

// Software T: Start Express server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
