const jwt=require('jsonwebtoken')
const user= require('../../models/users')

let registerUser =(req,res)=>{
  let name=req.body.name
  let email=req.body.email
  let password=req.body.password
  req.checkBody('name','Username is required').notEmpty()
  req.checkBody('email','email is required').notEmpty()
  req.checkBody('password','password is required').notEmpty()
  let errors= req.validationErrors()
  if(errors){
    res.json(errors[0].msg)
  }else{
    var newUser = new user({
      name,email,password
      //Secret question is commented 
		});

		user.createUser(newUser, function(err, user){
			if(err) throw err;
      console.log(user);
      var payload = {email: user.email}
      let token =jwt.sign(payload,process.env.JWT_KEY,{
        expiresIn:4000
      })
      res.json({success:true,token})
		});
  }
  //res.json({name,email,password,errors})
}
module.exports=registerUser