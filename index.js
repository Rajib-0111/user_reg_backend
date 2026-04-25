import { app } from "./app.js";
import { db_connect } from "./db/index.js";
import dotenv from "dotenv";
import { reg_router } from "./routes/reg.js";
import { changepass_router } from "./routes/changepass.js";
import del_router from "./routes/deluser.js";

dotenv.config()
db_connect()

app.use(reg_router)
app.use(del_router)
app.use(changepass_router)

app.listen(process.env.PORT, () => {
  console.log(`Listening On Port : ${process.env.PORT}`)
})