import { userService } from "../service/index.js";

class UserController {
  constructor() {
    this.userService = userService;
  }
  getUsers = async (req, res, next) => {
    try {
      let limit = req.query.limit ?? null;
      let users = await this.userService.get(limit);
      console.log(users, "users");
      if (limit !== null) {
        res.json({
          status: "200",
          response: users.slice(0, limit),
        });
      }
      if (limit === null && users.length > 0) {
        res.json({
          status: "200",
          response: users,
        });
      } else {
        res.json({
          status: "200",
          response: "No hay productos en el carrito",
        });
      }
    } catch (error) {
      next(error);
    }
  };

  getUser = async (req, res, next) => {
    try {
      let { uid } = req.params;
      console.log(cid);
      let user = await this.userService.getById(uid);

      if (user !== null) {
        res.json({
          status: "200",
          response: user,
        });
      } else {
        res.json({
          status: "404",
          response: "Usuario no encontrado",
        });
      }
    } catch (error) {
      next(error);
    }
  };

  createUser = async (req, res, next) => {
    try {
      const newUser = req.body;
      if (newUser) {
        // let cartCreated = await cart.addCart(products ?? []);
        let userCreated = await this.userService.create(newUser);
        console.log(userCreated, "Usuario creado");
        res.json({
          status: "200",
          response: userCreated,
        });
      } else {
        res.json({
          status: "404",
          response: "Faltan campos por completar",
        });
      }
    } catch (error) {
      next(error);
    }
  };

  updateUser = async (req, res, next) => {
    try {
      const { uid, data } = req.params;

      if (uid && data) {
        const user = await this.userService.update(uid, data);

        if (user !== null) {
          res.json({
            status: "200",
            response: user,
          });
        } else {
          res.json({
            status: "404",
            response: "El usuario no fue encontrado",
          });
        }
      } else {
        res.json({
          status: "400",
          response: "Parámetros incompletos",
        });
      }
    } catch (error) {
      next(error);
    }
  };

  deleteUser = async (req, res, next) => {
    try {
      const { uid, data } = req.params;

      if ((uid, data)) {
        let userSelected = await this.userService.delete(uid, data);
        if (userSelected !== null) {
          res.json({
            status: "200",
            response: userSelected,
          });
        } else {
          res.json({
            status: "404",
            response: userSelected,
          });
        }
      } else {
        res.json({
          status: "400",
          response: "Parámetros incompletos",
        });
      }
    } catch (error) {
      next(error);
    }
  };
}

const { getUsers, deleteUser, getUser, createUser, updateUser } =
  new UserController();

export { getUsers, deleteUser, getUser, createUser, updateUser };
