(function () {
    'use strict';

    // Usage:
    // 
    // Creates:
    // 

    angular
        .module('jobsModule')
        .component('publishJob', {
            templateUrl: 'javascripts/components/PublishJob/publishJob.html',
            controller: ControllerController,
            controllerAs: 'vm',
            bindings: {
                Binding: '=',
            },
        });

    ControllerController.$inject = ['$scope','JobsService','locationService','skillsService'];


   


    function ControllerController( $scope,JobsService,locationService,skillsService) {
        var vm = this;

        $scope.locationmodel = []
        $scope.locationdata = locationService.locations
        $scope.locationsettings = {displayProp: 'locationName',styleActive: true ,checkBoxes: true, selectionLimit: 1, smartButtonMaxItems: 1};
        $scope.locationcustomTexts = {buttonDefaultText: 'Select Locations'};   
            
        // console.log(locationService.locations)
        // console.log(skillsService.skills)
        $scope.skillsmodel = []
        $scope.skillsdata = skillsService.skills
        $scope.skillssettings = {displayProp: 'skillName',styleActive: true,checkBoxes: true,smartButtonMaxItems: 6};
        $scope.skillscustomTexts = {buttonDefaultText: 'Select your skills'};   


        var userId = localStorage.getItem('userId');
        // console.log(userId);
        // $scope.job = { title: 'angular developer', description: 'full time job with angular promise tech', pub_id: userId, skills: [2,4], locationName: 'Moldova' }
       
       
        
        
        vm.publishJob = function () {
            $scope.job.locationName=$scope.locationmodel[0].locationName;
            $scope.job.lat=$scope.locationmodel[0].lat;
            $scope.job.lon=$scope.locationmodel[0].lon;
            $scope.job.pub_id= localStorage.getItem('userId')
            
            $scope.job.skills= []

            for (let skill in $scope.skillsmodel){
                var skillId=$scope.skillsmodel[skill]['_id']
                $scope.job.skills.push(skillId)
                
            }
            var job = $scope.job
            JobsService.publishJob(job).then((res) => {
                if (res.data.insertedCount == 1) {
                    $scope.msg = "success"
                } else {
                    $scope.msg = "there were an error with job publish"
                }
            }).catch((err) => {
                $scope.updateMsg = err || "something is wrong"
            });
        }

    }
})();