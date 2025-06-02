import express from "express";
import { addTaskFromLibrary } from "../controllers/userChecklistActionsController";
import { mockAuthMiddleware } from "../middleware/mockAuthMiddleware";

const router = express.Router();

router.post(
  "/:checklistId/add-task-from-library",
  mockAuthMiddleware,
  addTaskFromLibrary
);

export default router;
