const path = require('path');
var locationsModel = require('../models/locationsModel.js');
var express = require('express');
var router = express.Router();


router.get('/locations', function (req, res) {
    var callback = function (result){
        res.json(result)
      }
    locationsModel.getLocations(callback)
       
})



module.exports = router;
