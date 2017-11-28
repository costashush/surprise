var con = require('./dbConnection.js');
var queryHelper = require('./queryHelper.js');
var queryBuilder = require('./queryBuilder.js');


var userModel = (function (con) {


    function getUserDetails(callback,userId) {
        queryBuilder.getUserDetailsQuery(callback,userId);


    }


    function updateDetails(callback,userData) {
     queryBuilder.getUpdataUeserDetailsQuery(callback,userData);
    }


    function addUser(callback,userData) {

         queryBuilder.addUserQuery(callback ,userData);

      
    }

    return {
        getUserDetails,
        updateDetails,
        addUser
    }
})(con);


module.exports = userModel;