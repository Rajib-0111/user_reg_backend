import { CHANGEPASS_URL } from '../constant.js';
import { updatepasscontroller } from '../controllers/updatepass.js';
import { updatevalidator } from '../middlewares/updatevalidator.js';
import { Router } from 'express';

const changepass_router = Router();
changepass_router.post(CHANGEPASS_URL, updatevalidator, updatepasscontroller);

export { changepass_router };
