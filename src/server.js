import dotenv from "dotenv";
import app from "./app.js";
import connectToDatabase from "./config/db.js";

// Load environment variables
dotenv.config();

// Define server port from environment or use default
const PORT = process.env.PORT || 5000;

// Initialize express server with database connection
const startServer = async () => {
  try {
    // Connect to database before starting server
    await connectToDatabase();
    
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer();
