var con = require('./dbConnection.js');
var queryHelper = require('./queryHelper.js');
var queryBuilder = require('./queryBuilder.js');


var locationModel = (function (con) {


    function getLocations(callback) {

      queryBuilder.getAllLocations(callback);
     
    }

    return {
        getLocations
    }
})(con);


module.exports = locationModel;