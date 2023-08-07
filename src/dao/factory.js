import config from "../config/index.js";

let ProductDao;
let UserDao;
let CartDao;
console.log(config.persistence, "config.persistence en factory");
switch (config.persistence) {
  case "MONGO":
    let ProductDaoMongo = (await import("../dao/Mongo/product.mongo.js"))
      .default;
    // let CartDaoMongo = await import("../dao/Mongo/cart.mongo.js");
    // let UsersDaoMongo = await import("../dao/Mongo/users.mongo.js");

    ProductDao = ProductDaoMongo;
    // CartDao = CartDaoMongo;
    // UserDao = UsersDaoMongo;
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

export const factory = { ProductDao, UserDao, CartDao };
