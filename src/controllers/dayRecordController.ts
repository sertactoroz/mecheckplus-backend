import { Request, Response } from "express";
import { DayRecord } from "../models/DayRecord";

export const createOrUpdateDayRecord = async (req: Request, res: Response) => {
  const { checklist, date, items } = req.body;

  const existing = await DayRecord.findOne({
    user: req.user?._id,
    checklist,
    date: new Date(date).toISOString().slice(0, 10), // sadece gün önemli
  });

  if (existing) {
    existing.items = items;
    await existing.save();
    return res.json(existing);
  }

  const newRecord = new DayRecord({
    user: req.user?._id,
    checklist,
    date,
    items,
  });

  await newRecord.save();
  res.status(201).json(newRecord);
};

export const getDayRecord = async (req: Request, res: Response) => {
  const { checklistId, date } = req.query;

  const record = await DayRecord.findOne({
    user: req.user?._id,
    checklist: checklistId,
    date: new Date(date as string).toISOString().slice(0, 10),
  });

  res.json(record);
};
