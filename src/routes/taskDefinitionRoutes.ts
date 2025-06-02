
import express from "express";
import {
  getPopularTasks,
  createTaskDefinition,
} from "../controllers/taskDefinitionController";

const router = express.Router();

router.get("/popular", getPopularTasks);
router.post("/", createTaskDefinition); 

export default router;
