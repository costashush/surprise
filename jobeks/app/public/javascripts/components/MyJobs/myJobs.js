(function () {
    'use strict';



    angular
        .module('jobsModule')
        .component('myJobs', {
            templateUrl: 'javascripts/components/MyJobs/myJobs.html',
            controller: ControllerController,
            controllerAs: 'vm',
            bindings: {
                userId: '<',
            },
        });

    ControllerController.$inject = ['$scope', '$rootScope', '$routeParams', 'JobsService'];
    function ControllerController($scope, $rootScope, $routeParams, JobsService) {
        var vm = this;

        var userId = localStorage.getItem('userId');
        
        console.log(userId);


        JobsService.GetJobs(userId).then((res) => {
            $rootScope.$broadcast('showJobs', false);
            $scope.myJobs = res.data
        }).catch((err) => {
            $scope.updateMsg = err || "something is wrong"
        });

        JobsService.getApplyedJobs(userId).then((res) => {
            $rootScope.$broadcast('showJobs', false);
            $scope.myApplyedJobs = res.data
        }).catch((err) => {
            $scope.updateMsg = err || "something is wrong"
        });





    }
})();