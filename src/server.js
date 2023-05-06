// import express from "express";
// import product from "./script.js";

// let server = express();

// let PORT = 8080;

// let ready = () => console.log("Server ready on port: " + PORT);

// server.listen(PORT, ready);
// server.use(express.urlencoded({ extended: true }));
// let index_route = "/name";
// let index_function = (req, res) => {
//   // let quantity = product.getProducts().length;
//   // console.log(quantity);
//   // return res.send(`"quantity: +" ${quantity}`);
//   let name = req.query.name ?? "nobary";
//   let last = req.query.last ?? "carmichael";

//   res.send({
//     succes: true,
//     message: `Hola ${name}  como estas chupapijaaaa`,
//   });
// };

// server.get(index_route, index_function);

import express from "express";
import userRouter from "./routes/users.router.js";
import petsRouter from "./routes/pets.router.js";
import __dirname from "./utils.js";
const PORT = 8080;
const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(__dirname + "/public"));
server.listen(PORT, () => {
  console.log("el puerto ta ready");
});

server.use("/api/users", userRouter);
server.use("/api/pets", petsRouter);
