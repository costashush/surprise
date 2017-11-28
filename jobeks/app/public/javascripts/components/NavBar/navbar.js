(function () {
    'use strict';

    angular
        .module('jobsModule')
        .component('navBar', {
            // template:'htmlTemplate',
            templateUrl: 'javascripts/components/NavBar/navbar.html',
            controller: ControllerController,
            controllerAs: 'vm',
            bindings: {
                Binding: '=',
            },
        });

    ControllerController.$inject = ['$rootScope', '$scope'];
    function ControllerController($rootScope, $scope) {
        var vm = this;

        $scope.showLogin = true
        $scope.showRegister = true
        $scope.showLogout = false

        
        if (localStorage['userName']) {
            $scope.userName = localStorage['userName'];
            $scope.showLogout = true;
            $scope.showLogin = false;
            $scope.showRegister = false;
        }
        
        
        $scope.checkLogin = function(){
            return localStorage.getItem('userId')!==null
        }
        
        vm.openJobs = function () {
            $rootScope.$broadcast('showJobs', true);
            
        }
        
        vm.closeJobs = function () {
            $rootScope.$broadcast('showJobs', false);
            
        }
        
        $rootScope.$on('showRegister', (event, data) => {
            $scope.showRegister = data;
        });
        
        $rootScope.$on('showLoginBtn', (event, data) => {
            $scope.showLogin = data
        })


        $rootScope.$on('saveUser', (event, user) => {
            $scope.userName = user.userName;
            $scope.showLogout = true;
            $scope.showLogin = false

        })


        $rootScope.$on('changeLogStatus', (event, data) => {

            $scope.showLogout = false;
            $scope.showLogin = true
            $scope.userName = localStorage['userName'];

        })

    }
})();