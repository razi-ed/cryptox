const Orders = require('../../models/ordersSchema');
const selling = (req, res)=>{
  const email=req.user.email;
  const units=req.body.units;
  const currency=req.body.type;
  const Order=new Orders({
    type: 'seller',
    email,
    commodity: {
                offer: {
                  [currency]: units,
                },
                tradeFor: {
                  [req.body.tradeFor]: (14000*units),
              },
          },
    });
  Order.save();
  res.send('Transaction is Successful');
};
module.exports = selling;
