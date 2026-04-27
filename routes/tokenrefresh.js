import { Router } from 'express';
import { TOKENREFRESH_URL } from '../constant.js';
import { refreshtokencontroller } from '../controllers/refreshtoken.js';

const refreshToken_router = Router();

refreshToken_router.post(TOKENREFRESH_URL, refreshtokencontroller);

export { refreshToken_router };
