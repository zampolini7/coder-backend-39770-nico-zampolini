import dotenv from "dotenv";
import mongoose from "mongoose";
import { commander } from "../commander.js";

const { mode } = commander.opts();

console.log(mode);
dotenv.config({
  path: mode === "development" ? "./env.development" : "./.env.production",
});

export default {
  privateKeyJwt: process.env.PRIVATE_KEY_JWT || "",
  PORT: process.env.PORT || 8060,
  MONGO_URL: process.env.MONGO_URL || "",
  connectDB: async () => {
    try {
      await mongoose.connect(process.env.LINK_MONGO);
      console.log("base de datos conectada.. en el puerto", process.env.PORT);
    } catch (error) {
      console.log("error de connection");
    }
  },
};
