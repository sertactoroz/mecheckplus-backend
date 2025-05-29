import express from "express";
import {
  getPublicTasks,
  createTaskDefinition,
} from "../controllers/taskDefinitionController";

const router = express.Router();

router.get("/", getPublicTasks);
router.post("/", createTaskDefinition); // auth kontrolü ileride eklenecek

export default router;
