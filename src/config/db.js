import { connectDB } from "./fileDB.js";

// Software T: Function to connect to MongoDB (now file-based)
const connectToDatabase = async () => {
  try {
    // T: Connecting to file-based database
    await connectDB();

    // Software T: Confirm successful connection
    console.log('File-based database initialized successfully');
  } catch (error) {
    // Software T: Log error and exit process if DB fails
    console.error("Database initialization failed:", error.message);
    process.exit(1);
  }
};

export default connectToDatabase;
