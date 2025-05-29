// types/express/index.d.ts
import { ObjectId } from "mongoose";

declare global {
  namespace Express {
    interface Request {
      user?: {
        _id: ObjectId;
        // diğer user alanları gerekiyorsa buraya ekle
      };
    }
  }
}
