import express from "express";
import {
  createChecklist,
  getUserChecklists,
} from "../controllers/checklistController";

const router = express.Router();

router.get("/", getUserChecklists);
router.post("/", createChecklist);

export default router;
