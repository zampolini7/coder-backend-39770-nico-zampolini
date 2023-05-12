import { Router } from "express";

const products_router = Router();

products_router.get("/products", async (req, res, next) => {
  try {
    return res.render("products", {
      title: "products",
      //   script: "products.js",
    });
  } catch (error) {
    next(error);
  }
});

export default products_router;
