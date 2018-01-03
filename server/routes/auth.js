const express = require('express');
const router = express.Router();
let login, register ,validate,resetPassword;
login= require('./auth/login')
validate= require('./auth/validate')
resetPassword= require('./auth/resetPassword')
register= require('./auth/registerUser')

router.post('/login',login)
router.post('/register',register)
router.get('/validate',validate)
router.put('/resetPassword',resetPassword)
module.exports=router