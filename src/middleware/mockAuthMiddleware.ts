import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";

export const mockAuthMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Örnek sahte kullanıcı kimliği (MongoDB ObjectId formatında)
  req.user = {
    _id: new mongoose.Types.ObjectId("683bcd9de45d32995a7f0180"),
  };
  next();
};
