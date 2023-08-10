import RouterCustom from "../../RouterCustom/index.js";
import {
  getCarts,
  getCart,
  createCart,
  updateCart,
  deleteCart,
} from "../../../controllers/carts.controller.js";
import passport_call from "../../../middlewares/passport_call.js";
import isRoleAuth from "../../../middlewares/isRoleAuth.js";

class CartRouter extends RouterCustom {
  init() {
    this.get(
      "/",
      ["PUBLIC"],
      passport_call("jwt"),
      isRoleAuth("user"),
      getCarts
    );
    this.getOne(
      "/cid",
      ["USER_PREMIUM"],
      passport_call("jwt"),
      isRoleAuth("user"),
      getCart
    );

    this.post(
      "/",
      // ["USER_PREMIUM"],
      ["PUBLIC"],
      passport_call("jwt"),
      isRoleAuth("user"),
      createCart
    );
    this.put(
      "/:cid",
      // ["USER_PREMIUM"],
      ["PUBLIC"],
      passport_call("jwt"),
      isRoleAuth("user"),
      updateCart
    );
    this.delete(
      "/:cid",
      // ["USER_PREMIUM"],
      ["PUBLIC"],
      passport_call("jwt"),
      isRoleAuth("user"),
      deleteCart
    );
  }
}

const cartRouter = new CartRouter();
const router = cartRouter.getRouter();
export default router;
