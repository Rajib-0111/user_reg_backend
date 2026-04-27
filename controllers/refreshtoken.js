import jwt from "jsonwebtoken"
import { USER } from "../models/user.model.js"

const refreshtokencontroller = async (req,res) => {
  try{
    if(!req.cookies){
    return res
    .status(400)
    .json({
      message:"Provide the refresh token"
    })
  }
    const reftoken = req.cookies.Refreshtoken
    const validtoken = await jwt.verify(reftoken, process.env.JWT_REFRESHTOKENKEY)
    const search_key = validtoken._id
    const userres = await USER.findById(search_key)
    if(reftoken.toString() != userres.refreshtoken.toString()){
      return res
      .status(400)
      .json({
        message:"token not matched"
      })  
    }
    const newaccesstoken = userres.generateAccessToken()
    const newrefreshtoken = await userres.generateRefreshToken()
    const options = {
        httpOnly: true,
        secure: true
      }
    return res
    .status(200)
    .cookie("Accesstoken", newaccesstoken, options)
    .cookie("Refreshtoken", newrefreshtoken, options)
    .json({
      message:"new token received"
    })
  }
  catch(err){
    return res
    .status(500)
    .json({
      message:"Verification Error"
    })
  }
}

export {refreshtokencontroller}