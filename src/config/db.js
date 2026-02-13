import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // Mrs. Tia to Software T: Attempting to connect to MongoDB using environment variable
    const conn = await mongoose.connect(process.env.MONGO_URI);

    // Mrs. Tia: If connection succeeds, log confirmation
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    // Mrs. Tia: If connection fails, log error and stop server
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // Mrs. Tia: Attempting to connect to MongoDB using environment variable
    const conn = await mongoose.connect(process.env.MONGO_URI);

    // Mrs. Tia: If connection succeeds, log confirmation
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    // Mrs. Tia: If connection fails, log error and stop server
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;
