import express from "express";
import { __dirname } from "./utils.js";
import router from "./router/index.js";
import errorHanlder from "./middlewares/errorHandler.js";
import not_found_handler from "./middlewares/notFoundHandle.js";
import { engine } from "express-handlebars";

const server = express();

//setting template engine
server.engine("handlebars", engine());
server.set("view engine", "handlebars");
server.set("views", __dirname + "/views");

//setting middlewares
server.use("/public", express.static("public"));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

//setting router
server.use("/", router);
server.use(errorHanlder);
server.use(not_found_handler);

export default server;
