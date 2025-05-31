// import { Request, Response, NextFunction } from "express";
// import mongoose from "mongoose";
// 
// declare global {
//   namespace Express {
//     interface Request {
//       user?: {
//         _id: mongoose.Types.ObjectId;
//       };
//     }
//   }
// }
// 
// export const fakeAuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
//   req.user = { _id: new mongoose.Types.ObjectId("66527f0f5a4f5b4cd1234567") };
//   next();
// };
