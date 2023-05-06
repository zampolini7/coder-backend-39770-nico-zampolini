import express from "express";
import product from "./script.js";
import cart from "./cartScript.js";

let server = express();

let PORT = 8080;

let ready = () => console.log("Server ready on port: " + PORT);

server.listen(PORT, ready);
server.use(express.urlencoded({ extended: true }));

let index_route = "/";
let index_function = (req, res) => {
  res.send("Bienvenidos a Himalaya, digo mi api de productos :D");
};

server.get(index_route, index_function);

const products_route = "/GET/api/products";

const products_function = (req, res) => {
  try {
    let products = product.getProducts();
    let limit = req.query.limit ?? null;
    if (limit !== null) {
      res.send({
        success: true,
        products: products.slice(0, limit),
      });
    } else {
      res.send({
        success: true,
        products: products,
      });
    }
  } catch (error) {
    res.send({
      succes: false,
      error: error ?? "Ha sucedido un erroraso mi rey",
    });
  }
};
server.get(products_route, products_function);

const product_id_route = "/GET/api/products/:pid";

async function produc_id_function(req, res) {
  try {
    let { pid } = req.params;
    console.log(pid);
    let product2 = await product.getProductById(pid);

    if (product2 !== null) {
      res.send({
        success: true,
        products: product2,
      });
    } else {
      res.send({
        success: false,
        products: "Producto no encontrado",
      });
    }
  } catch (error) {
    console.log(error);
    res.send({
      success: false,
      products: error,
    });
  }
}
server.get(product_id_route, produc_id_function);

const carts_rout = "/GET/api/carts";

async function carts_function(req, res) {
  try {
    let carts = cart.getCarts();
    let limit = req.query.limit ?? null;
    if (limit !== null) {
      res.send({
        success: true,
        products: carts.slice(0, limit),
      });
    } else {
      res.send({
        success: true,
        products: carts,
      });
    }
  } catch (error) {
    res.send({
      succes: false,
      error: error ?? "Ha sucedido un erroraso mi rey",
    });
  }
}

server.get(carts_rout, carts_function);

const cart_id_route = "/GET/api/carts/:cid";

async function cart_id_function(req, res) {
  try {
    let { cid } = req.params;
    let cart2 = await cart.getCartById(cid);
    console.log(cart2);
    if (cart2 !== "Not found") {
      res.send({
        success: true,
        products: cart2,
      });
    } else {
      res.send({
        success: false,
        products: "Carrito no encontrado",
      });
    }
  } catch (error) {
    console.log(error);
    res.send({
      success: false,
      products: error,
    });
  }
}
server.get(cart_id_route, cart_id_function);
