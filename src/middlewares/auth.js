export default function auth(req, res, next) {
  if (req.user.email === "admin2@admin.com") {
    return next();
  }
  return res.status(401).json({
    message: "error de autorización!",
  });
}
