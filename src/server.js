import dotenv from "dotenv";
import app from "./app.js";
import connectToDatabase from "./config/db.js";

//  T: Load environment variables first
dotenv.config();

// T: Define port
const PORT = process.env.PORT || 5000;

// T: Start Express server after database connection
const startServer = async () => {
  try {
    //  T: Connect to file-based database before starting server
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
