import { Router } from "express";
const product_router = Router();

product_router.get("/products/:pid", async (req, res, next) => {
  let { pid } = req.params;

  const response = await fetch(`http://localhost:8000/api/products/${pid}`);
  const responseJson = await response.json();
  const product = responseJson.response;
  try {
    return res.render("product", {
      title: "product",
      // script: "product.js",
      product: product,
    });
  } catch (error) {
    next(error);
  }
});

export default product_router;
