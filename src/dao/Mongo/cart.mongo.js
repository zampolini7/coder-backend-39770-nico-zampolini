import Cart from "./Models/Cart.js";

class CartMongo {
  constructor() {
    this.cartModel = Cart;
  }
  getCarts = async (limit = 5) => {
    return await this.cartModel.find();

    // .paginate({}, { limit })
    // .populate("products.product_id");
  };

  getCart = async (cid) => {
    return await this.cartModel.findById(cid);
  };

  createCart = async (newCart) => {
    return await this.cartModel.create(newCart);
  };

  updateCart = async (cid, updateToCart) => {
    return await this.cartModel
      .findByIdAndUpdate(cid, data, {
        new: true,
      })
      .populate("user_id", "name -_id");
  };

  deleteCart = async (cid) => {
    return await this.cartModel.findByIdAndDelete(cid);
  };
}

export default CartMongo;
