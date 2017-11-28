const path = require('path');
var jobModel = require('../models/jobModel.js');

var authMiddleware = require('./authMiddleware.js');

var express = require('express');
var router = express.Router();







router.get('/jobs', function (req, res) {

  var userId = req.query.userId;
  var jobs = jobModel.getJobs(userId);
  Promise.all(jobs).then(resArr => {
    // console.log(resArr[0])
    // console.log(resArr[1])
    var dataJobs = createJobs(resArr[0], resArr[1]);
    res.json(dataJobs);

  }).catch(err => {
    console.log(err);
  });

  router.post('/jobs/addApplicant', authMiddleware, function (req, res) {
    var a = req.query;
    var callback = function (result) {
      res.json(result)
    }
    jobModel.applyJob(callback, req.body.userId, req.body.jobId)

  })

  router.get('/jobs/myApplyedJobs', function (req, res) {
    var userId = req.query.userId;
    // userId = parseInt(userId)
    var jobs = jobModel.getApplyedJobs(userId);
    Promise.all(jobs).then(resArr => {
      // console.log(resArr[0])
      // console.log(resArr[1])
      var dataJobs = createJobs(resArr[0], resArr[1]);
      res.json(dataJobs);

    }).catch(err => {
      console.log(err);
    });
  });

  router.get('/jobs/filterJobs', function (req, res) {
    var userId = req.query.userId;
    var dataObj = JSON.parse(req.query.data);
   
    // console.log(skillsData, locationsData);

    var jobs = jobModel.getFilterJobs(dataObj.locations,dataObj.skills);
    Promise.all(jobs).then(resArr => {
      console.log(resArr[0])
      console.log(resArr[1])
      var dataJobs = createJobs(resArr[0], resArr[1]);
      res.json(dataJobs);

    }).catch(err => {
      console.log(err);
    });
  });




  // authMiddleware
  router.get('/jobs/myJobs', function (req, res) {
    var userId = req.query.userId;
    // userId = parseInt(userId)
    var jobs = jobModel.getJobs(userId);
    Promise.all(jobs).then(resArr => {
      // console.log(resArr[0])
      // console.log(resArr[1])
      var dataJobs = createJobs(resArr[0], resArr[1]);
      res.json(dataJobs);

    }).catch(err => {
      console.log(err);
    });
  });


  router.post('/jobs/publishJob', function (req, res) {
    var callback = function (result) {
      res.json(result)
    }
    var pubJob = req.body
    var ans = jobModel.publishJob(callback, pubJob)
  })


  function isSkills(skills) {
    return skills[0]['skillName'] !== undefined;
  }



  function createJobs(skills, jobs) {
    var temp;
    if (!isSkills(skills)) {
      temp = skills;
      skills = jobs;
      jobs = temp;

    }
    for (let job of jobs) {
      job['skillNames'] = []
      addSkillNameToJob(job, skills);
    }
    return jobs;

  }

  function addSkillNameToJob(job, skills) {
    for (let skill of skills) {
      if (constain(job.skills, skill['_id'])) {
        job['skillNames'].push(skill['skillName'])
      }
    }

    function constain(jobSkills, skillId) {
      for (let jobSkillId of jobSkills) {
        if (jobSkillId === skillId) {
          return true;
        }
      }
    }
  }


});

module.exports = router;


