import express from "express";
import errorHandler from "./middlewares/errorHandler.js";
import not_found_handler from "./middlewares/notFoundHandle.js";
import "dotenv/config.js";
import morgan from "morgan";
import index_router from "./router/index.js";
import session from "express-session";
import MongoStore from "connect-mongo";
import initializePassport from "./config/passport.js";
import passport from "passport";
import cookieParser from "cookie-parser";
import expressSession from "express-session";
const server = express();
import cors from "cors";
import { errorMiddleware } from "./middlewares/errors/index.js";

// middlewares
// server.use(
//   session({
//     secret: process.env.SECRET_SESSION,
//     resave: true,
//     saveUninitialized: true,
//     store: MongoStore.create({
//       mongoUrl: process.env.LINK_MONGO,
//       ttl: 120000,
//     }),
//   })
// );

initializePassport();

server.use(passport.initialize());
// server.use(passport.session());
server.use(cookieParser(process.env.SECRET_COOKIE));

// server.use(
//   expressSession({
//     store: MongoStore.create({
//       mongoUrl: process.env.LINK_MONGO,
//       ttl: 120000,
//     }),
//     secret: process.env.SECRET_SESSION,
//     resave: true, //permite mantener la session activa
//     saveUninitialized: true, // permite guardar una no session o una vacia.
//     ttl: 604800000, // tiempo de vida de la session
//   })
// );

server.use(express.json());
server.use(express.urlencoded({ extended: true })); // antes tenia '/public', express.urlencoded...
server.use("/", express.static("public"));
server.use(morgan("dev"));
server.use(cors());

server.use("/api", index_router);
server.use(errorMiddleware);
// server.use(errorHandler);
server.use(not_found_handler);

export default server;
