const User = require('../../models/Users');
const userList= (req, res, next)=> {
  User.find({}, {password: 0, __v: 0} )
  .then((data)=>{
    res.send(
      data
    );
  })
  .catch(() => res.status(500).json({
    error: 'internal system error'}));
};

module.exports = userList;
