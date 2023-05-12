import { Router } from "express";
import products_router from "./products.js";
const views_router = Router();

views_router.use("/", products_router);

export default views_router;
