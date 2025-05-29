import mongoose from "mongoose";

const recordItemSchema = new mongoose.Schema(
  {
    checklistItemIndex: { type: Number, required: true }, // Checklist içindeki sıra
    completed: { type: Boolean, default: false },
    value: { type: Number }, // Örn: 20
    unit: { type: String }, // Örn: "sayfa"
    note: { type: String },
  },
  { _id: false }
);

const dayRecordSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    checklist: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Checklist",
      required: true,
    },
    date: { type: Date, required: true },
    items: [recordItemSchema],
  },
  { timestamps: true }
);

export const DayRecord = mongoose.model("DayRecord", dayRecordSchema);
