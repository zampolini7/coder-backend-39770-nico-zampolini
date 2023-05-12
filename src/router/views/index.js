import { Router } from "express";

const views_router = Router();

views_router.get("/", async (req, res, next) => {
  try {
    return res.render("index", {
      title: "Tienda de productos P&Z",
    });
  } catch (error) {
    next(error);
  }
});
// function views_function(req, res) {
//   console.log("aca");
//   return res.json({ endpoint: "paaaaapi" });
// }

// views_router.get("/views", views_function);

export default views_router;
