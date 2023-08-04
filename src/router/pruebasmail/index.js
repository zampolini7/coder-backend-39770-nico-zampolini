import { Router } from "express";
import { sendMail } from "../../utils/sendEmail.js";
import { sendMsg } from "../../utils/sendMsg.js";

const router = Router();

function operacionCompleja() {
  let result = 0;
  for (let i = 0; i < 9e9; i++) {
    result += i;
  }
  return result;
}

router.get("/mail", async (req, res) => {
  //   await sendMail();
  sendMsg();
  res.send("email enviado");
});

export default router;
