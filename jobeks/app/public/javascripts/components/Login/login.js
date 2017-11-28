(function () {
    'use strict';



    angular
        .module('jobsModule')
        .component('login', {
            templateUrl: 'javascripts/components/Login/login.html',
            controller: ControllerController,
            controllerAs: 'vm',
            bindings: {
                Binding: '=',
            },
        });

    ControllerController.$inject = ['$rootScope', '$scope', 'loginService'];
    function ControllerController($rootScope, $scope, loginService) {
        var vm = this;

        vm.logedIn = false;

        vm.login = function (user, pass) {
            // user = 'dvenditto0@sakura.ne.jp';
            // pass = 'E8oyKFW'
            $scope.errMsg = ""

            loginService.login(user, pass).then(
                function (res) {
                    if (res.data.success == true) {
                        vm.logedIn = true
                        localStorage.setItem('token', res.data.token);
                        localStorage.setItem('userId', res.data.user.id);
                        localStorage.setItem('userName', res.data.user.userName);

                        console.log(localStorage)
                        
                        $rootScope.$broadcast('showJobs', true)
                       
                        $rootScope.$emit('showLoginBtn', false)
                       
                        $rootScope.$emit("showRegister", false)
                        
                        // $rootScope.$emit('showApplyBtn', true)
                        
                        $rootScope.$broadcast('saveUser', res.data.user);


                        
                    } else {
                        $scope.errMsg = "user or pass are wrong"
                    }



                },
                function (err) {
                    $scope.errMsg = "there is a server error"
                    console.log(err)
                });

        }


    }
})();