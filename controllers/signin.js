import { USER } from "../models/user.model.js"
import bcrypt from 'bcrypt'
const signin_controller = async (req, res) => {
  const { user, pwd } = req.body
  try {
    const isuser = await USER.findOne(
      {
        username: user,
      }
    )
    console.log(user, pwd)
    if (!isuser) {
      res.status(400).json({
        message: "invalid username"
      })
    }
    const ispasscorrect = await bcrypt.compare(pwd, isuser.password)
    if(!ispasscorrect){
      res.status(400).json({
        message: "invalid password"
      })
    }
    else {
      const accesstoken = isuser.generateAccessToken()
      const refreshtoken = await isuser.generateRefreshToken()
      const options = {
        httpOnly: true,
        secure: true
      }
      res
      .status(200)
      .cookie('Accesstoken', accesstoken, options)
      .cookie('Refreshtoken', refreshtoken, options)
      .json({
        message: "login successfull"
      })
    }
  }
  catch(err){
    res.status(500).json({
        message: "server error"
      })
  }
}

export { signin_controller }