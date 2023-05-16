import { Router } from "express";
const carts_router = Router();

carts_router.get("/carts/:pid", async (req, res, next) => {
  let { pid } = req.params;

  const response = await fetch(`http://localhost:8080/api/carts/${pid}`);
  const responseJson = await response.json();
  const carts = responseJson.response;
  console.log(carts);
  try {
    return res.render("carts", {
      title: "carts",
      // script: "carts.js",
      carts: carts.products,
    });
  } catch (error) {
    next(error);
  }
});

export default carts_router;
