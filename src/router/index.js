import { Router } from "express";
import auth_router from "./api/auth.js";
import products_router from "./api/products.js";
import cart_router from "./api/carts.js";
import cookies_router from "./api/cookies.js";
import sessions_router from "./api/session.js";

const index_router = Router();

index_router.use("/auth", auth_router);
index_router.use("/products", products_router);
index_router.use("/carts", cart_router);
index_router.use("/cookies", cookies_router);
index_router.use("/session", sessions_router);

export default index_router;
