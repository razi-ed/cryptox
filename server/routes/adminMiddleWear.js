const express=require('express');
let router=new express.Router();
const passport= require('passport');
const auth=(req, res, next)=>{
    if (req.user.email==='admin@mountblue.io') {
        next();
        console.log('authorised');
    } else {
        res.json({error: 'unauthorised user'});
        console.log('unauthorised');
    }
};
router.use(passport.authenticate('jwt', {session: false}), auth);

module.exports= router;
