import { Request, Response } from "express";
import { TaskDefinition } from "../models/TaskDefinition";


// Popüler (isPublic=true) task'ları getir
export const getPopularTasks = async (req: Request, res: Response) => {
  try {
    const popularTasks = await TaskDefinition.find({ isPublic: true });
    res.json(popularTasks);
  } catch (err) {
    res.status(500).json({ error: "Görevler alınamadı" });
  }
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
