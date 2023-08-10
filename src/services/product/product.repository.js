import productDTO from "../../dto/product.dto.js";

export default class ProductRepository {
  constructor(dao) {
    this.dao = dao;
  }

  get = async () => {
    console.log("llega al repo");
    let result = await this.dao.get();
    return result;
  };
  getById = async (pid) => {
    let result = await this.dao.getById(pid);
    return result;
  };
  create = async (newProdudct) => {
    // aca viene el dto
    // const productDto = new productDTO(newProdudct);
    let result = await this.dao.create(newProdudct);
    return result;
  };
  update = async (pid, updateToProduct) => {
    let result = await this.dao.update(pid, updateToProduct);
    return result;
  };
  delete = async (pid) => {
    let result = await this.dao.delete(pid);
    return result;
  };
}
