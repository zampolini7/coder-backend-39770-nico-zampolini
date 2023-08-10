export default (role = "user-premium") => {
  return async (req, res, next) => {
    console.log(req.user.role, "role");
    if (!req.user) {
      return res.status(401).send({
        success: false,
        message: "error de autorización!",
      });
    }
    if (req.user.role === role) {
      return next();
    }
    return res.status(403).json({
      success: false,
      message: "Sin permisos validos!",
    });
  };
};
