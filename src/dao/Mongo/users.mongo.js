import User from "./Models/User.js";

class UserMongo {
  constructor() {
    this.userModel = User;
  }

  get = async (limit = 5, page = 1) => {
    return await this.userModel.paginate({}, { limit, page });
  };
  getById = async (uid) => {
    return await this.userModel.findOne({ _id: uid });
  };
  create = async (newUser) => {
    return await this.userModel.create(newUser);
  };
  update = async (uid, updateUser) => {
    return await this.userModel.findByIdAndUpdate({ _id: uid }, updateUser);
  };
  delete = async (uid) => {
    return await this.userModel.findByIdAndDelete({ _id: uid });
  };
}

const productMongo = new UserMongo();

export default productMongo;
