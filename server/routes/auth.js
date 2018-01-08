const express = require('express');
const expressValidator = require('express-validator');

const router = new express.Router();
const login = require('./auth/login');
const validate = require('./auth/validate');
const resetPassword = require('./auth/resetPassword');
const register = require('./auth/registerUser');
const googleAuth = require('./auth/googleAuth/googleAuth')

router.use(expressValidator());
router.post('/login', login);
router.post('/register', register);
router.get('/validate', validate);
router.put('/resetPassword', resetPassword);
router.get('/google', require('./auth/googleAuth/googleAuthRoutes'))

module.exports = router;