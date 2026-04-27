import jwt from 'jsonwebtoken'

const verifyJWT = async(req, res, next) => {
  try{
    const accesstoken = req.cookies.Accesstoken
    if(!accesstoken){
      return res.status(400).json({
        message:"Provide a token"
      })
    }
    const verifiedtoken = await jwt.verify(accesstoken, process.env.JWT_ACCESSTOKENKEY)
    req.user = verifiedtoken._id
    next()
  }
  catch(err){
    return res.status(400).json({
      message:"Unauthorized token"
    })
  }
}

export {verifyJWT}