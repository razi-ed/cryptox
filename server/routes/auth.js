const express = require('express');
const expressValidator = require('express-validator');

const router = new express.Router();
const login= require('./auth/login');
const validate= require('./auth/validate');
const resetPassword= require('./auth/resetPassword');
const register= require('./auth/registerUser');


router.use(expressValidator());
router.post('/login', login);
router.post('/register', register);
router.get('/validate', validate);
router.put('/resetPassword', resetPassword);


module.exports= router;
