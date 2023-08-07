import { Router } from "express";
import cart_router from "./api/carts/CartRouter.js";
import cookies_router from "./api/cookies/cookies.js";
import product_router from "./api/product/ProductRouter.js";
import mail_router from "./pruebasmail/index.js";
import session_router from "./api/session/sessionRouter.js";
import pruebas_router from "./api/pruebas/index.js";
// import sessions_router from "./api/session/session.js";

const index_router = Router();

index_router.use("/products", product_router);
index_router.use("/carts", cart_router);
index_router.use("/session", session_router);
index_router.use("/cookies", cookies_router);
index_router.use("/mail", mail_router);
index_router.use("/pruebas", pruebas_router);
// index_router.use("/session", sessions_router);

export default index_router;
