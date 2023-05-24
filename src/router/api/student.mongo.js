import { Router } from "express";
import Student from "../../models/student.model.js";

const router = Router();

router.post("/", async (req, res, next) => {
  try {
    let response = await Student.create(req.body);
    if (response) {
      return res.json({
        status: 201,
        message: "student created",
        id: response._id,
      });
    }
  } catch (error) {
    next(error);
  }
});
router.get("/", async (req, res, next) => {
  try {
    // const response = await Student.find();
    const response = await Student.find().select("name age -_id");

    if (response) {
      return res.json({
        status: 200,
        response,
      });
    }
  } catch (error) {
    next(error);
  }
});

router.put("/:sid", async (req, res, next) => {
  try {
    const response = await Student.findByIdAndUpdate(req.params.sid, req.body);
    if (response) {
      return res.json({
        status: 200,
        message: "Updated",
      });
    }
  } catch (error) {
    next(error);
  }
});
router.delete("/:sid", async (req, res, next) => {
  try {
    let response = await Student.findByIdAndDelete(req.params.sid);
    if (response) {
      return res.json({
        status: 200,
        message: "deleted user",
      });
    }
  } catch (error) {
    next(error);
  }
});

export default router;
