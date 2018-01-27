const express = require('express');
const expressValidator = require('express-validator');
const admin = require('./admin');

const router = new express.Router();
const login = require('./auth/login');
const validate = require('./auth/validate');
const resetPassword = require('./auth/resetPassword');
const register = require('./auth/registerUser');
const google = require('./auth/googleAuth/googleAuthRoutes');
const googleAuthRediect = require('./auth/googleAuth/googleAuthRediect');

router.use(expressValidator());
router.post('/login', login);
router.post('/register', register);
router.get('/validate', validate);
router.put('/resetPassword', resetPassword);
router.get('/google', google);
router.get('/google/redirect/', googleAuthRediect);
router.use('/admin', admin);
module.exports = router;
