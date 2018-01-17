const Orders = require('../../models/ordersSchema');
const traderAccounts= require('../../models/traderAccountsSchema');
const selling = (req, res)=>{
  const email=req.user.email;
  const units=req.body.units;
  const currency=req.body.type;
  const updateTrader = {};
  updateTrader['currencies.'+currency] = -units;
  updateTrader['currencies.'+req.body.tradeFor]=+1/req.body.currentPrice*units;
  const updateAdmin = {};
  updateAdmin['currencies.'+currency] = +units;
  updateAdmin['currencies.'+req.body.tradeFor]=-(1/req.body.currentPrice)*units;
  const Order=new Orders({
    type: 'seller',
    email,
    commodity: {
      offer: {
        [currency]: units,
      },
      tradeFor: {
        [req.body.tradeFor]: (1/req.body.cuurentPrice)*units,
      },
    },
  });
  Order.save();
  traderAccounts.update(
    {email},
    {$inc: updateTrader}
  ).then((result)=>console.log(result));
  traderAccounts.update(
    {email: 'admin@mountblue.io'},
    {$inc: updateAdmin}
  ).then((result)=>console.log(result));
  res.send('Transaction is Successful');
  };
    module.exports = selling;
