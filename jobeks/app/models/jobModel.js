var con = require('./dbConnection.js');
var queryHelper = require('./queryHelper.js');
var queryBuilder = require('./queryBuilder.js');


var jobModel = (function (con) {

    function getSkills(callback) {
        queryBuilder.getSkills(callback)
    }


    function applyJob(callback, userId, jobId) {
        queryBuilder.getApplyJobQuery(callback, jobId, userId);
    }


    function getUserJobs(callback, userId) {
        queryBuilder.getUserJobsQuery(callback, userId)

    }

    function publishJob(callback, pubJob) {
        queryBuilder.addPubJobQuery(callback, pubJob)
    }

    function getJobId(pubJob) {
        queryBuilder.getJobIdQuery(callback, pubJob)
    }
    function getApplyedJobs(userId){
        var querySkills = queryBuilder.getSkills();
        var queryJobs = queryBuilder.getUserApplyedJobsQuery(userId);
        
        return [querySkills, queryJobs];

    }
    function getFilterJobs(skills,locations){
        var querySkills = queryBuilder.getSkills();
        var queryJobs = queryBuilder.getFilterJobsQuery(skills,locations);
        
        return [querySkills, queryJobs];

    }


   

    function getJobs(userId) {
        var querySkills = queryBuilder.getSkills();
        var queryJobs;
        if (userId == 'undefined') {
            queryJobs = queryBuilder.getJobsQuery();
        } else {
            queryJobs = queryBuilder.getUserJobsQuery(userId);
        }
        return [querySkills, queryJobs];

    }


    return {
        getJobs,
        applyJob,
        getUserJobs,
        publishJob,
        getSkills,
        getApplyedJobs,
        getFilterJobs
    }
})(con);


module.exports = jobModel;