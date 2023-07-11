import jwt from "jsonwebtoken";

export default (req, res, next) => {
  const token = jwt.sign(
    {
      email: req.body.email,
    },
    process.env.JWT_SECRET,
    { expiresIn: 60 * 60 * 1000 }
  );
  req.token = token;
  return next();
};
