import { Router } from "express";
import { generateUsers } from "../../../utils/mocks/index.js";
import compression from "express-compression";

const pruebas_router = Router();
pruebas_router.get(
  "/stringlargo",
  compression({
    brotli: {
      enabled: true,
      zlib: {},
    },
  }),

  (req, res) => {
    let stringlargo = "hola chicos este es un texto laaaarrgp";

    for (let i = 0; i < 5e2; i++) {
      stringlargo += "hola chicos este es un texto laaaarrgp";
    }

    res.send({
      status: "success",
      payload: stringlargo,
    });
  }
);

pruebas_router.get("/mockuser", (req, res) => {
  let users = [];

  for (let i = 0; i < 100; i++) {
    users.push(generateUsers());
  }
  res.send({
    status: "success",
    payload: users,
  });
});

export default pruebas_router;
