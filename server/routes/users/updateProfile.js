const User = require('../../models/Users');
const validatePassword = require('../../../utils/ValidateUser');
const updateProfile = (req, res) => {
  let email = req.user.email;
  let fields = req.body;

  if (fields.name) {
    User.findOneAndUpdate({email},
      {$set: {name: fields.name}}
    )
      .then((result) =>{
      res.json({success: true, message: 'name updated succesfully'});
      })
      .catch(()=>res.status(500).json({error: 'internal system error'}));
    }

  if (fields.oldPassword && fields.newPassword) {
    User.findOne({email})
    .then((user) => {
      if ((fields.oldPassword) && (fields.newPassword)) {
            user.comparePassword(fields.oldPassword, function(err, isMatch) {
              if (isMatch && !err) {
                if (validatePassword(fields.newPassword)!=='valid password') {
                  res.send('password' +validatePassword(fields.newPassword));
                } else {
                  user.password = fields.newPassword;
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
            } else {
                res.send({success: false, message: 'Invalid Old Password'});
              }
            });
          }
    });
  }
 };

module.exports = updateProfile;


