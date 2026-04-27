import { Router } from "express";
import { SIGNOUT_URL } from "../constant.js";
import { verifyJWT } from "../middlewares/verifyjwt.js";


const signout_router = Router()

signout_router.post(SIGNOUT_URL, verifyJWT)


export default signout_router