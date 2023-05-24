import express from "express";
import __dirname from "./utils.js";
import router from "./router/index.js";
import errorHanlder from "./middlewares/errorHandler.js";
import not_found_handler from "./middlewares/notFoundHandle.js";
import { connect } from "mongoose";

const PORT = 8080;
const server = express();

server.listen(PORT, () => {
  console.log("Bienvenidos a Himalaya :D");
});
server.use(express.static("public"));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use("/", router);
server.use(errorHanlder);
server.use(not_found_handler);
connect("mongodb+srv://nico:hola1234@dbnico.gbunvvu.mongodb.net/commerce")
  .then(() => console.log("yes, conected"))
  .catch((error) => console.log(error));
