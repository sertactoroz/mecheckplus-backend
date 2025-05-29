import { Request, Response } from "express";
import { TaskDefinition } from "../models/TaskDefinition";

// Tüm public görevleri getir
export const getPublicTasks = async (req: Request, res: Response) => {
  const tasks = await TaskDefinition.find({ isPublic: true });
  res.json(tasks);
};

// Yeni görev oluştur
export const createTaskDefinition = async (req: Request, res: Response) => {
  const { title, description, defaultUnitOptions, isPublic } = req.body;
  const task = new TaskDefinition({
    title,
    description,
    defaultUnitOptions,
    isPublic,
    createdBy: req.user?._id, // ileride JWT doğrulama eklenecek
  });
  await task.save();
  res.status(201).json(task);
};
