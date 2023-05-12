import { Router } from "express";

const router = Router();

function views_function(req, res) {
  console.log("aca");
  return res.json({ endpoint: "paaaaapi" });
}

router.get("/views", views_function);

export default router;
