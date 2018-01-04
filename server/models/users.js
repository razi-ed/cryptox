const mongoose = require('mongoose');
const Schema = mongoose.Schema
const bcrypt= require('bcrypt')
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
  // SecretQuestion
})
let user=module.exports = mongoose.model("user", userSchema)

module.exports.createUser = function(newUser, callback){
	bcrypt.genSalt(10, function(err, salt) {
	    bcrypt.hash(newUser.password, salt, function(err, hash) {
	        newUser.password = hash;
	        newUser.save(callback);
	    });
	});
}