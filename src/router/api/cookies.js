import { Router } from "express";

const cookies_router = Router();

cookies_router.get("/set", async (req, res, next) => {
  try {
    return res
      .status(200)
      .cookie(
        "clave",
        JSON.stringify({
          "como eh posible": "ete sucesouu",
        }),
        { maxAge: 20000, signed: true }
      )
      .json({
        success: true,
        message: "cookie seteada",
      });
  } catch (error) {
    next(error);
  }
});

cookies_router.get("/get", async (req, res, next) => {
  console.log(req.cookies);
  try {
    return res.status(200).json(req.cookies);
  } catch (error) {
    next(error);
  }
});

cookies_router.get("/delete", async (req, res, next) => {
  try {
    return res.status(200).clearCookie("clave").json({
      success: true,
      message: "cookie borrada",
    });
  } catch (error) {
    next(error);
  }
});

cookies_router.get("/signed/set/:email", async (req, res, next) => {
  const { email } = req.params;
  try {
    return res
      .status(200)
      .cookie("user", email, {
        maxAge: 600000,
        signed: true,
      })
      .json({
        success: true,
        message: "cookie seteada",
      });
  } catch (error) {
    next(error);
  }
});

cookies_router.get("/signed/get", async (req, res, next) => {
  try {
    return res.status(200).json({
      success: true,
      message: req.signedCookies,
    });
  } catch (error) {
    next(error);
  }
});

export default cookies_router;
