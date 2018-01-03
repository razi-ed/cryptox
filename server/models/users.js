const mongoose = require('mongoose');
const Schema = mongoose.Schema

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  SecretQuestion
})
const SecretQuestion=new Schema({
  question:{
    type:String,
    required:true
  },
  answer:{
    type:String,
    required:true
  }
})
module.exports = mongoose.model("user", userSchema)