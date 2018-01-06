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

const User = mongoose.model("User", userSchema)

User.updateUser = function(user, callback) {
  hashPassword(user, callback);
}

User.createUser = function(newUser, callback){
	hashPassword(newUser, callback)
}

function hashPassword(user, callback) {
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(user.password, salt, function(err, hash) {
        user.password = hash;
        user.save(callback);
    });
})
}
module.exports = User


