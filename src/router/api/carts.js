import { Router } from "express";
// import cart from "../../dao/managers/cartScript.js";
import Cart from "../../models/Cart.js";
const router = Router();

router.get("/", async (req, res, next) => {
  try {
    let limit = req.query.limit ?? null;
    let carts = await Cart.find().populate("products.product_id");
    console.log(carts, "carts");
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
    // let cart2 = await cart.getCartById(cid);
    let cart2 = await Cart.findById(cid);

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
    if (newCart) {
      // let cartCreated = await cart.addCart(products ?? []);
      let cartCreated = await Cart.create(newCart);
      console.log(cartCreated, "cartCreated");
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
    const { cid, pid, units } = req.params;
    console.log(req.params, "req.para");

    if (cid && pid && units) {
      const cart = await Cart.findByIdAndUpdate(cid, data, {
        new: true,
      }).populate("user_id", "name -_id");

      if (cart !== null) {
        if (
          cart.includes("Las cantidades que quieres ingresar superan el stock")
        ) {
          res.json({
            status: "404",
            response: cart,
          });
        } else {
          res.json({
            status: "200",
            response: cart,
          });
        }
      } else {
        res.json({
          status: "404",
          response: "El carrito no fue encontrado",
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
      // let productDeleted = await cart.deleteProduct(cid, pid, units);
      let productDeleted = await Cart.findByIdAndDelete(cid);

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
