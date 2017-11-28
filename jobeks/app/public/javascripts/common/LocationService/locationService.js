(function() {
    'use strict';

    angular
        .module('jobsModule')
        .service('locationService', Service);

    Service.$inject = ['$http'];
    function Service($http) {
        var service = {};
        
                service.getLocation = function () {
        
                    return $http.get('/api/locations').then((response) => {
                        service.locations = response.data;
                        return response;
        
                    },
                        function (response) {
                            //Second function handles error
                            console.log('error with req');
                        })
                    }
                    return service;
                }
})();