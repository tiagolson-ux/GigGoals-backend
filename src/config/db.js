import { connectDB } from "./fileDB.js";

// Initialize database connection
const connectToDatabase = async () => {
  try {
    // Connect to file-based database
    await connectDB();

    // Log successful connection
    console.log('File-based database initialized successfully');
  } catch (error) {
    // Log error and exit process if database initialization fails
    console.error("Database initialization failed:", error.message);
    process.exit(1);
  }
};

export default connectToDatabase;
