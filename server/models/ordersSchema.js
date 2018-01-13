const mongoose=require('mongoose');

const orders=new mongoose.Schema({
  seller: {
    type: String,
    required: true,
  },
  commodity: {
    offer: {},
    expecting: {
      type: String,
    },
  },
});
let Orders=mongoose.model('orders', orders);
module.exports=Orders;
