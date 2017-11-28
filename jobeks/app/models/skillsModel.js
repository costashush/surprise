var con = require('./dbConnection.js');
var queryHelper = require('./queryHelper.js');
var queryBuilder = require('./queryBuilder.js');


var skillsModel = (function (con) {


    function getskills(callback) {
                              
                queryBuilder.getAllSkills(callback);
                             
    }       



    return {
        getskills
    }
})(con);


module.exports = skillsModel;