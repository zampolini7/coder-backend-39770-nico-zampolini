import server from "./app.js";
import { Server } from "socket.io";

const PORT = 8080;

let http_server = server.listen(PORT, () => {
  console.log("Bienvenidos a Himalaya :D");
});

let socket_server = new Server(http_server);
// on para escuchar los msjs que llegan del cliente
socket_server.on(
  "cliente_conected", //identificar de msj
  (socket) => {
    console.log(`El cliente de ${socket.id} `);
    console.log(socket);
  } // callback apenas se conecta un cliente
);
