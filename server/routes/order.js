const express = require('express');
const router = new express.Router();
const passport = require('passport');

const sell = require('./orders/sell');
const buy = require('./orders/buy');

router.post('/sell', passport.authenticate('jwt', {session: false}), sell);
router.post('/buy', passport.authenticate('jwt', {session: false}), buy);

module.exports = router;
