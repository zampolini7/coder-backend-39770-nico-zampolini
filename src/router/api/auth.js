import { Router } from "express";
import User from "../../dao/Mongo/Models/User.js";
import Validator from "../../middlewares/validator.js";
import pass_is_8 from "../../middlewares/pass_is_8.js";
import passport from "passport";
import passwordIsOk from "../../middlewares/is_valid_password.js";
import generateToken from "../../middlewares/generateToken.js";
import createHash from "../../middlewares/create_hash.js";
import is_valid_password from "../../middlewares/is_valid_password.js";
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
  passport.authenticate("register", {
    failureRedirect: "/api/auth/fail-register",
  }),
  (req, res) =>
    res.status(201).json({
      success: true,
      message: "User created",
    })
);

auth_router.get("/fail-register", (req, res) => {
  res.status(403).json({
    succes: false,
    message: "Bad auth",
  });
});

auth_router.post(
  //puede haber validacion de campos obligatorios y de passsword con 8 caracteres
  "/signin",
  passport.authenticate("signin", {
    failureRedirect: "/api/auth/fail-login",
  }),
  // passwordIsOk,
  // is_valid_password,
  generateToken,
  (req, res, next) => {
    console.log(req.token, "res");
    try {
      return res
        .status(200)
        .cookie("token", req.token, {
          maxAge: 60 * 60 * 1000,
          httpOnly: true,
        })
        .json({
          success: true,
          message: req.token,
        });
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
          httpOnly: true,
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
