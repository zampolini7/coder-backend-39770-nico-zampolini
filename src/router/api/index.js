import { Router } from "express";
// import products_router from "./products.js";
import carts_router from "./carts.js";
import products_router from "./product.mongo.js";
import students_router from "./student.mongo.js";
const router = Router();

router.use("/products", products_router);
router.use("/carts", carts_router);
router.use("/students", students_router);

export default router;
