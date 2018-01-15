const express = require('express');
const passport= require('passport');
const router = new express.Router();

const userProfile = require('./users/userProfile');
const updateProfile = require('./users/updateProfile');

router.get('/',
passport.authenticate('jwt', {session: false}), userProfile);
router.put('/',
passport.authenticate('jwt', {session: false}), updateProfile);

module.exports = router;
