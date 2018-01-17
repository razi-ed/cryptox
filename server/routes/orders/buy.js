const Orders = require('../../models/ordersSchema');
const traderAccount = require('../../models/traderAccountsSchema');


const buying = (req, res)=>{
  const email=req.user.email;
  const units=req.body.units;
  const currency=req.body.type;
  const updateTrader = {};
  updateTrader[
    'currencies.'+req.body.tradeFor]=+(1/req.body.currentPrice)*units;
  updateTrader['currencies.'+currency]= -units;
  console.log(updateTrader);
  const updateAdmin = {};
  updateAdmin['currencies.'+req.body.tradeFor]=-(1/req.body.currentPrice)*units;
  updateAdmin['currencies.'+currency] = +units;
  // update records
  traderAccount.find({email}).then((result)=>{
    // check if user has Balance or not
    if (result[0].currencies[currency]>units) {
      const Order=new Orders({
        type: 'buyer',
        email,
        commodity: {
          offer: {
            [currency]: units,
          },
          tradeFor: {
            [req.body.tradeFor]: (1/req.body.currentPrice)*units,
          },
        },
      });
      Order.save();
      // update Trader account
      traderAccount.update(
        {email},
        {$inc: updateTrader}).then((result)=>console.log(result));
      // update Exchange account
      traderAccount.update(
        {email: 'admin@mountblue.io'},
        {$inc: updateAdmin}).then((result)=>console.log(result));
      res.send({
                  result: 'Transaction is Successful',
              });
    } else {
      res.send({
                  result: 'Transaction Failed',
                  type: 'Insufficient Balance',
              });
    }
  });
  };
  module.exports = buying;
