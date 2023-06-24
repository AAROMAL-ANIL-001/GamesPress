import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://aaromalanil001:aaromalanil@cluster0.0n2zv3z.mongodb.net/GamePress",
      {
        useNewUrlParser: true,
      }
    );
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
