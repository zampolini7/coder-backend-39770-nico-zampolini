import { persistence } from "../config/index.js";

let ProductDao;
let UserDao;
let CartDao;

switch (persistence) {
  case "MONGO":
    let ProductDaoMongo = await import("../dao/Mongo/product.mongo.js");
    let CartDaoMongo = await import("../dao/Mongo/cart.mongo.js");
    let UsersDaoMongo = await import("../dao/Mongo/users.mongo.js");

    ProductDao = ProductDaoMongo;
    CartDao = CartDaoMongo;
    UserDao = UsersDaoMongo;
    break;

  case "MEMROY":

  
    break;

  case "FILE":
    break;

  default:
    break;
}

export default {
  ProductDao,
  UserDao,
  CartDao,
};
