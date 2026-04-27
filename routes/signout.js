import { Router } from "express";
import { SIGNOUT_URL } from "../constant.js";
import { verifyJWT } from "../middlewares/verifyjwt.js";
import { signout_controller } from "../controllers/signout.js";


const signout_router = Router()

signout_router.post(SIGNOUT_URL, verifyJWT, signout_controller)


export default signout_router