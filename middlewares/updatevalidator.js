import { USER } from "../models/user.model.js"

const updatevalidator = async (req, res, next) => {
  if(req.body === undefined){
    return res.status(400).json({message:"no input"})
  }
  const {user, oldp, newp} = req.body
  if(!user || !oldp || !newp){
    return res.status(400).json({message :"user, oldp, newp required"})
  }
  if(oldp === newp){
    return res.status(400).json({message:"oldp and newp cannot be same"})
  }
  if(oldp.length < 6 || newp.length < 6){
    return res.status(400).json({message:"minimum password length > 6"})
  }
  next()
}

export {updatevalidator}