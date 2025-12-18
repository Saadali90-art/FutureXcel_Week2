import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    task: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: String, required: true },
    completed: { type: Boolean, default: false },
  },
  { timestamps: true, runValidators: true }
);

const userData = mongoose.model("userdata", userSchema);
export default userData;
