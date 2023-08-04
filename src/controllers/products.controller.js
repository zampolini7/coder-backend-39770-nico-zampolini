import { productService } from "../service/index.js";
import CustomError from "../utils/error/customError.js";
import Errors from "../utils/error/enums.js";
import { generateUserErrorInfo } from "../utils/error/generateInfoUser.js";

class ProductController2 {
  constructor() {
    this.productService = productService;
  }

  getProducts = async (req, res, next) => {
    let page = req.query.page ?? 1;
    let limit = req.query.limit ?? 5;
    let title = req.query.title ? new RegExp(req.query.title, "i") : "";
    try {
      let products = await this.productService.get(limit, page);
      console.log(products);
      return res.sendSuccess(products.docs);
    } catch (error) {
      next(error);
    }
  };
  getProduct = async (req, res, next) => {
    try {
      let { pid } = req.params;
      let product2 = await this.productService.getById(pid);
      console.log(product2);
      if (product2 !== null) {
        res.sendSuccess(product2);
      } else {
        res.sendProductNotFound();
      }
    } catch (error) {
      next(error);
    }
  };
  createProduct = async (req, res, next) => {
    try {
      const newProduct = req.body;
      console.log(newProduct);
      const { title, description, price, thumbnail, stock } = newProduct;
      if (title && description && price && thumbnail && stock) {
        let productCreated = await this.productService.create({
          title: title,
          description: description,
          price: price,
          thumbnail: thumbnail,
          stock: stock,
        });
        res.sendSuccess(productCreated);
      } else {
        // res.sendMissingFields();
        CustomError.createError({
          name: "Product creation error",
          cause: generateUserErrorInfo({
            title,
            description,
            price,
            thumbnail,
            stock,
          }),
          message: "Error at creating product",
          code: Errors.INVALID_TYPE_ERROR,
        });
      }
    } catch (error) {
      next(error);
    }
  };
  updateProduct = async (req, res, next) => {
    try {
      let { pid } = req.params;
      const newProduct = req.body;
      const { title, description, price, thumbnail, stock } = newProduct;
      if (title && description && price && thumbnail && stock) {
        let productCreated = await this.productService.update(pid, {
          description: description ?? null,
          title: title ?? null,
          price: price ?? null,
          thumbnail: thumbnail ?? null,
          stock: stock ?? null,
        });
        res.sendUserError(productCreated);
      } else {
        res.sendError;
      }
    } catch (error) {
      next(error);
    }
  };
  deleteProduct = async (req, res, next) => {
    try {
      let { pid } = req.params;
      console.log(pid);
      if (pid) {
        let product2 = await this.productService.delete(pid);

        if (product2 !== null) {
          res.sendSuccess(product2);
        } else {
          res.sendProductNotFound();
        }
      }
    } catch (error) {
      next(error);
    }
  };
}

const { createProduct, deleteProduct, getProduct, getProducts, updateProduct } =
  new ProductController2();
export { createProduct, deleteProduct, getProduct, getProducts, updateProduct };
