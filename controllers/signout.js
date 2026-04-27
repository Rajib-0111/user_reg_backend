import { USER } from "../models/user.model.js"

const signout_controller = async(req, res) => {
  const user = await USER.findByIdAndUpdate(
    req.user,
    {
      refreshtoken:""
    },
    {returnDocument:'after'}
  )
  if(!user){
    return res.
    status(500)
    .json({
      message:"server error"
    })
  }
  const options = {
    httpOnly:true,
    secure:true
  }
  return res.
  status(200)
  .cookie("Accesstoken", "", options)
  .cookie("Refreshtoken", "", options)
  .json({
    message:"logout successful"
  })
}

export {signout_controller}