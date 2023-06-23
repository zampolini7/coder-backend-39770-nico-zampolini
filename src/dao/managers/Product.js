import fs from "fs";
class ProductManager {
  constructor(path) {
    this.products = [];
    this.path = path;
    this.init(path);
  }

  init(path) {
    let file = fs.existsSync(path);
    if (!file) {
      fs.writeFileSync(path, "[]");
      return "se creo en " + this.path;
    } else {
      this.products = JSON.parse(fs.readFileSync(path, "utf-8"));
      console.log("data recovered");
      return "data recoverd";
    }
  }
  // init check

  async addProduct({ title, description, price, thumbnail, stock }) {
    try {
      let data = { title, description, price, thumbnail, stock };

      if (this.products.length > 0) {
        let next_id = this.products[this.products.length - 1].id + 1;
        data.id = next_id;
      } else {
        data.id = 1;
      }

      this.products.push(data);

      let data_json = JSON.stringify(this.products, null, 2);

      await fs.promises.writeFile(this.path, data_json);
      console.log("Producto agregado correctamente: " + data.id);
      return "Producto agregado correctamente: " + data.id;
    } catch (error) {
      console.log("Error al escribir el archivo: ", error);
      return "error: Error al agregar el producto";
    }
  }

  getProducts(quantity) {
    let slice_array = this.products.slice(0, quantity);
    // console.log(slice_array);
    return slice_array;
  }
  // get products check

  getProductById(id) {
    let productById = this.products.find((each) => each.id.toString() === id);
    if (!productById) {
      console.log("Not found");
      return null;
    }
    console.log("finded product: " + id);
    return productById;
  }

  async deleteProductById(id) {
    try {
      let one = this.getProductById(id);
      if (!one) {
        console.log("error: Not found user");
        return one;
      }
      this.products = this.products.filter(
        (product) => product.id.toString() !== id
      );
      let dataJson = JSON.stringify(this.products, null, 2);
      await fs.promises.writeFile(this.path, dataJson);
      console.log("delete user: " + id);
      return "delete user: " + id;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
  //check delete

  async updateProduct(id, data) {
    try {
      let one = this.getProductById(id);
      if (!one) {
        console.log("error: Not found user");
        return "error: Not found user";
      }
      if (Object.keys(data).length === 0) {
        console.log("error: Insert some values");
        return "error: Insert some values";
      }
      for (let prop in data) {
        if (
          prop !== "id" &&
          prop !== "description" &&
          prop !== "title" &&
          prop !== "price" &&
          prop !== "thumbnail" &&
          prop !== "stock"
        ) {
          console.log(`error: ${prop} is not a property of product`);
          return "error: insert a correct property";
        }
        one[prop] = data[prop];
      }

      let data_json = JSON.stringify(this.products, null, 2);
      await fs.promises.writeFile(this.path, data_json);
      console.log("updated user: " + id);
      return "udpated user: " + id;
    } catch (error) {
      console.log(error);
      return "Not found";
    }
  }
}

export default ProductManager;
