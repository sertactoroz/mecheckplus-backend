import { Request, Response } from 'express';
import { Checklist } from '../models/Checklist';

export const createChecklist = async (req: Request, res: Response) => {
  try {
    const { user, title, tasks, dailyGoalLevels } = req.body;

    const checklist = new Checklist({
      user,
      title,
      tasks,
      dailyGoalLevels
    });

    const savedChecklist = await checklist.save();
    
    res.status(201).json({
      success: true,
      data: savedChecklist
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

export const getChecklists = async (req: Request, res: Response) => {
  try {
    const checklists = await Checklist.find()
      .populate('user')
      .populate('tasks.taskDefinition');
    
    res.status(200).json({
      success: true,
      data: checklists
    });

  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }

};