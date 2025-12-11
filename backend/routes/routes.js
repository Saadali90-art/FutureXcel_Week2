import express from "express";
import signup from "../Controllers/Signup.js";
import { check } from "express-validator";
import login from "../Controllers/Login.js";

let router = express.Router();

router.post(
  "/signup",
  // ==== SIGN UP VALIDATIONS
  [
    check("name")
      .notEmpty()
      .withMessage("Name is required")
      .isLength({ min: 3 })
      .withMessage("Name must be at least 3 characters long"),

    check("email")
      .notEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Enter a valid email"),

    check("password")
      .notEmpty()
      .withMessage("Password is required")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  signup
);

router.post(
  "/login",
  // ==== LOGIN  VALIDATIONS
  [
    check("email")
      .notEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Enter a valid email"),

    check("password")
      .notEmpty()
      .withMessage("Password is required")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  login
);
export default router;
