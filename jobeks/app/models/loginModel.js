var con = require('./dbConnection.js');
var queryHelper = require('./queryHelper.js');
var queryBuilder = require('./queryBuilder.js');


var loginModel = (function (con) {


    function checkUserValid(callback,user, pass) {

      queryBuilder.getUserValid(callback,user, pass)
     
    }


    return {
        checkUserValid
    }
})(con);


module.exports = loginModel;