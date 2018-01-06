const users=require('../../models/Users') 

const validate =(req,res)=>{
  const email= req.query.email
  users
  .find({email})
  .then(user=>{
   
    const isRegisered=user.length>0
    res.json({isRegisered,email})
    
  })
  .catch(()=>res.status(500).json({error:"internal system error"}))
}
module.exports=validate