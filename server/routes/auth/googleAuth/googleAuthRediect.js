const Router = require('express').Router();
const passport = require('passport');
Router.use(passport.authenticate('google'), (req, res) => {
  console.log(req.query);
  res.redirect('/dashboard');
})

module.exports = Router;