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
    type: String,//add a validator
    unique: true,
    required: true
  },
  password:{
    type:String,
    required:true
  },
  // SecretQuestion
})

userSchema.methods.comparePassword = function(pw, cb) {
  bcrypt.compare(pw, this.password, function(err, isMatch) {
    console.log(pw, this.password)
    if (err) {
      return err;
    }
    cb(null, isMatch);
  });
}

let User = mongoose.model("User", userSchema)

User.createUser = function(newUser, callback){
	bcrypt.genSalt(10, function(err, salt) {
	    bcrypt.hash(newUser.password, salt, function(err, hash) {
	        newUser.password = hash;
	        newUser.save(callback);
	    });
	});
}
module.exports = User


