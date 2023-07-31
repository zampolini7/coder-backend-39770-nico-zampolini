import { productService } from "../service/index.js";

class ProductController2 {
  constructor() {
    this.productService = productService;
  }

  getProducts = async (req, res, next) => {
    let page = req.query.page ?? 1;
    let limit = req.query.limit ?? 5;
    let title = req.query.title ? new RegExp(req.query.title, "i") : "";
    try {
      let products = await this.productService.getProducts(limit, page);
      console.log(products);
      return res.sendSuccess(products.docs);
    } catch (error) {
      next(error);
    }
  };
  getProduct = async (req, res, next) => {
    try {
      let { pid } = req.params;
      let product2 = await this.productService.getProduct(pid);
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
        let productCreated = await this.productService.createProduct({
          title: title,
          description: description,
          price: price,
          thumbnail: thumbnail,
          stock: stock,
        });
        res.sendSuccess(productCreated);
      } else {
        res.sendMissingFields();
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
        let productCreated = await this.productService.updateProduct(pid, {
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
        let product2 = await this.productService.deleteProduct(pid);

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
