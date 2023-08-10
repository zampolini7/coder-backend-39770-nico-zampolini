import ProductRepository from "../services/product/product.repository.js";
import CartRepository from "../services/cart/cart.repository.js";
import UserRepository from "../services/user/user.repository.js";
import SessionRepository from "../services/session/session.repository.js";
import { factory } from "../dao/factory.js";

const { ProductDao, CartDao, UserDao, SessionDao } = factory;

const productService = new ProductRepository(ProductDao);
const cartService = new CartRepository(CartDao);
const userService = new UserRepository(UserDao);
const sessionService = new SessionRepository(SessionDao);

export { productService, cartService, userService, sessionService };
