const User = require('../../models/Users');

const removeAccount = (req, res) =>{
let email = req.user.email;
User.findOneAndRemove({email}, (err, result)=> {
    if (err) {
        res.json({error: 'some error'});
    } else {
        res.json({
            message: 'Account removed Succesfully',
        });
    }
});
};
module.exports = removeAccount;
