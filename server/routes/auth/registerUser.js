const User= require('../../models/Users');
const TraderAccount=require('../../models/TraderAccount');
const validatePassword= require('../../../utils/ValidateUser');

const registerUser =(req, res)=>{
  const name=req.body.name;
  const email=req.body.email;
  const password=req.body.password;
  req.checkBody('name', 'Username is required').notEmpty();
  req.checkBody('email', 'email is required').notEmpty().isEmail();
  req.checkBody('password', 'password is required').notEmpty();
  const errors= req.validationErrors();

  if (errors) {
    res.json(errors[0].msg);
  } else if (validatePassword(password)!==`valid password`) {
    res.json({error: {password: validatePassword(password)}} );
  } else {
    const newUser = new User({
      name, email, password,
    });
    const newTraderAccount=new TraderAccount({
      email,
    });
    newTraderAccount.save();
    User.createUser(newUser, function(err, user) {
      if (err) {
        res.json({success: false, error: `duplicate email`});
      } else {
        res.json({success: true} );
      }
    });
    }
};

module.exports= registerUser;
