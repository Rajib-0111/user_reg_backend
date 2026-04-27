import { Router } from 'express';
import { REG_URL } from '../constant.js';
import { regdata } from '../controllers/datareg.js';
import { validateregdata } from '../middlewares/regvalidator.js';

const reg_router = Router();
reg_router.post(REG_URL, validateregdata, regdata);

export { reg_router };
