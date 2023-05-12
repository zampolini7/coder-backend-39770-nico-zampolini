import fs from "fs";

class CartManager {
  constructor(path) {
    this.path = path;
    this.carts = [];
    this.init(path);
  }

  init(path) {
    try {
      let fileExists = fs.existsSync(path);
      if (!fileExists) {
        fs.writeFileSync(path, "[]");
        console.log("File created at " + this.path);
        return "File created at " + this.path;
      } else {
        let data = fs.readFileSync(path, "utf-8");
        this.carts = JSON.parse(data);
        console.log("Data recovered");
        return "Data recovered";
      }
    } catch (error) {
      console.error("init: error", error);
      return "init: error";
    }
  }

  async addCart(data) {
    try {
      let cart = { id: null, products: [] };
      if (this.carts.length > 0) {
        let next_id = this.carts[this.carts.length - 1].id + 1;
        cart.id = next_id;
      } else {
        cart.id = 1;
      }

      let dataToCart = data.map((e) => {
        return { id: e.id, quantity: e.quantity ?? 1 };
      });

      cart.products = dataToCart;

      this.carts.push(cart);

      let data_json = JSON.stringify(this.carts, null, 2);

      await fs.promises.writeFile(this.path, data_json);
      console.log("Cart added successfully: " + cart.id);
      return;
    } catch (error) {
      console.error("addCart: error", error);
      return "addCart: error";
    }
  }

  getCarts(quantity) {
    try {
      let slice_array = this.carts.slice(0, quantity);
      console.log(slice_array);
      return slice_array;
    } catch (error) {
      console.error("getCarts: error" + error);
      return "getCarts: error";
    }
  }
  getCartById(pid) {
    try {
      let cartById = this.carts.find((each) => each.id.toString() === pid);
      if (!cartById) {
        console.log("Not found");
        return "Not found";
      }
      console.log("Found cart with id: " + pid);
      return cartById;
    } catch (error) {
      console.error("getCartById: error" + error);
      return "getCartById: error";
    }
  }
}

export default CartManager;
