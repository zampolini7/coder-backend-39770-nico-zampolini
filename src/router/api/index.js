import { Router } from "express";
import products_router from "./products.js";
import carts_router from "./carts.js";
import chatbot_router from "./chatbot.js"

const router = Router();

router.use("/products", products_router);
router.use("/carts", carts_router);
router.use("/chatbot", chatbot_router);

export default router;
