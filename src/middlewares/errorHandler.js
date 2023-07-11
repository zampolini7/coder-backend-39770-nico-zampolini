const errorHanlder = (error, req, res, next) => {
  console.error(error);
  return res.status(500).json({
    succes: false,
    message: error.message,
  });
};

export default errorHanlder;
