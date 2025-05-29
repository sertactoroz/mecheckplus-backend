import { Request, Response } from "express";
import { Checklist } from "../models/Checklist";
import { User } from "../models/User";
export const createChecklist = async (req: Request, res: Response) => {
  const { title, items } = req.body;

  const checklist = new Checklist({
    title,
    user: req.user?._id,
    items,
  });

  await checklist.save();
  res.status(201).json(checklist);
};

// export const getUserChecklists = async (req: Request, res: Response) => {
//   const checklists = await Checklist.find({ user: req.user?._id }).populate(
//     "items.taskDefinition"
//   );
//   res.json(checklists);
// };
export const getUserChecklists = async (req: Request, res: Response) => {
  try {
    const userId = req.user?._id;

    // 👇 Kullanıcıyı bul ve logla
    const user = await User.findById(userId);
    console.log("🧑 Kullanıcı:", user);

    const checklists = await Checklist.find({ user: userId }).populate(
      "items.taskDefinition"
    );

    res.json(checklists);
  } catch (error) {
    console.error("Checklists alınırken hata:", error);
    res.status(500).json({ message: "Bir şeyler ters gitti." });
  }
};
