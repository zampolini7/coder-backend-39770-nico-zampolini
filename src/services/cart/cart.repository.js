export default class CartRepository {
  constructor(dao) {
    this.dao = dao;
  }

  get = async () => {
    let result = await this.dao.get();
    return result;
  };
  getById = async (pid) => {
    let result = await this.dao.getById(pid);
    return result;
  };
  create = async (newCart) => {
    // aca viene el dto
    let result = await this.dao.create(newCart);
    return result;
  };
  update = async (pid, updateToProduct) => {
    let result = await this.dao.update();
    return result;
  };
  delete = async (pid) => {
    let result = await this.dao.delete();
    return result;
  };
}
