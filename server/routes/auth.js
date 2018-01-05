const express = require('express');
const expressValidator = require('express-validator');
const passport = require('passport')

const router = express.Router();
let login, register ,validate,resetPassword;
login= require('./auth/login')
validate= require('./auth/validate')
resetPassword= require('./auth/resetPassword')
register= require('./auth/registerUser')

require('../config/passport')(passport)

router.use(expressValidator())
router.post('/login',login)
router.post('/register',register)
router.get('/validate',validate)
router.put('/resetPassword',resetPassword)



module.exports=router