const jwt = require('jsonwebtoken');
const User = require('../../models/Users');

const login = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  req.checkBody('email', 'email is required').notEmpty();
  req.checkBody('password', 'password is required').notEmpty();
  const errors = req.validationErrors();

  if (errors) {
    res.json(errors[0].msg);
  } else {
    User.findOne({email}, function(err, user) {
      if (err) {
        throw err;
      }
      if (!user) {
        res.send({success: false, message: 'Invalid email or password'});
      } else {
        user.comparePassword(password, function(err, isMatch) {
          if (isMatch && !err) {
            let payload = {id: user.email};
            let token = jwt.sign(payload, process.env.JWT_KEY);
            res.json({success: true, token: 'JWT ' + token});
          } else {
            res.send({success: false, message: 'Invalid email or password'});
          }
        });
      }
    });
  }
};
module.exports = login;
