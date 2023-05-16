import { Router } from "express";
import newProduct_router from "./newProducts.js";
import home_router from "./home.js";
import chat_router from "./chat.js";

const router = Router();

function views_function(req, res) {
  console.log("aca");
  return res.json({ endpoint: "paaaaapi" });
}

router.get("/views", views_function);

router.use('/products', newProduct_router)
router.use('/', home_router)
router.use('/chat', chat_router)

export default router;
