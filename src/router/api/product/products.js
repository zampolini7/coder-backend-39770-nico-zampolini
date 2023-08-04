import { Router } from "express";
// import product from "../../dao/managers/script.js";
import Product from "../../models/Product.js";
import validatorCreateProduct from "../../../middlewares/validator_product.js";
import passport from "passport";
import auth from "../../../middlewares/auth.js";
import passport_call from "../../../middlewares/passport_call.js";

const router = Router();

router.get("/", passport_call("jwt"), auth, async (req, res, next) => {
  let page = req.query.page ?? 1;
  let limit = req.query.limit ?? 5;
  let title = req.query.title ? new RegExp(req.query.title, "i") : "";

  console.log("entra aca o ne");
  try {
    let products = await Product.paginate({}, { limit, page });
    console.log(products);
    return res.status(200).json({
      succes: true,
      response: products.docs[0],
    });
  } catch (error) {
    next(error);
  }
});

//.get para Nuevo producto
router.get("/new_product", (req, res) => {
  res.render("new_product");
});

router.get("/:pid", async (req, res, next) => {
  try {
    let { pid } = req.params;
    console.log(pid);
    let product2 = await Product.findById(pid);
    if (product2 !== null) {
      res.json({
        status: "200",
        response: product2,
      });
    } else {
      res.json({
        status: "404",
        response: "Producto no encontrado",
      });
    }
  } catch (error) {
    next(error);
  }
});

router.post("/", auth, validatorCreateProduct, async (req, res, next) => {
  try {
    const newProduct = req.body;
    console.log(newProduct);
    const { title, description, price, thumbnail, stock } = newProduct;
    if (title && description && price && thumbnail && stock) {
      let productCreated = await Product.create({
        title: title,
        description: description,
        price: price,
        thumbnail: thumbnail,
        stock: stock,
      });
      res.json({
        status: "200",
        response: productCreated,
      });
    } else {
      res.json({
        status: "404",
        response: "Faltan campos por completar",
      });
    }
  } catch (error) {
    next(error);
  }
});

router.put("/:pid", async (req, res, next) => {
  try {
    let { pid } = req.params;
    const newProduct = req.body;
    const { title, description, price, thumbnail, stock } = newProduct;
    if (title && description && price && thumbnail && stock) {
      let productCreated = await Product.findByIdAndUpdate(pid, {
        description: description ?? null,
        title: title ?? null,
        price: price ?? null,
        thumbnail: thumbnail ?? null,
        stock: stock ?? null,
      });
      res.json({
        status: "200",
        response: productCreated,
      });
    } else {
      res.json({
        status: "404",
        response: "Faltan campos por completar",
      });
    }
  } catch (error) {
    next(error);
  }
});

router.delete("/:pid", async (req, res, next) => {
  try {
    let { pid } = req.params;
    console.log(pid);
    if (pid) {
      let product2 = await Product.findByIdAndDelete(pid);

      if (product2 !== null) {
        res.json({
          status: "200",
          response: product2,
        });
      } else {
        res.json({
          status: "404",
          response: "No hay productos con ese id",
        });
      }
    }
  } catch (error) {
    next(error);
  }
});

export default router;
