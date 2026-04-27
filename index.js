import { app } from './app.js';
import { db_connect } from './db/index.js';
import dotenv from 'dotenv';
import { reg_router } from './routes/reg.js';
import { changepass_router } from './routes/changepass.js';
import del_router from './routes/deluser.js';
import sigin_router from './routes/signin.js';
import signout_router from './routes/signout.js';
import { refreshToken_router } from './routes/tokenrefresh.js';

dotenv.config();
db_connect();

app.use(reg_router);
app.use(del_router);
app.use(changepass_router);
app.use(sigin_router);
app.use(signout_router);
app.use(refreshToken_router);

app.listen(process.env.PORT, () => {
  console.log(`Listening On Port : ${process.env.PORT}`);
});
