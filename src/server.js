import server from "./app.js";
import { connect } from "mongoose";

const PORT = process.env.PORT || 8080;

let ready = () => {
  connect(process.env.LINK_MONGO)
    .then(() => console.log("conected to db on server" + PORT))
    .catch((err) => console.log(err));
  console.log("server ready on port: " + PORT);
};

server.listen(PORT, ready);
