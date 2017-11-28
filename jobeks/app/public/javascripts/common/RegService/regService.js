(function() {
    'use strict';

    angular
        .module('jobsModule')
        .service('regService', Service);

    Service.$inject = ['$http'];

    function Service($http) {
        var service = {};
        
        service.register = function(firstName,email,description,userName,pass,locationName,lat,lon,skills) {

            var data = { firstName,email,description,userName,pass,locationName,lat,lon,skills};
            return $http.post('/api/user/register', data).then(
                function(res) {
                    console.log(res);
                    return res
                },
                function(err) {
                    console.log(err)
                }
            )


        }
        return service;

        ////////////////
        function exposedFn() {}
    }
})();