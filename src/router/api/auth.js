import { Router } from "express";
import User from "../../models/User.js";
import Validator from "../../middlewares/validator.js";
import pass_is_8 from "../../middlewares/pass_is_8.js";
import passport from "passport";
import passwordIsOk from "../../middlewares/passwordIsOk.js";
import generateToken from "../../middlewares/generateToken.js";
import createHash from "../../middlewares/passwordToHash.js";
const auth_router = Router();

auth_router.get(
  "/github",
  passport.authenticate("github", {
    scope: ["user:email"],
  }),
  (req, res) => {
    console.log("hola");
  }
);
auth_router.get(
  "/github/callback",
  passport.authenticate(
    "github",
    { failureRedirect: "api/auth/fail-register-github" },
    (req, res) => {
      res.status(200).redirect("/");
    }
  )
);

auth_router.get("/fail-register-github", (req, res) => {
  res.status(403).json({
    succes: false,
    message: "Bad auth",
  });
});

auth_router.post(
  "/register",
  Validator,
  pass_is_8,
  createHash,
  async (req, res, next) => {
    try {
      await User.create(req.body);
      return res.status(201).json({
        success: true,
        message: "User created",
      });
    } catch (error) {
      next(error);
    }
  }
);

auth_router.post(
  "/signin",
  // passwordIsOk,
  async (req, res, next) => {
    try {
      const { email } = req.body;
      console.log(email, "elmail");
      const one = await User.findOne({ email });
      if (one) {
        req.session.email = email;
        req.session.role = one.role;
        return res.status(200).json({
          success: true,
          message: "User logged",
          payload: req.session,
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
  }
);

auth_router.post(
  "/signin2",
  // validator, strategy, password, token
  // passport.authenticate("login", { failureRedirect: "/api/auth/fail-login" }),
  // passwordIsOk,
  // generateToken,
  (req, res, next) => {
    try {
      return res
        .status(200)
        .cookie("token", req.token, {
          maxAge: 60 * 60 * 1000,
        })
        .json({
          success: true,
          message: "User logged",
        });
    } catch (error) {
      next(error);
    }
  }
);

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
