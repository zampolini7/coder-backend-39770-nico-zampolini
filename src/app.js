import express from "express";
import errorHandler from "./middlewares/errorHandler.js";
import not_found_handler from "./middlewares/notFoundHandle.js";
import "dotenv/config.js";
import morgan from "morgan";
import index_router from "./router/index.js";
import session from "express-session";
import MongoStore from "connect-mongo";
import initializePassport from "./configs/passport.js";
import passport from "passport";

const server = express();

//middlewares
server.use(
  session({
    secret: process.env.SECRET_SESSION,
    resave: true,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: process.env.LINK_MONGO,
      ttl: 10000,
    }),
  })
);

initializePassport();
server.use(passport.initialize());
server.use(passport.session());

server.use(express.json());
server.use(express.urlencoded({ extended: true })); // antes tenia '/public', express.urlencoded...
server.use("/", express.static("public"));
server.use(morgan("dev"));

server.use("/api", index_router);
server.use(errorHandler);
server.use(not_found_handler);

export default server;
