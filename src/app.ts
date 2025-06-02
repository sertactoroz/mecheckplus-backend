import express from "express";
// import mongoose from "mongoose";
// import dotenv from "dotenv";

import taskDefinitionRoutes from "./routes/taskDefinitionRoutes";
import checklistRoutes from "./routes/checklistRoutes";
import dayRecordRoutes from "./routes/dayRecordRoutes";
import cors from "cors";
// import { fakeAuthMiddleware } from "./middleware/fakeAuthMiddleware";
import userRoutes from "./routes/userRoutes";
import userChecklistActionsRoutes from "./routes/userChecklistActions";
import { mockAuthMiddleware } from "./middleware/mockAuthMiddleware";


require('dotenv').config();
// dotenv.config();

const app = express();
app.use(express.json());


// ⬇️ Tüm route'lar için sahte kullanıcı middleware'i uygula
app.use(mockAuthMiddleware);

app.use(cors());
app.use("/task-definitions", taskDefinitionRoutes);
app.use("/task-definitions/popular", taskDefinitionRoutes);
app.use("/checklists", checklistRoutes);
app.use("/day-records", dayRecordRoutes);
app.use("/users", userRoutes);
app.use("/user-checklist-actions", userChecklistActionsRoutes);
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
