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
      return "El carrito fue agregado exitosamente con el id: " + cart.id;
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
  getCartById(cid) {
    try {
      let cartById = this.carts.find((each) => each.id.toString() === cid);
      if (!cartById) {
        console.log("Not found");
        return null;
      }
      console.log("Found cart with id: " + cid);
      return cartById;
    } catch (error) {
      console.error("getCartById: error" + error);
      return "getCartById: error";
    }
  }

  async deleteCartById(id) {
    try {
      let one = this.getCartById(id);
      if (!one) {
        console.log("error: Not found cart");
        return null;
      }
      this.carts = this.carts.filter((carts) => carts.id.toString() !== id);
      let dataJson = JSON.stringify(this.carts, null, 2);
      await fs.promises.writeFile(this.path, dataJson);
      console.log("deleted cart: " + id);
      return "deleted cart: " + id;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
  //check delete

  // async updateProduct(id, data) {
  //   try {
  //     let one = this.getCartById(id);
  //     if (!one) {
  //       console.log("error: Not found cart");
  //       return "error: Not found cart";
  //     }
  //     if (Object.keys(data).length === 0) {
  //       console.log("error: Insert some values");
  //       return "error: Insert some values";
  //     }
  //     for (let prop in data) {
  //       if (prop !== "quantity" && prop !== "id") {
  //         console.log(`error: ${prop} is not a property of product`);
  //         return "error: insert a correct property";
  //       }
  //       if (prop === "quantity") {
  //         const product = this.getProductById(one.id);
  //         if (data[prop] > product.stock) {
  //           one[prop] = product.stock;
  //         } else {
  //           one[prop] = data[prop];
  //         }

  //         product.stock -= one[prop];
  //       } else {
  //         one[prop] = data[prop];
  //       }
  //     }

  //     let data_json = JSON.stringify(this.carts, null, 2);
  //     await fs.promises.writeFile(this.path, data_json);
  //     console.log("updated cart: " + id);
  //     return "updated cart: " + id;
  //   } catch (error) {
  //     console.log(error);
  //     return "Not found";
  //   }
  // }
  async updateProduct(id, data) {
    try {
      let one = this.getCartById(id);
      console.log(data, one);
      // for (let prop in data) {
      //   one[prop] = data[prop];
      // }

      // let data_json = JSON.stringify(this.carts, null, 2);
      // console.log("despues", this.carts);
      // await fs.promises.writeFile(this.path, data_json);
      // console.log("updated cart: " + id);
      return 200;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

export default CartManager;
