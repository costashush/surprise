var con = require('./dbConnection.js');
var ObjectId = require('mongodb').ObjectID; 

var queryBuilder = (function () {

    function initAgent(db) {

        db.collection('users').find({}).toArray(function (err, res) {
            if (err) {
                return err

            } else {

                res.forEach(function (user) {
                    console.log(user['_id']);

                    findJobForUser(user['_id'], db)
                }, this);
            }
        })

    }

    function findJobForUser(userId, db) {

        db.collection('users').findOne({ _id: userId }, function (err, result) {
            if (err) {
                return err;
            }
            else {
                var userSkills = result.skills;
                findJob(userSkills, userId, db)
            }
        })
    }


    function findJob(userSkills, userId, db) {
        db.collection('jobs').find({ 'skills': { $in: userSkills } }, { _id: 1 }).toArray(
            function (err, res) {
                if (err) {
                    return err
                } else {
                    // console.log(res)//ids
                    var idArr = [];
                    for (let item of res) {
                        idArr.push(item['_id'])

                    }
                    // console.log(idArr)
                    db.collection('users').update({ '_id': userId }, { $push: { 'agent': { $each: idArr } } });
                    // db.collection('users').find({'_id':userId})                
                }
            }
        )
    }





    function getSkills() {
        return con.then((db) => {
            return new Promise((resolve, reject) => {
                db.collection('skills').find({}).toArray(function (err, result) {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(result)
                    }
                })
            })
        })

    }


    function getJobsQuery() {
        return con.then((db) => {
            return new Promise((resolve, reject) => {
                db.collection('jobs').find({}).toArray( function (err, result) {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(result)
                    }
                })
            })
        })
    }

    function getUserValid(callback, user, pass) {
        con.then((db) => {
            db.collection('users').findOne({ 'email': user, 'pass': pass }, function (err, result) {
                if (err) {
                    callback(err)
                } else {
                    callback(result)
                }
            })
        })
    }

    function getUserDetailsQuery(callback,userId) {
        // userId = 'ObjectId("'+userId+'")'
        con.then((db) => {
            db.collection('users').find({ '_id': ObjectId(userId) }).toArray( function (err, result) {
                if (err) {
                    callback(err)
                } else {
                    callback(result)
                }
            })
        })
    }

    //update the user by user Id
    function getUpdataUeserDetailsQuery(callback,userData) {
        con.then((db) => {
            db.collection('users').update({ '_id': ObjectId( userData['_id']) }, { 'firstName': userData.firstName, 'email': userData.email, 'description': userData.description, 'lcationName': userData.lcationName, 'lon': userData.lon, 'lat': userData.lat, 'userName': userData.userName, 'pass': userData.pass, 'skills': userData.skills }, function (err, result) {
                if (err) {
                    callback(err)
                } else {
                    
                    
                    callback(result)
                }
            })
        })
    }


    function getUserJobsQuery(userId) {
        return con.then((db) => {
            return new Promise((resolve, reject) => {
                db.collection('jobs').find({ 'pub_id': ObjectId(userId)}).toArray(function (err, result) {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(result)
                    }
                })
            })

        })
    }



    function getUserApplyedJobsQuery(userId) {
        return con.then((db) => {
            return new Promise((resolve, reject) => {
                db.collection('jobs').find({ 'jobApplicants': ObjectId(userId)}).toArray(function (err, result) {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(result)
                    }
                })
            })

        })
    }

    function getFilterJobsQuery(locations,skills) {
        return con.then((db) => {
            return new Promise((resolve, reject) => {
                db.collection('jobs').find({'locationName': { $in : locations },'skills':{$in : skills}}).toArray( function (err, result) {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(result)
                    }
                })
            })
        })
    }






    //publish new job 
    function addPubJobQuery(callback,job) {
        var today = new Date().toISOString().substring(0, 10);
        con.then((db) => {
            db.collection('jobs').insert({ 'jobName': job.title, 'pub_date': today, 'pub_id': ObjectId(job.pub_id), 'description': job.description, 'locationName': job.locationName, 'lon': job.lon, 'lat': job.lat, 'skills': job.skills,'jobApplicants':[],'activeted':true }, function (err, result) {
                if (err) {
                    callback(err)
                } else {
                    callback(result)
                }
            })
        })
    }


    function getJobIdQuery(callback, job) {
        con.then((db) => {
            db.collection('jobs').find({ 'jobName': job.jobName, 'pub_id': job.pub_id }, function (err, result) {
                if (err) {
                    callback(err)
                } else {
                    callback(result)
                }
            })
        })
    }

    function addUserQuery(callback ,userData) {
        con.then((db) => {
            db.collection('users').insert( {'firstName': userData.firstName,
               'email': userData.email,
               'description': userData.description,
               'lcationName': userData.locationName, 
               'lon': userData.lon, 'lat': userData.lat,
               'userName': userData.userName,
               'pass': userData.pass,
               'skills': userData.skills, agent:[]}, 
                function (err, result) {
                if (err) {
                    callback(err)
                } else {
                    callback(result)
                }
            })
        })
    }
     
    
    function getAllLocations(callback) {
        return con.then((db) => {
                db.collection('locations').find({}).toArray(function (err, result) {
                    if (err) {
                        callback(err)
                    } else {
                        callback(result)
                    }
                })
            })
        }
   

    function getAllSkills(callback) {
        con.then((db) => {
            db.collection('skills').find({}).toArray(function (err, result) {
                if (err) {
                    callback(err)
                } else {
                    callback(result)
                }
            })
        })

    }


    function getApplyJobQuery(callback, jobId, userId) {
        con.then((db) => {
            db.collection('jobs').update({ _id: ObjectId(jobId) }, { $push: { jobApplicants: ObjectId(userId) } }, function (err, result) {
                if (err) {
                    callback(err)
                } else {
                    callback(result)
                }
            })
        })
    }


    return {
        getSkills,
        initAgent,
        getJobsQuery,
        getUserValid,
        getUserDetailsQuery,
        getUpdataUeserDetailsQuery,
        getUserJobsQuery,
        addPubJobQuery,
        getJobIdQuery,
        addUserQuery,
        getAllLocations,
        getAllSkills,
        getApplyJobQuery,
        getUserApplyedJobsQuery,
        getFilterJobsQuery
    }


}
)();
module.exports = queryBuilder;
