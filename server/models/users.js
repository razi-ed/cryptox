const mongoose = require('mongoose');
const Schema = mongoose.Schema
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
  password:{
    type:String,
    required:true
  },
  SecretQuestion
})
module.exports = mongoose.model("user", userSchema)