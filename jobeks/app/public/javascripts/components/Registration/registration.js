(function () {
    'use strict';



    angular
        .module('jobsModule')
        .component('registration', {
            templateUrl: 'javascripts/components/Registration/registration.html',
            controller: ControllerController,
            controllerAs: 'vm',
            bindings: {
                Binding: '=',
            },
        });

    ControllerController.$inject = ['$scope','regService','skillsService','locationService'];
    function ControllerController($scope,regService,skillsService,locationService) {
        // console.log($scope);
        var vm = this;


        $scope.locationmodel = []
        $scope.locationdata = locationService.locations
        $scope.locationsettings = {displayProp: 'locationName',styleActive: true ,checkBoxes: true, selectionLimit: 1, smartButtonMaxItems: 1};
        $scope.locationcustomTexts = {buttonDefaultText: 'Select Locations'};   
            
        $scope.skillsmodel = []
        $scope.skillsdata = skillsService.skills
        $scope.skillssettings = {displayProp: 'skillName',styleActive: true,checkBoxes: true,smartButtonMaxItems: 6};
        $scope.skillscustomTexts = {buttonDefaultText: 'Select your skills'};   
            
        
        

        vm.register = function (firstName, email, description, userName, pass) {
            
            regService.register(firstName, email, description, userName,  pass, $scope.locationmodel[0].locationName,$scope.locationmodel[0].lon,$scope.locationmodel[0].lat,$scope.skillsmodel ).then(
                (response) => {
                    if (response.data.insertedCount == 1) {
                        $scope.regMsg = "you successfully registreted!!!"
                        // console.log(response);
                        setTimeout(function() {
                            vm.reg=true;
                           $scope.$apply(); 
                        }, 3000);
                    }
            },
            function (err) {
                console.log(err)
            });
                
   
        
        }


    }
})();