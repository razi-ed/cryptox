const express = require('express');
const router = new express.Router();
const passport = require('passport');
const orders = require('../../models/ordersSchema');

module.exports= router.post('/statement',
            passport.authenticate('jwt', {session: false}),
            (req, res)=>{
              const email = req.user.email;
            orders.find({email}).then((result)=>res.send(result));
            });
