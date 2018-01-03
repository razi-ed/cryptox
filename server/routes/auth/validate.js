const users=require('../../models/users') 

let validate =(req,res)=>{
  let email= req.query.email
  let question = req.query.question
  users
  .find({email})
  .then(user=>{
    //res.json({email,user,question})
    if(!user.length==0){
      if(question){
        res.json({isRegisered:true,email,question:user[0].SecretQuestion.question})
      }
      res.json({isRegisered:true,email})
    }else{
      res.json({isRegisered:false,email})
    }
  })
  .catch(e=>res.send(e))
}
module.exports=validate