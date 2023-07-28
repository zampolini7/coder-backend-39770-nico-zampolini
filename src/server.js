import server from "./app.js";
import config from "./config/index.js";

const PORT = config.PORT;

let ready = () => {
  config.connectDB();
};

server.listen(PORT, ready);
