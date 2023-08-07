import dotenv from "dotenv";
import mongoose from "mongoose";
import { commander } from "../commander.js";
import MongoSingleton from "./MongoSingleton.js";

const { mode } = commander.opts();

console.log(mode);
dotenv.config({
  path: mode === "development" ? "./.env.development" : "./.env.production",
});

console.log(process.env.persistence);
export default {
  privateKeyJwt: process.env.SECRET_JWT || "",
  PORT: process.env.PORT || 8060,
  MONGO_URL: process.env.MONGO_URL || "",
  // connectDB: async () => {
  //   try {
  //     await mongoose.connect(process.env.LINK_MONGO);
  //     console.log("base de datos conectada.. en el puerto", process.env.PORT);
  //   } catch (error) {
  //     console.log("error de connection");
  //   }
  // },
  connectDB: () => MongoSingleton.getInstance(),
  persistence: process.env.PERSISTENCE,
};
