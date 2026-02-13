import mongoose from "mongoose";

// Software T: Function to connect to MongoDB
const connectDB = async () => {
  try {
    // T: Connecting to Mongo using environment variable
    const conn = await mongoose.connect(process.env.MONGO_URI);

    // Software T: Confirm successful connection
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    // Software T: Log error and exit process if DB fails
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;

