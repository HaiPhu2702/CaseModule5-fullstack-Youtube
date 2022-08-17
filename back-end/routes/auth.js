import express from "express";
import { signup,signin ,googleAuth} from "../controllers/auth.js"


const router = express.Router();

//sign up 
router.post('/signup', signup)

//sign in
router.post('/signin',signin )

//google auth
router.post('/google',googleAuth )





export default router