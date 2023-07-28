import { genSaltSync, hashSync } from "bcrypt";

export default function createHash(req, res, next) {
  req.body.password = hashSync(req.body.password, genSaltSync(10));
  return next();
}
