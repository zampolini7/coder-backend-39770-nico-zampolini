import { Router } from "express";
const carts_router = Router();

carts_router.get("/carts/:cid", async (req, res, next) => {
  let { cid } = req.params;

  const response = await fetch(
    `http://localhost:${process.env.PORT}/api/carts/${cid}`
  );
  const responseJson = await response.json();
  const carts = responseJson.response;
  console.log(response, "carts");
  try {
    return res.render("carts", {
      title: "carts",
      script: "carts.js",
      carts: carts.products,
    });
  } catch (error) {
    next(error);
  }
});

export default carts_router;
