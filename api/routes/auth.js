import express from "express";

const router = express.Router();
router.get("/", (req, res) => {
  res.send("Xin chào! Đây là router Xác Minh!");
});
router.get("/register", (req, res) => {
  res.send("Xin chào! Đây là router Đăng ký!");
});

export default router;
