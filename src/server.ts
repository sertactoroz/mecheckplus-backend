import dotenv from "dotenv";
dotenv.config();
// console.log("🔍 process.env PORT:", process.env.PORT);

import mongoose from "mongoose";
import app from "./app";

const PORT = process.env.PORT || 5001;
// console.log('Port:', PORT);

const MONGO_URI = process.env.MONGODB_URI || "";

// console.log("🌍 MONGO_URI:", MONGO_URI);

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB bağlantısı başarılı");
     // Aktif veritabanı adını logla
    const db = mongoose.connection.db;
    console.log("🔍 Aktif Veritabanı:", db?.databaseName);

    app.listen(PORT, () => {
      console.log(`🚀 Sunucu ${PORT} portunda çalışıyor`);
    });

  })
  
  .catch((err) => {
    console.error("❌ MongoDB bağlantı hatası:", err);
    
  });
  
