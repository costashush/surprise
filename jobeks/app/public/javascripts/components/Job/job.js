(function () {
    'use strict';


    angular
        .module('jobsModule')
        .component('job', {

            templateUrl: 'javascripts/components/Job/job.html',
            controller: ControllerController,
            controllerAs: 'vm',
            bindings: {
                id: '<',
                title: '<',
                description: '<',
                pubDate: '<',
                locationName: '<',
                skills: '<'


            },
        });

    ControllerController.$inject = ['JobsService', '$rootScope', '$scope'];
    function ControllerController(JobsService, $rootScope, $scope) {
        var vm = this;
        vm.skillsShow = false;
        $scope.showJobs = true;
        $scope.showApplyBtn = false;
        vm.enableApplyBtn = true;
       

        vm.toggleSkillsShow = function () {
            vm.skillsShow = !vm.skillsShow;
        }

        vm.applyJob = function () {
          
            JobsService.applyJob($scope.userId, vm.id).then(
                function (res) {
                    if (res === 1) {
                        $scope.showApplyBtn = false;
                        // vm.enableApplyBtn = false;
                    }
                },
                function (err) {
                    return err
                }
            )
        }



        $rootScope.$on('showApplyBtn', (e, data) => {
            $scope.showApplyBtn = data;

        });


        $rootScope.$on('saveUser', (e, user) => {
            $scope.userId = user.id;
            $scope.userName = user.name;
        });

        $scope.checkLogin = function(){
            return localStorage.getItem('userId')!==null
        }
        // $scope.checkLogin();


    }
})();