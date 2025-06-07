import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const Connection = async () => {
  const MONGODB_URI = process.env.MONGODB_URI;

  try {
    await mongoose.connect(MONGODB_URI);
    console.log("connected to database");
  } catch {
    console.log("connection failed");
  }
};

export default Connection;
