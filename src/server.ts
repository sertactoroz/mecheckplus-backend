// console.log("🔍 process.env PORT:", process.env.PORT);

import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import app from "./app";

// const PORT = process.env.PORT || 5001;
const PORT = 5001;
console.log('Port:', PORT);
// console.log("🌍 ENV port:", process.env.PORT);

// const MONGO_URI = process.env.MONGODB_URI || "";
// const MONGO_URI = "mongodb+srv://msertactoroz:WypLCFhhmOQa9xhT@mecheckcluster.fujzieu.mongodb.net/?retryWrites=true&w=majority&appName=MeCheckCluster";
const MONGO_URI = "mongodb+srv://msertactoroz:WypLCFhhmOQa9xhT@mecheckcluster.fujzieu.mongodb.net/mecheckplus?retryWrites=true&w=majority&appName=MeCheckCluster";
console.log("🌍 MONGO_URI:", MONGO_URI);

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
  
