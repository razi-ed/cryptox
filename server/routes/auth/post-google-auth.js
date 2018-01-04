const router = require('express').Router();


const authCheck = (req, res, next) => {
  if (!req.user) {
    // if user is not logged in
    res.redirect('/login');
  } else {
    // if logged in 
    next();
  }
}


router.get('/', authCheck, (req, res) => {
  res.redirect('/dashboard');
});

module.exports = router;