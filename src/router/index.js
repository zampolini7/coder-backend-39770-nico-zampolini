import { Router } from "express";
import auth_router from "./api/auth.js";
import cart_router from "./api/carts.js";
import cookies_router from "./api/cookies.js";
import ProductRouter from "./ProductRouter/ProductRouter.js";
// import sessions_router from "./api/session.js";
// import products_router from "./api/products.js";
import mail_router from "./pruebasmail/index.js";

const productRouter = new ProductRouter();
const index_router = Router();

index_router.use("/auth", auth_router);
index_router.use("/products", productRouter.getRouter());
index_router.use("/carts", cart_router);
index_router.use("/cookies", cookies_router);
index_router.use("/mail", mail_router);

// index_router.use("/session", sessions_router);

export default index_router;
