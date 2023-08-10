import { compareSync } from "bcrypt";

export default async function (req, res, next) {
  console.log(req.body, "req.body");
  let verified = compareSync(req.body.password, req.user.password);
  if (verified) {
    console.log("esta verificado");
    return next();
  } else {
    return res.status(401).json({
      success: false,
      message: "Invalid credentials",
    });
  }
}
