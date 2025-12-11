import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";
import { validationResult } from "express-validator";
import userSignModel from "../models/userData.js";

const login = async (req, res) => {
  try {
    // Check for validation errors from express-validator
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array() });
    }

    const { email, password } = req.body;

    // Check if email and password exist
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    // Find user in DB
    const user = await userSignModel.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate jsonwebtoken token
    const token = jsonwebtoken.sign(
      { id: user._id, email: user.email },
      process.env.SECRET_KEY
    );

    return res.status(200).json({
      message: "Login successful",
      token,
    });
  } catch (err) {
    console.error("Login Error:", err);
    return res.status(500).json({ message: "Server error" });
  }
};

export default login;
