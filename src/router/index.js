import { Router } from "express";
import auth_router from "./auth.js";
import products_router from "./api/products.js";
import cart_router from "./api/carts.js";

const index_router = Router();

index_router.use("/auth", auth_router);
index_router.use("/products", products_router);
index_router.use("/carts", cart_router);

export default index_router;
