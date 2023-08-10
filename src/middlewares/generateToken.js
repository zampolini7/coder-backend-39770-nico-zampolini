import jwt from "jsonwebtoken";

export default (req, res, next) => {
  console.log(req.user, "req.user");
  console.log(req.body, "req.body");
  const token = jwt.sign(
    {
      email: req.body.email,
      role: req.user.role,
    },
    process.env.SECRET_JWT,
    { expiresIn: 60 * 60 * 1000 }
  );
  req.token = token;

  return next();
};
