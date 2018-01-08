const router = require('express').Router();
const passport = require('passport');
require('../googleAuth/googleAuth');


router.use(passport.authenticate('google', {
  scope: ['profile', 'email'],
}));


module.exports = router;