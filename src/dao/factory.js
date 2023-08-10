import config from "../config/index.js";

let ProductDao;
let UserDao;
let CartDao;
let SessionDao;
switch (config.persistence) {
  case "MONGO":
    let ProductDaoMongo = (await import("../dao/Mongo/product.mongo.js"))
      .default;
    let CartDaoMongo = (await import("../dao/Mongo/cart.mongo.js")).default;
    let UsersDaoMongo = (await import("../dao/Mongo/users.mongo.js")).default;
    SessionDao = (await import("../dao/Mongo/session.mongo.js")).default;
    ProductDao = ProductDaoMongo;
    CartDao = CartDaoMongo;
    UserDao = UsersDaoMongo;

    break;

  case "MEMORY":
    ProductDao = await import("../dao/Memoria/product.memory.js");
    CartDao = await import("../dao/Memoria/cart.memory.js");
    // UserDao = UsersDaoMongo;
    break;

  case "FILE":
    /// los mismos dao pero de file
    break;

  default:
    break;
}
console.log(ProductDao);

export const factory = { ProductDao, UserDao, CartDao, SessionDao };
