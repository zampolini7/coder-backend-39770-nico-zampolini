import { Router } from "express";
import config from "../../config/index.js";
import jwt from "jsonwebtoken";
export default class RouterCustom {
  constructor() {
    this.router = Router();
    this.init();
  }

  getRouter() {
    return this.router;
  }
  init() {}

  applyCallbacks(callbacks) {
    return callbacks.map((callback) => async (...params) => {
      try {
        await callback.apply(this, params);
      } catch (error) {
        console.log(error);
        params[1].status(500).send(error);
      }
    });
  }

  handlePolicies = (policies) => (req, res, next) => {
    // ['USER'] ['USER', 'USER_PREMIUN']
    console.log(policies, "policies");
    if (policies[0] === "PUBLIC") return next();
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      console.log(req.headers.authorization);
      console.log("entro aca");
      return res
        .status(401)
        .send({ status: "error", error: "Unauthorization" });
    }
    // 'BEARER lakhjsdosadfjasdfsad'
    console.log("encontro el req.headers");
    const token = authHeader.split(" ")[1];
    console.log(token, "token");
    let user = jwt.verify(token, config.privateKeyJwt);
    console.log(user, "user");
    if (!policies.includes(user.role.toUpperCase())) {
      return res
        .status(403)
        .send({ status: "error", error: "no autorizations" });
    }
    req.user = user;
    next();
  };

  generateCustomResponses(req, res, next) {
    res.sendSuccess = (payload) =>
      res.send({
        status: "success",
        payload,
      });
    res.sendServerError = (error) =>
      res.status(500).send({
        status: "error",
        error,
      });
    res.sendUserError = (error) =>
      res.status(400).send({
        status: "error",
        error,
      });
    res.sendProductNotFound = (error) =>
      res.status(404).send({
        status: "error",
        error,
      });
    res.sendMissingFields = (error) =>
      res.status(404).send({
        status: "error",
        error,
      });
    next();
  }

  get(path, policies, ...callbacks) {
    this.router.get(
      path,
      this.handlePolicies(policies),
      this.generateCustomResponses,
      this.applyCallbacks(callbacks)
    );
  }

  getOne(path, policies, ...callbacks) {
    this.router.get(
      path,
      this.handlePolicies(policies),
      this.generateCustomResponses,
      this.applyCallbacks(callbacks)
    );
  }

  post(path, policies, ...callbacks) {
    this.router.post(
      path,
      this.handlePolicies(policies),
      this.generateCustomResponses,
      this.applyCallbacks(callbacks)
    );
  }
  put(path, policies, ...callbacks) {
    this.router.put(
      path,
      this.handlePolicies(policies),
      this.generateCustomResponses,
      this.applyCallbacks(callbacks)
    );
  }
  delete(path, policies, ...callbacks) {
    this.router.delete(
      path,
      this.handlePolicies(policies),
      this.generateCustomResponses,
      this.applyCallbacks(callbacks)
    );
  }
}
