const Orders = require('../../models/Orders');
const traderAccounts= require('../../models/TraderAccount');
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
  // update records
  traderAccounts.find({email}).then((result)=>{
    // check if user has Sufficient Balance or not
    if (result[0].currencies[currency]>=units) {
        const Order=new Orders({
          type: 'seller',
          email,
          Date: new Date().toDateString(),
          Time: new Date().toLocaleTimeString(),
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
      // update records of Trader
      traderAccounts
        .update({email}, {$inc: updateTrader})
        .then((result) => console.log(result));
        //  update records of Exchange
        traderAccounts.update(
          {email: 'admin@mountblue.io'},
          {$inc: updateAdmin}
        ).then((result)=>console.log(result));
        res.status(200).send({
                    result: 'Transaction Successful',
                });
      } else {
        res.status(400).send({
                    result: 'Transcation Failed',
                    type: 'Insufficient Balance',
                });
      }
  });
  };
    module.exports = selling;
