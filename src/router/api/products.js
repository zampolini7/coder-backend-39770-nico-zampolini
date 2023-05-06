import { Router } from "express";

const router = Router();

router.get("/", (req, res, next) => {
  try {
    let cuenta = n1 + n2;
    res.json({
      status: "ok",
    });
  } catch (error) {
    next(error);
  }
});

// router.post("/", (req, res) => {
//   const pet = req.body;

//   res.send({
//     status: "succes",
//   });
// });

// const products_route = "/GET/api/products";

// const products_function = (req, res) => {
//   try {
//     let products = product.getProducts();
//     let limit = req.query.limit ?? null;
//     if (limit !== null) {
//       res.send({
//         success: true,
//         products: products.slice(0, limit),
//       });
//     } else {
//       res.send({
//         success: true,
//         products: products,
//       });
//     }
//   } catch (error) {
//     res.send({
//       succes: false,
//       error: error ?? "Ha sucedido un erroraso mi rey",
//     });
//   }
// };
// router.get(products_route, products_function);

// const product_id_route = "/GET/api/products/:pid";

// async function produc_id_function(req, res) {
//   try {
//     let { pid } = req.params;
//     console.log(pid);
//     let product2 = await product.getProductById(pid);

//     if (product2 !== null) {
//       res.send({
//         success: true,
//         products: product2,
//       });
//     } else {
//       res.send({
//         success: false,
//         products: "Producto no encontrado",
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
// router.get(product_id_route, produc_id_function);
export default router;
