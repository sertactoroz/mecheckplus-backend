// routes/dayRecordRoutes.ts

import express from "express";
import {
  createOrUpdateDayRecord,
  getDayRecord,
} from "../controllers/dayRecordController";

const router = express.Router();

// router.post("/", createOrUpdateDayRecord);
router.get("/", getDayRecord);

export default router; 
