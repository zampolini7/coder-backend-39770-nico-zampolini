import { Router } from "express";
import cart from "../../managers/cartScript.js";
const router = Router();

router.get("/", (req, res, next) => {
  try {
    let limit = req.query.limit ?? null;
    let carts = cart.getCarts();
    if (limit !== null) {
      res.json({
        status: "200",
        response: carts.slice(0, limit),
      });
    }
    if (limit === null && carts.length > 0) {
      res.json({
        status: "200",
        response: carts,
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

router.get("/:cid", async (req, res, next) => {
  try {
    let { cid } = req.params;
    console.log(cid);
    let cart2 = await cart.getCartById(cid);
    if (cart2 !== null) {
      res.json({
        status: "200",
        response: cart2,
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
    const newCart = req.body;
    const { products } = newCart;
    console.log(products);

    if (products) {
      let cartCreated = await cart.addCart(products ?? []);
      res.json({
        status: "200",
        response: cartCreated,
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

router.put("/:cid", async (req, res, next) => {
  try {
    let { cid } = req.params;
    const updatedCart = req.body;
    const { products } = updatedCart;
    console.log(products);
    if (updatedCart) {
      let productCreated = await cart.updateProduct(cid, products[0]);
      res.json({
        status: "200",
        response: productCreated,
      });
    } else {
      res.json({
        status: "404",
        response: productCreated,
      });
    }
  } catch (error) {
    next(error);
  }
});

router.delete("/:cid", async (req, res, next) => {
  try {
    let { cid } = req.params;
    console.log(cid);
    if (cid) {
      let cartDeleted = await cart.deleteCartById(cid);

      if (cartDeleted !== null) {
        res.json({
          status: "200",
          response: cartDeleted,
        });
      } else {
        res.json({
          status: "404",
          response: "No hay carritos con ese id",
        });
      }
    }
  } catch (error) {
    next(error);
  }
});

export default router;
