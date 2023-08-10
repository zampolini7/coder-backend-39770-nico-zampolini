export default class UserRepository {
  constructor(dao) {
    this.dao = dao;
  }

  get = async () => {
    let result = await this.dao.get();
    return result;
  };
  getById = async (uid) => {
    let result = await this.dao.getById(uid);
    return result;
  };
  create = async (newUser) => {
    // aca viene el dto
    let result = await this.dao.create(newUser);
    return result;
  };
  update = async (uid, updateUser) => {
    let result = await this.dao.update(uid, updateUser);
    return result;
  };
  delete = async (pid) => {
    let result = await this.dao.delete(pid);
    return result;
  };
}
