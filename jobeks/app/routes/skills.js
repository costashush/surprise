const path = require('path');
var skillsModel = require('../models/skillsModel.js');
var express = require('express');
var router = express.Router();


router.get('/skills', function (req, res) {
    var callback = function (result){
        res.json(result)
      }
    skillsModel.getskills(callback)
      
})



module.exports = router;

