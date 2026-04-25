import mongoose from "mongoose";

const user_schema = new mongoose.Schema(
  {
    username:{
      type: String,
      required: true,
      unique: true
    },
    password:{
      type: String,
      required: true,
    },
  },
  {timestamps: true}
)
const USER = mongoose.model('USER', user_schema)
export {USER}