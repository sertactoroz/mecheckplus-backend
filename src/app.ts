import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import taskDefinitionRoutes from "./routes/taskDefinitionRoutes";
import checklistRoutes from "./routes/checklistRoutes";
import dayRecordRoutes from "./routes/dayRecordRoutes";
import cors from "cors";
import { fakeAuthMiddleware } from "./middleware/fakeAuthMiddleware";


dotenv.config();

const app = express();
app.use(express.json());
app.use(fakeAuthMiddleware);

app.use(cors());
app.use("/api/task-definitions", taskDefinitionRoutes);
app.use("/api/checklists", checklistRoutes);
app.use("/api/day-records", dayRecordRoutes);

export default app;



// const PORT = process.env.PORT || 5000;
// 
// // Middleware
// app.use(cors());
// app.use(express.json());
// 
// app.get("/", (req, res) => {
//   res.send("MeCheckPlus Backend Çalışıyor! 🎉");
// });
// 
// // MongoDB bağlantısı
// 
// mongoose
//   .connect(process.env.MONGODB_URI!)
//   .then(() => {
//     console.log("✅ MongoDB bağlantısı başarılı");
//     app.listen(PORT, () => {
//       console.log(`🚀 Sunucu ${PORT} portunda çalışıyor`);
//     });
//   })
//   .catch((err) => {
//     console.error("❌ MongoDB bağlantı hatası:", err);
//   });
