const User = require('../../models/Users');

const removeAccount = (req, res) =>{
let email = req.user.email;
User.findOneAndRemove({email})
.then(()=>{
    res.json({
        message: 'Successfully removed account',
    });
})
.catch(() => res.status(500).json({
    error: 'internal system error'}));
};
module.exports = removeAccount;
