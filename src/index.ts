import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("MeCheckPlus Backend Çalışıyor! 🎉");
});

// MongoDB bağlantısı

mongoose
  .connect(process.env.MONGODB_URI!)
  .then(() => {
    console.log("✅ MongoDB bağlantısı başarılı");
    app.listen(PORT, () => {
      console.log(`🚀 Sunucu ${PORT} portunda çalışıyor`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB bağlantı hatası:", err);
  });
