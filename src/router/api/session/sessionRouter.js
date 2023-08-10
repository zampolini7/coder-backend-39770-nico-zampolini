import passport from "passport";
import createHash from "../../../middlewares/create_hash.js";
import pass_is_8 from "../../../middlewares/pass_is_8.js";
import Validator from "../../../middlewares/validator.js";
import RouterCustom from "../../RouterCustom/index.js";
import generateToken from "../../../middlewares/generateToken.js";
import passwordIsOk from "../../../middlewares/is_valid_password.js";
import passport_call from "../../../middlewares/passport_call.js";
import {
  getSession,
  createSession,
  deleteSession,
  createUser,
  getFailRegister,
  getFailRegisterGithub,
  getGithubAuthenticate,
  getRegisterGithub,
} from "../../../controllers/session.controller.js";

class SessionRouter extends RouterCustom {
  init() {
    //init login auth passport
    this.get(
      "/current",
      ["PUBLIC"],
      passport_call("jwt", "fail-auth"),
      getSession
    );

    this.post(
      //puede haber validacion de campos obligatorios y de passsword con 8 caracteres
      "/signin",
      ["PUBLIC"],
      passport_call("signin", "fail-login"),
      passwordIsOk,
      generateToken,
      createSession
    );

    this.post("/signout", ["PUBLIC"], deleteSession);

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
      createUser
    );

    this.get("/fail-register", getFailRegister);
    //end register auth

    //init github auth
    this.get(
      "/github",
      ["PUBLIC"],
      passport.authenticate("github", {
        scope: ["user:email"],
      }),
      getGithubAuthenticate
    );

    this.get(
      "/github/callback",
      ["PUBLIC"],
      passport.authenticate("github", {
        failureRedirect: "api/session/fail-register-github",
      }),
      getRegisterGithub
    );
    this.get("/fail-register-github", ["PUBLIC"], getFailRegisterGithub);
    //end github auth
  }
}

const sessionRouter = new SessionRouter();
const router = sessionRouter.getRouter();
export default router;
