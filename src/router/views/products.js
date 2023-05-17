import { Router } from "express";
import product from "../../managers/script.js";
const products_router = Router();

products_router.get("/products", async (req, res, next) => {
  // const products = product.getProducts();
  const response = await fetch("http://localhost:8080/api/products/");
  const responseJson = await response.json();
  const products = responseJson.response;
  try {
    return res.render("products", {
      title: "products",
      script: "products.js",
      products: products,
    });
  } catch (error) {
    next(error);
  }
});

export default products_router;
