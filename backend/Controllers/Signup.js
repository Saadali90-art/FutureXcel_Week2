import { validationResult } from "express-validator";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";
import userSignModel from "../models/userData.js";

const signup = async (req, res) => {
  try {
    // 1️⃣ VALIDATION ERRORS
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: errors.array(),
      });
    }

    // 2️⃣ EXTRACT DATA
    const { name, email, password } = req.body;

    // 3️⃣ CHECK IF USER EXISTS
    const alreadyUser = await userSignModel.findOne({ email });

    if (alreadyUser) {
      return res.status(409).json({
        message: "User already registered. Please login.",
      });
    }

    // 4️⃣ HASH PASSWORD
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // 5️⃣ CREATE USER IN DB
    const user = await userSignModel.create({
      name,
      email,
      password: hashedPassword,
    });

    // 6️⃣ GENERATE JWT TOKEN
    const token = jsonwebtoken.sign(
      {
        id: user._id,
        email: user.email,
      },
      process.env.SECRET_KEY
    );

    // 7️⃣ SEND SUCCESS RESPONSE
    return res.status(201).json({
      message: "Signup successful!",
      token, // send token to frontend
    });
  } catch (error) {
    console.error("Signup Error:", error.message);

    return res.status(500).json({
      message: "Server error. Please try again later.",
    });
  }
};

export default signup;
