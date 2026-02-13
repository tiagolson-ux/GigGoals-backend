import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./config/db.js";

//  T: Load environment variables first
dotenv.config();

//  T: Connect to Mongo before starting server
connectDB();

// T: Define port
const PORT = process.env.PORT || 5000;

// T: Start Express server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

