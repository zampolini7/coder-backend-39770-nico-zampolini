import { Router } from "express";
import products_router from "./products.js";
import product_router from "./product.js";
import cart_router from "./carts.js";

const views_router = Router();

views_router.use("/", products_router);
views_router.use("/", product_router);
views_router.use("/", cart_router);

export default views_router;
