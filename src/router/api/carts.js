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
router.put("/:cid/product/:pid/:units", async (req, res, next) => {
  try {
    let { cid, pid, units } = req.params;

    if (cid && pid && units) {
      let productUpdated = await cart.updateProduct(cid, pid, units);
      if (
        productUpdated !== null &&
        !productUpdated.includes(
          "Las cantidades que quieres ingresar superan el stock"
        )
      ) {
        res.json({
          status: "200",
          response: productUpdated,
        });
      } else if (
        productUpdated !== null &&
        productUpdated.includes(
          "Las cantidades que quieres ingresar superan el stock"
        )
      ) {
        res.json({
          status: "404",
          response: productUpdated,
        });
      } else {
        res.json({
          status: "404",
          response: productUpdated,
        });
      }
    } else {
      res.json({
        status: "400",
        response: "Parámetros incompletos",
      });
    }
  } catch (error) {
    next(error);
  }
});

router.delete("/:cid/product/:pid/:units", async (req, res, next) => {
  try {
    let { cid, pid, units } = req.params;

    if (cid && pid && units) {
      let productDeleted = await cart.deleteProduct(cid, pid, units);
      if (
        productDeleted !== null &&
        !productDeleted.includes(
          "La cantidad que quieres quitar supera la cantidad en el carrito"
        )
      ) {
        res.json({
          status: "200",
          response: productDeleted,
        });
      } else if (
        productDeleted !== null &&
        productDeleted.includes(
          "La cantidad que quieres quitar supera la cantidad en el carrito"
        )
      ) {
        res.json({
          status: "404",
          response: productDeleted,
        });
      } else {
        res.json({
          status: "404",
          response: productDeleted,
        });
      }
    } else {
      res.json({
        status: "400",
        response: "Parámetros incompletos",
      });
    }
  } catch (error) {
    next(error);
  }
});

export default router;
