const Users=require('../../models/Users');

const validate =(req, res)=>{
  const email= req.query.email;
  Users
  .find({email})
  .then((Users)=>{
    const isRegisered=Users.length>0;
    res.json({isRegisered, email});
  })
  .catch(()=>res.status(500).json({error: 'internal system error'}));
};
module.exports=validate;
