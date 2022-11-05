const express = require('express');
const router = express.Router();

const home_controller = require('../controller/home'); // fichier des fonctions controller

router.get('/',function (req,res){
    res.redirect('/home')
})

router.get('/route1',function (req,res){
    res.send('<h1>premiere route EXPRESS</h1>')
})

router.get('/home',home_controller.homeControler);

module.exports = router;

