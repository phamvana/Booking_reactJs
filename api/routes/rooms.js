import express from "express";

const router = express.Router();
router.get("/", (req, res) => {
  res.send("Xin chào! Đây là router Rooms!");
});
export default router;
