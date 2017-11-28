(function () {
    'use strict';



    angular
        .module('jobsModule')
        .component('myProfile', {
            templateUrl: 'javascripts/components/MyProfile/myProfile.html',
            controller: ControllerController,
            controllerAs: 'vm',
            bindings: {
                userId: '<',
            },
        });

    ControllerController.$inject = ['$scope', '$rootScope', 'userService'];
    function ControllerController($scope, $rootScope, userService) {
        var vm = this;
        $scope.updateMsg = '';
        $rootScope.$broadcast('showJobs', false)
        userService.getUserDetails().then((res) => {
            $scope.user = res.data[0];
        }).catch((err) => {
            return err
        });


        vm.updateDetails = function () {
            var userData = $scope.user
            userData.userId = userId
            userService.updateDetails(userData).then((res) => {
                if (res.data.nModified == 1) {
                    $scope.updateMsg = "your profille udpated!!!"
                }
            }).catch((err) => {
                $scope.updateMsg = err || "something is wrong"
            });
        }

    }
})();