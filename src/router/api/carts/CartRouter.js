import RouterCustom from "../../RouterCustom/index.js";
import {
  getCarts,
  getCart,
  createCart,
  updateCart,
  deleteCart,
} from "../../../controllers/carts.controller.js";

class CartRouter extends RouterCustom {
  init() {
    this.get("/", ["PUBLIC"], getCarts);
    this.getOne("/cid", ["USER_PREMIUM"], getCart);

    this.post("/", ["USER_PREMIUM"], createCart);
    this.put("/:cid", ["USER_PREMIUM"], updateCart);
    this.delete("/:cid", ["USER_PREMIUM"], deleteCart);
  }
}

const cartRouter = new CartRouter();
const router = cartRouter.getRouter();
export default router;
