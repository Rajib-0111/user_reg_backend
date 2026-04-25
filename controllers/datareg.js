import { SALT_ROUND } from "../constant.js"
import { USER } from "../models/user.model.js"
import bcrypt from 'bcrypt'

const regdata = async (req, res) => {
  const {user, pwd} = req.body
  const alreadyreg = await USER.findOne({username: user})
  if(alreadyreg){
    return res.status(400).json({message:"user already exists"})
  }
  try{
    const hashedpw = await bcrypt.hash(pwd, SALT_ROUND)
    await USER.create({username:user, password:hashedpw})
    return res.status(200).json({message:"user created"})
  }
  catch(err){
    return res.status(500).json({message:"server error"})
  }
}

export {regdata}