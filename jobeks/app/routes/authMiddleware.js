const path = require('path');
var jobModel = require('../models/jobModel.js');

var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken')
var secretConfig = require('../models/secretConfig.js');

var authUserToken = function (req, res, next) {
    // var token = req.body.token || requestAnimationFrame.headers['x-access-token']
    var token = req.query.token
    // var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoIjoibWFnaWMiLCJhZ2VudCI6eyJpZCI6MSwiZmlyc3ROYW1lIjoiRGV2bGFuZCIsImVtYWlsIjoiZHZlbmRpdHRvMEBzYWt1cmEubmUuanAiLCJkZXNjcmlwdGlvbiI6Ik51bmMgcmhvbmN1cyBkdWkgdmVsIHNlbS4iLCJsb2NhdGlvbklkIjo5OCwidXNlck5hbWUiOiJkYmxld21lbjAiLCJwYXNzIjoiRThveUtGVyJ9LCJleHAiOjE1MDUzNzg2NzIsImlhdCI6MTUwNDc3Mzg3OH0.f3sdUzYQkRCIY3BmmX8YOpamNdXBMYMZng5BIz-hkMI"

    if (token) {
        jwt.verify(token, secretConfig.secret, function (err, decoded) {
            if (err) {
                return res.json({ success: false, massage: 'faild to authenticate token ' })
            } else {
                res.decoded = decoded
                next()
            }
        })
    } else {
        return res.status(403).send({ success: false, message: 'no token provided' })
    }
}








module.exports = authUserToken;


