import authJWT from "../../../middlewares/isAuthJtw.js";
import passport_call from "../../../middlewares/passport_call.js";
import validatorCreateProduct from "../../../middlewares/validator_product.js";
import Router from "../../RouterCustom/index.js";
import {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../../../controllers/products.controller.js";

class ProductRouter extends Router {
  init() {
    this.get("/", ["PUBLIC"], getProducts);

    this.getOne("/:pid", ["PUBLIC"], getProduct);

    this.post(
      "/",
      ["USER_PREMIUM"],
      passport_call("jwt"),
      authJWT("user-premium"),
      validatorCreateProduct,
      createProduct
    );

    this.put(
      "/:pid",
      ["USER_PREMIUM"],
      passport_call("jwt"),
      authJWT("user-premium"),
      updateProduct
    );

    this.delete("/:pid", ["USER_PREMIUM"], deleteProduct);
  }
}

const productRouter = new ProductRouter();
const router = productRouter.getRouter();
export default router;
