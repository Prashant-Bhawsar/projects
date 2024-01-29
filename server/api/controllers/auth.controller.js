import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { nextTick } from "process";
export const signUp = async (req, res, next) => {
  const { username, email, password } = req.body;
  const encryptedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: encryptedPassword });
  try {
    await newUser.save();
    res.status(201).json({
      message: "User Created Successfully",
    });
  } catch (err) {
    next(err);
  }
};
