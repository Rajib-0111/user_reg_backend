import { Router } from 'express';
import { SIGNIN_URL } from '../constant.js';
import { validateregdata } from '../middlewares/regvalidator.js';
import { signin_controller } from '../controllers/signin.js';

const sigin_router = Router();
sigin_router.post(SIGNIN_URL, validateregdata, signin_controller);

export default sigin_router;
