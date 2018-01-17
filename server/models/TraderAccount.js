const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const currencies={
  'BTC': {
    type: Number,
    default: 0,
  },
  'LTC': {
    type: Number,
    default: 0,
  },
  'ETH': {
    type: Number,
    default: 0,
  },
  'XRP': {
    type: Number,
    default: 0,
  },
  'DASH': {
    type: Number,
    default: 0,
  },
  'INR': {
    type: Number,
    default: 5000,
  },
  'USD': {
    type: Number,
    default: 0,
  },
  'EUR': {
    type: Number,
    default: 0,
  },
  'JPY': {
    type: Number,
    default: 0,
  },
  'GBP': {
    type: Number,
    default: 0,
  },
};

const TraderAccountSchema= new Schema({
  'email': {
    type: String,
    unique: true,
    required: true,
  },
  currencies,

});
const TraderAccount=mongoose.model('traderAccount', TraderAccountSchema);
module.exports = TraderAccount;
