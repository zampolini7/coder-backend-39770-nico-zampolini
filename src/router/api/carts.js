import { Router } from "express";

const router = Router();
const users = [];

router.get("/", (req, res, next) => {
  try {
    let a = conta1;
    return res.send({
      users,
    });
  } catch (error) {
    next(error);
  }
});

// router.post("/", (req, res) => {
//   const user = req.body;

//   users.push(user);
//   res.send({
//     status: "succes",
//     users,
//   });
// });

// const carts_rout = "/GET/api/carts";

// async function carts_function(req, res) {
//   try {
//     let carts = cart.getCarts();
//     let limit = req.query.limit ?? null;
//     if (limit !== null) {
//       res.send({
//         success: true,
//         products: carts.slice(0, limit),
//       });
//     } else {
//       res.send({
//         success: true,
//         products: carts,
//       });
//     }
//   } catch (error) {
//     res.send({
//       succes: false,
//       error: error ?? "Ha sucedido un erroraso mi rey",
//     });
//   }
// }

// router.get(carts_rout, carts_function);

// const cart_id_route = "/GET/api/carts/:cid";

// async function cart_id_function(req, res) {
//   try {
//     let { cid } = req.params;
//     let cart2 = await cart.getCartById(cid);
//     console.log(cart2);
//     if (cart2 !== "Not found") {
//       res.send({
//         success: true,
//         products: cart2,
//       });
//     } else {
//       res.send({
//         success: false,
//         products: "Carrito no encontrado",
//       });
//     }
//   } catch (error) {
//     console.log(error);
//     res.send({
//       success: false,
//       products: error,
//     });
//   }
// }
// router.get(cart_id_route, cart_id_function);

export default router;
