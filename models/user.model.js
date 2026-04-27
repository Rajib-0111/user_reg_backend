import mongoose from "mongoose";
import jwttoken from "jsonwebtoken"
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
    refreshtoken:{
      type:String
    }
  },
  {timestamps: true}
)
user_schema.methods.generateAccessToken = function (){
  const accesstoken = jwttoken.sign({
      _id:this._id,
      username:this.username
    },
    process.env.JWT_ACCESSTOKENKEY,
    {
      expiresIn:'1h'
    }
  )
  return accesstoken;
}
user_schema.methods.generateRefreshToken = async function (){
  const refreshtoken = jwttoken.sign({
      _id:this._id,
      username:this.username,
      dummy:"mydummy"
    },
    process.env.JWT_REFRESHTOKENKEY,
    {
      expiresIn:'5d'
    }
  )
  this.refreshtoken = refreshtoken
  await this.save();
  return refreshtoken;
}
const USER = mongoose.model('USER', user_schema)
export {USER}