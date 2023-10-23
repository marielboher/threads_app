import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  console.log("Attempting to connect to MongoDB");
  mongoose.set("strictQuery", true);

  console.log(process.env.MONGODB_URL);

  if (!process.env.MONGODB_URL) return console.log("Missing MongoDB URL");

  if (isConnected) {
    console.log("MongoDB connection already established");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL);

    isConnected = true;
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Error:", error);
  }
  console.log("Connected to MongoDB");
};
