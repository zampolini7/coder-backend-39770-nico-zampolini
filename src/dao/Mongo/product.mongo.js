import Product from "./Models/Product.js";

class ProductMongo {
  constructor() {
    this.productModel = Product;
  }

  getProducts = async (limit = 5, page = 1) => {
    return await this.productModel.paginate({}, { limit, page });
  };
  getProduct = async (pid) => {
    return await this.productModel.findOne({ _id: pid });
  };
  createProduct = async (newProduct) => {
    return await this.productModel.create(newProduct);
  };
  updateProduct = async (pid, updateToProduct) => {
    return await this.productModel.findByIdAndUpdate(
      { _id: pid },
      updateToProduct
    );
  };
  deleteProduct = async (pid) => {
    return await this.productModel.findByIdAndDelete({ _id: pid });
  };
}

export default ProductMongo;
