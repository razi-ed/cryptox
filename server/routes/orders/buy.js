const Orders = require('../../models/ordersSchema');
const buying = (req, res)=>{
  const email=req.user.email;
  const units=req.body.units;
  const currency=req.body.type;
  const Order=new Orders({
    type: 'buyer',
    email,
    commodity: {
                offer: {
                  [currency]: units,
                },
                tradeFor: {
                  [req.body.tradeFor]: 0.000071*units,
              },
              },
  });
  Order.save();
  res.send('Transaction is Successful');
};
module.exports = buying;
