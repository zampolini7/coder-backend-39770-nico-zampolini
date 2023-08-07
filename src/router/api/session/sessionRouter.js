import passport from "passport";
import createHash from "../../../middlewares/create_hash.js";
import pass_is_8 from "../../../middlewares/pass_is_8.js";
import Validator from "../../../middlewares/validator.js";
import RouterCustom from "../../RouterCustom/index.js";
import generateToken from "../../../middlewares/generateToken.js";

class SessionRouter extends RouterCustom {
  init() {
    //init login auth passport
    this.post(
      //puede haber validacion de campos obligatorios y de passsword con 8 caracteres
      "/signin",
      ["PUBLIC"],
      passport.authenticate("signin", {
        failureRedirect: "/api/session/fail-login",
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

    this.post("/signout", ["PUBLIC"], async (req, res, next) => {
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

    //init register auth
    this.post(
      "/register",
      ["PUBLIC"],
      Validator,
      pass_is_8,
      createHash,
      passport.authenticate("register", {
        failureRedirect: "/api/session/fail-register",
      }),
      (req, res) =>
        res.status(201).json({
          success: true,
          message: "User created",
        })
    );
    this.get("/fail-register", (req, res) => {
      res.status(403).json({
        succes: false,
        message: "Bad auth",
      });
    });
    //end register auth

    this.put("/");
    this.delete("/");

    //init github auth
    this.get(
      "/github",
      ["PUBLIC"],
      passport.authenticate("github", {
        scope: ["user:email"],
      }),
      (req, res) => {
        console.log("hola");
      }
    );
    this.get(
      "/github/callback",
      ["PUBLIC"],
      passport.authenticate(
        "github",
        { failureRedirect: "api/session/fail-register-github" },
        (req, res) => {
          res.status(200).redirect("/");
        }
      )
    );
    this.get("/fail-register-github", ["PUBLIC"], (req, res) => {
      res.status(403).json({
        succes: false,
        message: "Bad auth",
      });
    });
    //end github auth
  }
}

const sessionRouter = new SessionRouter();
const router = sessionRouter.getRouter();
export default router;
