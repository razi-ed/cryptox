const orders = require('../../models/ordersSchema');
const selling = (req, res)=>{
  const email = req.user.email;
  console.log(email, 'Hi');
  res.send(email);
};
module.exports = selling;
