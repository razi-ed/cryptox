const express = require('express');
const router = new express.Router();

const auth= require('./adminMiddleWear');
const userList = require('./admin/userList');

router.use( auth);
router.get('/userList', userList);

module.exports = router;
