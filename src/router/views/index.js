import { Router } from "express";
import newProduct_router from "./newProducts.js";
import home_router from "./home.js";
import chat_router from "./chat.js";
import products_router from "./products.js";
import product_router from "./product.js";
import cart_router from "./carts.js";

const views_router = Router();

views_router.use("/", products_router);
views_router.use("/", product_router);
views_router.use("/", cart_router);

views_router.use("/", newProduct_router);
views_router.use("/", home_router);
views_router.use("/", chat_router);

export default views_router;
