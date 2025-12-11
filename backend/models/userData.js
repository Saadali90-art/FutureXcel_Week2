import mongoose from "mongoose";

const userDataSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

const userSignModel = mongoose.model("test", userDataSchema);
export default userSignModel;
