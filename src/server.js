import server from "./app.js";
import { Server } from "socket.io";
import { connect } from "mongoose";

const PORT = process.env.PORT || 8080;

let ready = () => {
  connect(process.env.LINK_MONGO)
    .then(() => console.log("conected to db on server" + PORT))
    .catch((err) => console.log(err));
  console.log("server ready on port: " + PORT);
};

let http_server = server.listen(PORT, ready);

let socket_server = new Server(http_server);
const chats = [];
socket_server.on("connection", (socket) => {
  console.log(socket.client.id);
  socket.on("auth", () => {
    socket_server.emit("all_messages", chats);
  });
  socket.on("new_message", (data) => {
    chats.push(data);
    console.log(chats);
    socket_server.emit("all_messages", chats);
  });
});
