const User = require('../../models/users')

const resetPassword =(req,res)=>{
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({email})
  .then((user) => {
    user.password = password;
    User.createUser(user, function(err, user){
			if(err) throw err;
      console.log(user);
      res.json({success:true, message: "Successfully updated password for "+user.email})
		});
  })
}
module.exports=resetPassword