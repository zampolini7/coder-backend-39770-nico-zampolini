import authJWT from "../../middlewares/isAuthJtw.js";
import passport_call from "../../middlewares/passport_call.js";
import validatorCreateProduct from "../../middlewares/validator_product.js";
import Product from "../../models/Product.js";
import Router from "../RouterCustom/index.js";

export default class ProductRouter extends Router {
  init() {
    this.get(
      "/",
      ["PUBLIC"],
      passport_call("jwt"),
      authJWT("user-premium"),
      async (req, res, next) => {
        let page = req.query.page ?? 1;
        let limit = req.query.limit ?? 5;
        let title = req.query.title ? new RegExp(req.query.title, "i") : "";
        try {
          let products = await Product.paginate({}, { limit, page });
          console.log(products);
          return res.sendSuccess(products.docs);
        } catch (error) {
          next(error);
        }
      }
    );

    this.getOne(
      "/:pid",
      ["PUBLIC"],

      async (req, res, next) => {
        try {
          let { pid } = req.params;
          console.log(pid);
          let product2 = await Product.findById(pid);
          if (product2 !== null) {
            res.sendSuccess(product2);
          } else {
            res.sendProductNotFound();
          }
        } catch (error) {
          next(error);
        }
      }
    );

    this.post(
      "/",
      ["USER_PREMIUM"],
      passport_call("jwt"),
      authJWT("user-premium"),
      validatorCreateProduct,
      async (req, res, next) => {
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
            res.sendSuccess(productCreated);
          } else {
            res.sendMissingFields();
          }
        } catch (error) {
          next(error);
        }
      }
    );

    this.put(
      "/:pid",
      ["USER_PREMIUM"],
      passport_call("jwt"),
      authJWT("user-premium"),
      async (req, res, next) => {
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
            res.sendUserError(productCreated);
          } else {
            res.sendError;
          }
        } catch (error) {
          next(error);
        }
      }
    );

    this.delete("/:pid", ["USER_PREMIUM"], async (req, res, next) => {
      try {
        let { pid } = req.params;
        console.log(pid);
        if (pid) {
          let product2 = await Product.findByIdAndDelete(pid);

          if (product2 !== null) {
            res.sendSuccess(product2);
          } else {
            res.sendProductNotFound();
          }
        }
      } catch (error) {
        next(error);
      }
    });
  }
}
