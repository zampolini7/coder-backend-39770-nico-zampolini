const not_found_handler = (req, res, next) => {
  console.log(`not found ${req.method} ${req.url}`);
  return res.json({
    succes: false,
    message: `${req.method} ${req.url} not found`,
  });
};

export default not_found_handler;
