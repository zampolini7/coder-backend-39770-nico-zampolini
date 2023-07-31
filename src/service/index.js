import ProductDaoMongo from "../dao/Mongo/product.mongo.js";

const productService = new ProductDaoMongo();

export { productService };
