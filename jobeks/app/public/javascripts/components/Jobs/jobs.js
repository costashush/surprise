(function () {
    'use strict';


    angular
        .module('jobsModule')
        .component('jobs', {
            templateUrl: 'javascripts/components/Jobs/jobs.html',
            controller: ControllerController,
            controllerAs: 'vm',
            bindings: {
            },
        });

    ControllerController.$inject = ['$scope', '$rootScope', 'JobsService', 'locationService', 'skillsService'];
    function ControllerController($scope, $rootScope, JobsService, locationService, skillsService) {
        var vm = this;
        vm.start = 0;
        $scope.limJobs = 0;
        $scope.prevOption = false;
        $scope.nextOption = false;
        $scope.showJobs = true;
        $scope.loadData = false;

      



        vm.prevJobs = function () {
            if (vm.start - 6 >= 0) {
                vm.start -= 6;
                $scope.prevOption = false
                $scope.nextOption = false

            } else {
                $scope.prevOption = true
            }
            vm.initFiveJobs();
        }

        vm.nextJobs = function () {
            if (vm.start + 6 < $scope.limJobs) {
                vm.start += 6;
                $scope.nextOption = false
                $scope.prevOption = false

            } else {
                $scope.nextOption = true
            }
            vm.initFiveJobs();

        }

        vm.GetFilterJobs = function () {
            
            var locations =$scope.locationmodel
            var skills =  $scope.skillsmodel
            var skillsData = []
            var  locationsData = []
            for (let skill of skills) {
              skillsData.push(skill['_id'])
            }
            for (let location of locations) {
              locationsData.push(location['locationName'])
            }


                        JobsService.getFilteredJobs(locationsData,skillsData).then(
                            (response) => {
                             
                                    $scope.jobs = response.data;
                                    $scope.limJobs = $scope.jobs.length
                                    vm.start = 0
                                    vm.initFiveJobs();
                                                         

                             
                            },
            
                        ).catch((err) => {
                            console
                        });
                    }
            
        vm.GetJobs = function () {

            JobsService.GetJobs().then(
                (response) => {
                    $scope.jobs = response.data;
                    $scope.limJobs = $scope.jobs.length
                    vm.initFiveJobs();

                },

            ).catch((err) => {
                console
            });
        }

        vm.initFiveJobs = function () {
            var stop = vm.start + 6
            var i = vm.start
            $scope.fiveJobs = []
            
            while (i < stop) {
                $scope.fiveJobs.push($scope.jobs[i++])
            }
            
        }

        locationService.getLocation().then(
            (response) => {
                $scope.locations = response.data;
                console.log(response.data);
            
                vm.checkData()
            })

        skillsService.getSkills().then(
            (response) => {
                $scope.skills = response.data;
                console.log(response.data);                
                vm.checkData()
            })

        $scope.locationmodel = []
        $scope.locationsettings = { displayProp: 'locationName', styleActive: true, checkBoxes: true, selectionLimit: 1, smartButtonMaxItems: 1 };
        $scope.locationcustomTexts = { buttonDefaultText: 'Select Locations' };

        $scope.skillsmodel = []        
        $scope.skillssettings = { displayProp: 'skillName', styleActive: true, checkBoxes: true, smartButtonMaxItems: 6 };
        $scope.skillscustomTexts = { buttonDefaultText: 'Select your skills' };
        
        
        vm.checkData=function(){

            if ($scope.skills && $scope.locations!=undefined) {
                $scope.locationdata = $scope.locations            
                $scope.skillsdata = $scope.skills
                $scope.loadData = true;
            }
            return
            
        }



        $rootScope.$on('showJobs', (e, data) => {
            $scope.showJobs = data;
        })





    }
})();