import { Router } from "express";
import fs from "fs/promises";

const home_router = Router();

home_router.get("/", async (req, res, next) => {
  try {
    const response = await fetch(
      `http://localhost:${process.env.PORT}/api/products/`
    );
    const responseJson = await response.json();
    const products = responseJson.response;
    return res.render("products", {
      products: products,
      title: "home",
      script: "/products.js",
    });
  } catch (error) {
    next(error);
  }
});

export default home_router;
