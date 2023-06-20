import { Router } from "express";
import User from "../../models/User.js";
import Validator from "../../middlewares/validator.js";
import pass_is_8 from "../../middlewares/pass_is_8.js";

const auth_router = Router();

auth_router.post("/register", Validator, pass_is_8, async (req, res, next) => {
  try {
    await User.create(req.body);
    return res.status(201).json({
      success: true,
      message: "User created",
    });
  } catch (error) {
    next(error);
  }
});

auth_router.post("/signin", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const one = await User.findOne({ email });
    if (one) {
      req.session.email = email;
      req.session.role = one.role;
      return res.status(200).json({
        success: true,
        message: "User logged",
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
  } catch (error) {
    next(error);
  }
});

auth_router.post("/signout", async (req, res, next) => {
  try {
    req.session.destroy();
    return res.status(200).json({
      success: true,
      message: "User logged out",
    });
  } catch (error) {
    next(error);
  }
});

export default auth_router;
