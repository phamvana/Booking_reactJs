import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/authRoute.js";
import usersRoute from "./routes/usersRoute.js";
import hotelsRoute from "./routes/hotelsRoute.js";
import roomsRoute from "./routes/roomsRoute.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
dotenv.config();

//Kết nối với MongoDB
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB | Đã kết nối với MongoDB.");
  } catch (error) {
    throw error;
  }
};

//Kiểm tra kết nối
mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});

//middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong | Có lỗi xãy ra!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});
//Kết nối với server
app.listen(process.env.PORT, () => {
  connect();
  console.log("Connected to backend | Kết nối với backend thành công!.");
});
