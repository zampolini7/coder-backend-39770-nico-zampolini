import getUserData from "../dto/user.dto.js";
import { sessionService } from "../service/index.js";

class ServiceController {
  constructor() {
    this.sessionService = sessionService;
  }

  getSession = async (req, res, next) => {
    const user = getUserData(req.user);
    try {
      return res.send({
        message: "ha iniciado sesión",
        user: user,
        // user: req.user,
      });
    } catch (error) {
      next();
    }
  };

  createSession = (req, res, next) => {
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
  };

  deleteSession = async (req, res, next) => {
    try {
      req.session.destroy();
      return res.status(200).json({
        success: true,
        message: "User logged out",
      });
    } catch (error) {
      next(error);
    }
  };
  createUser = (req, res) =>
    res.status(201).json({
      success: true,
      message: "User created",
    });

  getFailRegister = (req, res) => {
    res.status(403).json({
      succes: false,
      message: "Bad auth",
    });
  };
  getGithubAuthenticate = (req, res) => {
    console.log("hola");
  };

  getRegisterGithub = (req, res) => {
    res.status(200).redirect("/");
  };
  getFailRegisterGithub = (req, res) => {
    res.status(403).json({
      succes: false,
      message: "Bad auth",
    });
  };
}

const {
  getSession,
  createSession,
  deleteSession,
  createUser,
  getFailRegister,
  getGithubAuthenticate,
  getFailRegisterGithub,
  getRegisterGithub,
} = new ServiceController();

export {
  getSession,
  createSession,
  deleteSession,
  createUser,
  getFailRegister,
  getGithubAuthenticate,
  getFailRegisterGithub,
  getRegisterGithub,
};
