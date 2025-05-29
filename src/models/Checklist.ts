import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  taskDefinition: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "TaskDefinition",
    required: true,
  },
  customTitle: { type: String }, // kullanıcı isterse farklı isim verebilir
  isCompleted: { type: Boolean, default: false },
  value: { type: Number },
  unit: { type: String },
  note: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const checklistSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    title: { type: String, required: true },
    tasks: [taskSchema],
    startDate: { type: Date, default: Date.now },
    dailyGoalLevels: {
      great: { type: Number, default: 75 },
      good: { type: Number, default: 50 },
      okay: { type: Number, default: 25 },
    },
  },
  { timestamps: true }
);

export const Checklist = mongoose.model("Checklist", checklistSchema);
