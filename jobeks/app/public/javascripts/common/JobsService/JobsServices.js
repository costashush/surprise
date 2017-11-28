
(function () {
    'use strict';

    angular
        .module('jobsModule')
        .factory('JobsService', Service);

    Service.$inject = ['$http'];
    function Service($http) {
        var service = {};

        service.GetJobs = function (userId) {
            var token = localStorage.getItem('token')
            if (userId === undefined) {
                return $http.get(`/api/jobs?userId=${userId}`)
            } else {
                return $http.get(`/api/jobs/myJobs?token=${token}&userId=${userId}`)

            }
        }
        service.applyJob = function (userId, jobId) {

            var data = { 'userId': userId, 'jobId': jobId };
            var token = localStorage.getItem('token')
            return $http.post(`/api/jobs/addApplicant?token=${token}`, data)


        }

        service.getApplyedJobs = function (userId) {
            var token = localStorage.getItem('token')
            var userId = localStorage.getItem('userId')

            return $http.get(`/api/jobs/myApplyedJobs?token=${token}&userId=${userId}`)
        }


        service.publishJob = function (job) {
            var token = localStorage.getItem('token')
            var userId = localStorage.getItem('userId')

            return $http.post(`api/jobs/publishJob?token=${token}&userId=${userId}`,job)
        }


        service.getFilteredJobs = function (locations , skills) {
            var token = localStorage.getItem('token')
            var userId = localStorage.getItem('userId')
            var data = { 'locations': locations, 'skills': skills };
            var dataStr = JSON.stringify(data)
            return $http.get(`api/jobs/filterJobs?token=${token}&userId=${userId}&data=${dataStr}`)
        }



        return service;


    }
})();