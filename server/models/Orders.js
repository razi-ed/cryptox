const mongoose=require('mongoose');

const orders=new mongoose.Schema({
  type: {
    type: String,
  },
  email: {
    type: String,
  },
  Date: {
    type: String,
  },
  Time: {
    type: String,
  },
  commodity: {
    offer: {},
    tradeFor: {},
  },
});
let Orders=mongoose.model('orders', orders);
module.exports=Orders;