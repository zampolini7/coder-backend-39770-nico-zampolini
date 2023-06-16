export default function pass_is_8(req, res, next) {
  const { password } = req.body;
  if (password.length >= 8) {
    next();
  } else {
    return res.status(400).json({
      success: false,
      message: `password must be at least 8 characters`,
    });
  }
}
