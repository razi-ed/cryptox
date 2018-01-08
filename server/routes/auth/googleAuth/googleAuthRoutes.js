const router = require('express').Router();
const passport = require('passport')
  //auth login
  // router.get('/login', (req, res) => {
  //   res.render('login', { user: req.user });
  // });

router.get('/', passport.authenticate('google', {
  scope: ['profile', 'email'], //what an all to retrieve from users google account
}));

// callback route for google to redirect to
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  // res.send(req.user);
  //res.redirect('/dashboard')
  console.log("crazy as fuck");
  
});



// router.get('/logout', (req, res) => {
//   //handle logout with passport
//   req.logout();
//   res.redirect('/');
// });


module.exports = router;