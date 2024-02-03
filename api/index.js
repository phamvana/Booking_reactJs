import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB...-> Kết nối MongoDB thành công.");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected! -> Không thể kết nối với MongoDB.");
});

app.get("/", (req, res) => {
  res.send("Đây là chương trình đầu tiên của tôi!");
});

app.listen(8800, () => {
  connect();
  console.log("Connected to backend...-> Kết nối với server thành công.");
});
