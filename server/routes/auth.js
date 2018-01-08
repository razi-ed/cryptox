const express = require('express');
const expressValidator = require('express-validator');
const passport = require('passport')

const router = new express.Router();
const login = require('./auth/login');
const validate = require('./auth/validate');
const resetPassword = require('./auth/resetPassword');
const register = require('./auth/registerUser');
const googleAuth = require('./auth/googleAuth/googleAuth')

router.use(expressValidator());
router.post('/login', login);
router.post('/register', register);
router.get('/validate', validate);
router.get('/', (req,res)=>res.send('hi'));
router.put('/resetPassword', resetPassword);
router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email'], //what an all to retrieve from users google account
}))
router.get('/google/redirect/', passport.authenticate('google'), (req, res) => {
  console.log(req.query)
  res.redirect('/dashboard')
 

});
module.exports = router;