

const validateregdata = (req, res, next) => {
  if (req.body === undefined){
    return res.status(400).json({message :"No Input"})
  }
  const {user, pwd} = req.body
  if (!user || !pwd){
    return res.status(400).json({message :"user and pwd required"})
  }
  if(pwd.length <= 6){
    return res.status(400).json({message :"Password must be > 6 chars"})
  }
  next()
}

export {validateregdata}