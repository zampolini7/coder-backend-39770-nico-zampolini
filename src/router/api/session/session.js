import { Router } from "express";
const sessions_router = Router();

sessions_router.get("/", async (req, res) => {
  if (!req.session.counter) {
    req.session.counter = 1;
  } else {
    req.session.counter++;
  }
  return res
    .status(200)
    .json({ message: `han ingresado ${req.session.counter} usuarios` });
});

sessions_router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    req.session.email = email;
    req.session.password = password;
    return res
      .status(200)
      .json({ message: `${req.session.email} ha iniciado sesión` });
  } catch (error) {
    next();
  }
});

sessions_router.post("/logout", async (req, res, next) => {
  try {
    req.session.destroy();
    return res.status(200).json({ message: "ha cerrado sesión" });
  } catch (error) {
    next();
  }
});

export default sessions_router;
