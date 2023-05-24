import { Router } from "express";
import Product from "../../models/product.model.js";
// import product from "../../managers/script.js";
const router = Router();

router.get("/", async (req, res, next) => {
  try {
    let products = await Product.find();
    let limit = req.query.limit ?? null;
    if (limit !== null) {
      res.json({
        status: "200",
        response: products.slice(0, limit),
      });
    }
    if (limit === null && products.length > 0) {
      res.json({
        status: "200",
        response: products,
      });
    } else {
      res.json({
        status: "200",
        response: "No hay productos en el carrito",
      });
    }
  } catch (error) {
    next(error);
  }
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

router.post("/", async (req, res, next) => {
  try {
    const newProduct = req.body;
    const { title, description, price, thumbnail, stock } = newProduct;
    if (title && description && price && thumbnail && stock) {
      let productCreated = await Product.create({
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

router.put("/:pid", async (req, res, next) => {
  try {
    let { pid } = req.params;
    const newProduct = req.body;
    const { title, description, price, thumbnail, stock } = newProduct;
    if (title && description && price && thumbnail && stock) {
      //   let response2 = await Product.updateOne({ _id: pid, data });
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
      let product3 = await Product.deleteOne({ _id: pid });
      //   let product2 = await Product.findByIdAndDelete(pid);

      if (product3 !== null) {
        res.json({
          status: "200",
          //   response: product2,
          product3,
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
