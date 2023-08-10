import Cart from "./Models/Cart.js";

class CartMongo {
  constructor() {
    this.cartModel = Cart;
  }
  get = async (limit = 5) => {
    return await this.cartModel.find();

    // .paginate({}, { limit })
    // .populate("products.product_id");
  };

  getById = async (cid) => {
    return await this.cartModel.findById(cid);
  };

  create = async (newCart) => {
    return await this.cartModel.create(newCart);
  };

  update = async (cid, updateToCart) => {
    return await this.cartModel
      .findByIdAndUpdate(cid, updateToCart, {
        new: true,
      })
      .populate("user_id", "name -_id");
  };

  delete = async (cid) => {
    return await this.cartModel.findByIdAndDelete(cid);
  };
}

const cart = new CartMongo();

export default cart;
