import jwt from 'jsonwebtoken'

const verifyJWT = async(req, res, next) => {
  try{
    const accesstoken = req.cookies.Accesstoken
    if(!accesstoken){
      res.status(400).json({
        message:"no access token"
      })
    }
    next()
  }
  catch(err){
    return res.status(400).json({
      message:"Token verify error"
    })
  }
}

export {verifyJWT}