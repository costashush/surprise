


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/NewJobeks";
var con = (function () {
    return new Promise((resolve, reject) => {

        return MongoClient.connect(url, function (err, db) {
            if(err){
                reject(err)
            }else{
                resolve(db)
            }
        });
    })

})()

module.exports = con;   
