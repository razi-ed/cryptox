const Users=require('../../models/Users');

const validate =(req, res)=>{
  const email= req.query.email;
  Users
  .find({email})
  .then((Users)=>{
    const isRegistered=Users.length>0;
    res.json({isRegistered, email});
  })
  .catch(()=>res.status(500).json({error: 'internal system error'}));
};
module.exports=validate;
