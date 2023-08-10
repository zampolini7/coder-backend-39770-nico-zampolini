import RouterCustom from "../../RouterCustom/index.js";
import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../../../controllers/users.controller.js";

class UserRouter extends RouterCustom {
  init() {
    this.get("/", ["PUBLIC"], getUsers);
    this.getOne("/cid", ["USER_PREMIUM"], getUser);

    this.post("/", ["USER_PREMIUM"], createUser);
    this.put("/:cid", ["USER_PREMIUM"], updateUser);
    this.delete("/:cid", ["USER_PREMIUM"], deleteUser);
  }
}

const userRouter = new UserRouter();
const router = userRouter.getRouter();
export default router;
