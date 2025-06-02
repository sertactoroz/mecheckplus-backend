import { Request, Response } from "express";
import { Checklist } from "../models/Checklist";
import mongoose from "mongoose";

export const addTaskFromLibrary = async (req: Request, res: Response): Promise<void> => {  // <--- buraya : Promise<void> ekledik
  const { checklistId } = req.params;
  const { taskDefinitionId } = req.body;

  try {
    if (!mongoose.Types.ObjectId.isValid(taskDefinitionId)) {
      res.status(400).json({ message: "Geçersiz taskDefinitionId" });
      return;
    }

    const checklist = await Checklist.findOne({
      _id: checklistId,
      user: req.user?._id,
    }); 

    if (!checklist) {
      res.status(404).json({ message: "Checklist bulunamadı" });
      return;
    }

    checklist.tasks.push({
      taskDefinition: taskDefinitionId,
    });

    await checklist.save();
    res.status(200).json({ message: "Görev başarıyla eklendi", checklist });
  } catch (error) {
    console.error("Görev ekleme hatası:", error);
    res.status(500).json({ message: "Sunucu hatası" });
  }
};
