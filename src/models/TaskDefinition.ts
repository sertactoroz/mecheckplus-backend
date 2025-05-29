import mongoose from "mongoose";

const taskDefinitionSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    defaultUnitOptions: [{ type: String }], // örn: ["sayfa", "dakika"]
    isPublic: { type: Boolean, default: true },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },
  },
  { timestamps: true }
);

export const TaskDefinition = mongoose.model(
  "TaskDefinition",
  taskDefinitionSchema
);
