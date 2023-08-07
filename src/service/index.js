// import ProductDaoMongo from "../dao/Mongo/product.mongo.js";
import CartDaoMongo from "../dao/Mongo/cart.mongo.js";
import ProductRepository from "../services/product/product.repository.js";
import CartRepository from "../services/cart/cart.repository.js";
import { factory } from "../dao/factory.js";

const { ProductDao } = factory;

const productService = new ProductRepository(ProductDao);
const cartService = new CartRepository(new CartDaoMongo());

export { productService, cartService };
