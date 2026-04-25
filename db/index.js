import mongoose from 'mongoose'
import dotenv from 'dotenv'
import {DB_NAME} from '../constant.js'
dotenv.config()

const db_connect = async () => {
  try{
    const conn_res = await mongoose.connect(`${process.env.DB_URL}/${DB_NAME}`)
    console.log(`Db Connected Successfully : ${conn_res.connection.host}`)
  }
  catch(err){
    console.error(`DB Connection Failed : ${err}`)
  }
}

export {db_connect}