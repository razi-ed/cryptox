const express= require('express');
const Router = new express.Router();
const passport = require('passport');
Router.use(passport.authenticate('google'), (req, res) => {
  res.redirect('/dashboard');
});

module.exports = Router;
