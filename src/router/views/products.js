import { Router } from "express";
import product from "../../dao/managers/script.js";
const products_router = Router();

products_router.get("/products", async (req, res, next) => {
  const response = await fetch(
    `http://localhost:${process.env.PORT}/api/products/`
  );
  const responseJson = await response.json();
  const products = responseJson.response;
  try {
    return res.render("products", {
      title: "products",
      products: products,
    });
  } catch (error) {
    next(error);
  }
});

export default products_router;
