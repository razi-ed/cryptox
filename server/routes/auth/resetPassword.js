const User = require('../../models/Users');
const validatePassword = require('../../../utils/ValidateUser');

const resetPassword =(req, res)=>{
  const email = req.body.email;
  const password = req.body.password;
  req.checkBody('email', 'email is required').notEmpty().isEmail();
  req.checkBody('password', 'password is required').notEmpty();
  const errors= req.validationErrors();

  if (errors) {
    res.json(errors[0].msg);
  } else if (validatePassword(password)!=='valid password') {
    res.send('password '+validatePassword(password));
  } else {
    User.findOne({email})
    .then((user) => {
      if (!user) {
        res.json({success: false, message: 'email is not registered'});
      } else {
        user.password = password;
        User.updatePassword(user, function(err, user) {
          if (err) {
            throw err;
          }
          res.json({
            success: true,
            message: 'Successfully updated password for '+user.email,
          });
        });
      }
    });
  }
};

module.exports= resetPassword;
