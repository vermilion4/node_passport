const express = require('express');

const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');

//home route
router.get('/',function(req,res){
    res.render('welcome');
})

//dashboard route
router.get('/dashboard',ensureAuthenticated,function(req,res){
    res.render('dashboard',{
        name:req.user.name
    });
})

module.exports = router;