import { Router } from "express";
const sessions_router = Router();

sessions_router.get("/current", async (req, res, next) => {
  try {
    // console.log(req.token);
    return res.send({
      message: "ha iniciado sesión",
    });
    // .json({ message: `${req.session.email} ha iniciado sesión` });
  } catch (error) {
    next();
  }
});

// sessions_router.post("/logout", async (req, res, next) => {
//   try {
//     req.session.destroy();
//     return res.status(200).json({ message: "ha cerrado sesión" });
//   } catch (error) {
//     next();
//   }
// });

export default sessions_router;
