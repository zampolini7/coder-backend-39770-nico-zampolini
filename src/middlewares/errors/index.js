import Errors from "../../utils/error/enums.js";

export const errorMiddleware = (error, req, res, next) => {
  console.log(error.cause);
  switch (error.code) {
    case Errors.INVALID_TYPE_ERROR:
      return res.send({
        status: "error",
        error: error.name,
      });

      break;
    case Errors.ROUTING_ERROR:
      return res.send({
        status: "error",
        error: error.name,
      });

      break;

    default:
      break;
  }
};
