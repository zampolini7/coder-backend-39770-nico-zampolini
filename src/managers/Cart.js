import fs from "fs";
import product from "./script.js";
class CartManager {
  constructor(path) {
    this.path = path;
    this.carts = [];
    this.products = product.getProducts();
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

  async deleteProduct(cid, pid, units) {
    try {
      let cartToDeleteFrom = this.getCartById(cid); //obtengo el carrito
      if (!cartToDeleteFrom) {
        console.log("Cart not found");
        return `Cart with id: ${cid} not found`; // si no encuentra el cid, devuelve esto
      }

      let productToDelete = cartToDeleteFrom.products.find(
        (p) => p.id.toString() === pid //encuentra el producto al que le quiero sacar elementos
      );
      if (!productToDelete) {
        console.log("Product not found in cart");
        return `Product with id: ${pid} not found in cart with id: ${cid}`; // si no esta ese producto devuelve esto
      }

      const requestedUnits = parseInt(units); // convierto a number las unidades a modificar
      const cartUnits = productToDelete.quantity; //obtengo las cantidades del producto en el carrito
      const unitsToRemove = Math.min(requestedUnits, cartUnits);

      if (requestedUnits > cartUnits) {
        return `La cantidad que quieres quitar del producto ${pid} supera la cantidad en el carrito: ${cartUnits}`; //si lo que quiero sacar supera en cantidad a lo que hay en el carrito devuelvo esto
      }

      productToDelete.quantity -= unitsToRemove; //aca saca las cantidades aplicadas

      // Agregar las unidades al stock del producto
      let productIndex = this.products.findIndex(
        (p) => p.id.toString() === pid
      );
      if (productIndex !== -1) {
        this.products[productIndex].stock += unitsToRemove;
      }

      // Eliminar el producto del carrito si la cantidad llega a cero
      if (productToDelete.quantity === 0) {
        cartToDeleteFrom.products = cartToDeleteFrom.products.filter(
          (p) => p.id.toString() !== pid
        );
      }

      let productToReturnStock = this.products.find(
        (e) => e.id === productToDelete.id //encuentro el producto al que le devuelvo el stock
      );
      console.log(
        productToReturnStock.stock,
        "producto antes de devolver stock?"
      );

      console.log(
        (productToReturnStock.stock =
          productToReturnStock.stock + unitsToRemove),
        "producto despues de devolver stock?"
      );
      console.log(productToReturnStock, "asi queda el product");
      console.log(productToReturnStock.id, "este es el id product");

      let result = await product.updateProduct(
        productToReturnStock.id.toString(),
        productToReturnStock
      );

      let data_json = JSON.stringify(this.carts, null, 2);
      await fs.promises.writeFile(this.path, data_json);
      console.log(
        `Deleted ${unitsToRemove} units of product ${pid} from cart ${cid}`
      );
      return `Deleted ${unitsToRemove} units of product ${pid} from cart ${cid}`;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  //check delete

  async updateProduct(id, productId, units) {
    try {
      let cartToUpdate = this.getCartById(id);
      if (!cartToUpdate) {
        console.log("Cart not found");
        return `Cart with id: ${id} not found`;
      }
      let productToUpdate = cartToUpdate.products.find(
        (p) => p.id.toString() === productId
      );
      if (!productToUpdate) {
        console.log("Product not found in cart");
        return `Product with id: ${productId} not found in cart with id: ${id}`;
      }

      let matchingElementUnits = this.products.find(
        (p) => p.id.toString() === productId
      );
      if (!matchingElementUnits) {
        console.log("Product not found");
        return `Product with id: ${productId} not found`;
      }

      const currentStock = matchingElementUnits.stock;
      const requestedUnits = parseInt(units);
      const availableUnits = Math.min(requestedUnits, currentStock);

      if (requestedUnits > currentStock) {
        return `Las cantidades que quieres ingresar del producto ${matchingElementUnits.id}: ${requestedUnits} superan el stock de ${currentStock}`;
      }

      productToUpdate.quantity += availableUnits;
      matchingElementUnits.stock -= availableUnits;

      let data_json = JSON.stringify(this.carts, null, 2);
      await fs.promises.writeFile(this.path, data_json);

      // Actualizar el stock en la lista de productos
      let productIndex = this.products.findIndex((p) => p.id === productId);
      if (productIndex !== -1) {
        this.products[productIndex].stock -= availableUnits;
      }

      console.log("Updated cart: " + id);
      return "Updated cart: " + id;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

export default CartManager;
