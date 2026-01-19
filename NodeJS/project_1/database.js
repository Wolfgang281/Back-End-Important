import mongoose from "mongoose";

async function connectDb() {
  mongoose.connect("mongodb://127.0.0.1:27017");
  console.log("database connected");
}

export default connectDb;
