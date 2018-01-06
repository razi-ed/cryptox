const jwt = require('jsonwebtoken');
const User = require('../../models/users');

const login = (req, res) => {
  /* res.send('login') */
  const email = req.body.email;
  const passwd = req.body.password;
  console.log(email, passwd, process.env.JWT_KEY)
  req.checkBody('email', 'email is required').notEmpty();
  //req.checkBody('passwd', 'Password is required').notEmpty();

  const errors = req.validationErrors();

  if (errors) {
    res.json(errors[0].msg)
  } else {
    User.findOne({email}, function(err, user) {
      console.log(user)
      if(err) {
        throw err;
      } 
      if(!user) {
        res.send({success: false, message: 'Invalid username or password'})
      }else {
        user.comparePassword(req.body.password, function(err, isMatch) {
          if(isMatch && !err) {
            console.log(user)
            var payload = {id: user.email}
            var token = jwt.sign(payload, process.env.JWT_KEY);
            res.json({ success: true, token: 'JWT ' + token });
          } else {
            res.send({success: false, message: 'Invalid username or password'})
          }
        })
      }
    })
  }

}
module.exports = login