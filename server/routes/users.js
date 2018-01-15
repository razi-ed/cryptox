const express = require('express');
const passport= require('passport');
const router = new express.Router();

const userProfile = require('./users/userProfile');
const updateProfile = require('./users/updateProfile');
const removeAccount = require('./users/removeAccount');

router.get('/',
passport.authenticate('jwt', {session: false}), userProfile);
router.put('/',
passport.authenticate('jwt', {session: false}), updateProfile);
router.delete('/',
passport.authenticate('jwt', {session: false}), removeAccount);

module.exports = router;
