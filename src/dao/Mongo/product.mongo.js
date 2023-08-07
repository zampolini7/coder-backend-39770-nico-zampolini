import Product from "./Models/Product.js";

class ProductMongo {
  constructor() {
    this.productModel = Product;
  }

  get = async (limit = 5, page = 1) => {
    return await this.productModel.paginate({}, { limit, page });
  };
  getById = async (pid) => {
    return await this.productModel.findOne({ _id: pid });
  };
  create = async (newProduct) => {
    return await this.productModel.create(newProduct);
  };
  update = async (pid, updateToProduct) => {
    return await this.productModel.findByIdAndUpdate(
      { _id: pid },
      updateToProduct
    );
  };
  delete = async (pid) => {
    return await this.productModel.findByIdAndDelete({ _id: pid });
  };
}

const productMongo = new ProductMongo();

export default productMongo;
