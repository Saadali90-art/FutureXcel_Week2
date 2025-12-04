import mongoose from "mongoose";

const userDataSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

const userData = mongoose.model("test", userDataSchema);
export default userData;
