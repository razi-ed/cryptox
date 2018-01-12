const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
// const SecretQuestion = new Schema({
//   question: {
//     type: String,
//     required: true,
//   },
//   answer: {
//     type: String,
//     required: true,
//   },
// });

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
  },
  // SecretQuestion
});

userSchema.methods.comparePassword = function(pw, cb) {
  bcrypt.compare(pw, this.password, function(err, isMatch) {
    if (err) {
      return err;
    }
    cb(null, isMatch);
  });
};

userSchema.statics.createUser = function(newUser, callback) {
  hashPassword(newUser, callback);
};

userSchema.statics.updatePassword = function(user, callback) {
  hashPassword(user, callback);
};

let User = mongoose.model('User', userSchema);

const hashPassword = (user, callback) => {
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(user.password, salt, function(err, hash) {
      user.password = hash;
      user.save(callback);
    });
  });
};
module.exports = User;
