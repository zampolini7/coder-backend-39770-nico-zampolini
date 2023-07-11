import bcryptjs from "bcrypt";

export default (req, res, next) => {
  console.log(req.session, "reqeqe");
  console.log(req.body, "reqeqe");

  try {
    let db_pass = req.session.password;
    let form_pass = req.body.password;
    let compare = bcryptjs.compareSync(form_pass, db_pass);
    if (compare) {
      return next();
    } else {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }
  } catch (error) {
    next(error);
  }
};
