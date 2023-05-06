import { Router } from "express";
import product from "../../managers/script.js";
const router = Router();

router.get("/", (req, res, next) => {
  try {
    let products = product.getProducts();
    let limit = req.query.limit ?? null;
    if (limit !== null) {
      res.json({
        success: true,
        products: products.slice(0, limit),
      });
    } else {
      res.json({
        success: true,
        products: products,
      });
    }
    res.json({
      status: "ok",
    });
  } catch (error) {
    next(error);
  }
});

router.get("/:pid", async (req, res, next) => {
  try {
    let { pid } = req.params;
    console.log(pid);
    let product2 = await product.getProductById(pid);

    if (product2 !== null) {
      res.json({
        success: true,
        products: product2,
      });
    } else {
      res.json({
        success: false,
        products: "Producto no encontrado",
      });
    }
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const newProduct = req.body;
    const { title, description, price, thumbnail, stock } = newProduct;
    if (title && description && price && thumbnail && stock) {
      let productCreated = await product.addProduct({
        description: description ?? null,
        title: title ?? null,
        price: price ?? null,
        thumbnail: thumbnail ?? null,
        stock: stock ?? null,
      });
      res.json({
        status: "succes",
        id: productCreated.id,
        products: "producto agregado",
      });
    } else {
      res.json({
        status: "error",
        message: "Faltan campos por completar",
      });
    }
  } catch (error) {
    next(error);
  }
});

router.put("/:pid", async (req, res) => {
  try {
    let { pid } = req.params;
    const newProduct = req.body;
    const { title, description, price, thumbnail, stock } = newProduct;
    if (title && description && price && thumbnail && stock) {
      let productCreated = await product.updateProduct(pid, {
        description: description ?? null,
        title: title ?? null,
        price: price ?? null,
        thumbnail: thumbnail ?? null,
        stock: stock ?? null,
      });
      res.json({
        status: "succes",
        id: productCreated.id,
        products: "producto editado",
      });
    } else {
      res.json({
        status: "error",
        message: "Faltan campos por completar",
      });
    }
  } catch (error) {
    next(error);
  }
});

router.delete("/:pid", async (req, res) => {
  try {
    let { pid } = req.params;
    console.log(pid);
    if (pid) {
      let product2 = await product.deleteProductById(pid);

      if (product2 !== null) {
        res.json({
          status: "succes",
          productDeleted: product2,
        });
      } else {
        res.json({
          status: "error",
          message: "Faltan ingresa un id valido",
        });
      }
    }
  } catch (error) {
    next(error);
  }
});

export default router;
