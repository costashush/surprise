(function() {
    'use strict';

    angular
        .module('jobsModule')
        .service('skillsService', Service);

    Service.$inject = ['$http'];
    function Service($http) {
        var service = {};
        
                service.getSkills = (function () {
        
                        return $http.get('/api/skills').then((response) => {
                           
                           service.skills = response.data
                            return response;
            
                        },
                            function (response) {
                                //Second function handles error
                                console.log('error with req');
                            })
                    })
                   
                    return service; 
                }
})();
