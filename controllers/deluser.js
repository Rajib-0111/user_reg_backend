import { USER } from "../models/user.model.js"
import bcrypt from 'bcrypt'

const delusercontroller = async (req, res) =>{
  const {user, pwd} = req.body
  try {
    const isuserexist = await USER.findOne({username:user})
    if(!isuserexist){
      return res.status(400).json({message:"user does not exist"})  
    }
    const ispasssame = await bcrypt.compare(pwd, isuserexist.password)
    if(ispasssame){
      await USER.deleteOne({username: user})
      return res.status(200).json({message:`user deleted : ${isuserexist.username}`})
    }
    else{
      return res.status(400).json({message:"wrong password"})
    }
  } catch (error) {
    return res.status(500).json({message:"server error"})
  }
}

export default delusercontroller