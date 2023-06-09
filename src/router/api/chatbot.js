import { Router } from "express";

const router = Router()

router.get('/chatbot', (req, res)=> {
    res.render('chatbot')
})
export default router