(function () {
    'use strict';


    angular
        .module('jobsModule')
        .component('logout', {
            // template:'htmlTemplate',
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


        localStorage.clear();
        $rootScope.$broadcast('changeLogStatus', '');



    }
})();