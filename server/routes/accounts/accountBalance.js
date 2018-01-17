const express = require('express');
const passport = require('passport');
const traderAccount = require('../../models/TraderAccount');
const router = new express.Router();

module.exports=router.get(
  '/balance',
  passport.authenticate('jwt', {session: false}),
  (req, res)=>{
    const email = req.user.email;
    traderAccount.find({email}).then((result)=>res.send(result)
    );
  }
);
