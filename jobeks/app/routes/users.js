  var express = require('express');
var router = express.Router();
var userModel = require('../models/userModel.js');
/* GET users listing. */
router.get('/user', function (req, res, next) {
  var callback = function (result){
    res.json(result)
  }
  var userId = req.query.userId;
  userModel.getUserDetails(callback,userId)
  
});

router.put('/user', function (req, res, next) {
  var userDetails = req.body;
  var callback = function (result){
    res.json(result)
  }
  userModel.updateDetails(callback,userDetails)
});


router.post('/user/register', function (req, res) {
    // const { firstName,email,description,userName,pass,locations }
    let userData = req.body

    var callback = function (result){
      res.json(result)
    }
    userModel.addUser(callback,userData)
        
})









module.exports = router;
