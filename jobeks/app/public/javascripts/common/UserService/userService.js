(function () {
    'use strict';

    angular
        .module('jobsModule')
        .service('userService', Service);

    Service.$inject = ['$http'];
    function Service($http) {

        var service = {};
        

        service.getUserDetails = function () {
            var userId = localStorage['userId'];
            return $http.get(`api/user?userId=${userId}`)
        };
        service.updateDetails = function (userDetails) {
            var token = localStorage['token'];
            //need to pass some how userDetails
            return $http.put(`api/user?${token}`,userDetails)
        }
        return service;

    }
})();