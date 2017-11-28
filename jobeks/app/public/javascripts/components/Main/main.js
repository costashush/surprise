(function() {
    'use strict';


    angular
        .module('jobsModule')
        .component('main', {
            templateUrl:'javascripts/components/Main/main.html',
            //templateUrl: 'templateUrl',
            controller: ControllerController,
            controllerAs: 'vm',
            bindings: {
                Binding: '=',
            },
        });

    ControllerController.$inject = ['$rootScope'];
    function ControllerController($rootScope) {
        var vm = this;

        // $rootScope.$on('showJobs', function(e,data){
        //     // $rootScope.showJobs = data
        //     $rootScope.$broadcast('showJobs',data)             

        // });
        

    }
})();