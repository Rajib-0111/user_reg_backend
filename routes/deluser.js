import { DEL_URL } from "../constant.js";
import delusercontroller from "../controllers/deluser.js";
import { validateregdata } from "../middlewares/regvalidator.js";
import { Router } from "express";

const del_router = Router()
del_router.post(DEL_URL, validateregdata, delusercontroller)

export default del_router