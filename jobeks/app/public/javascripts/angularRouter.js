var app = angular.module("jobsModule", ["ngRoute",'rt.select2','angularjs-dropdown-multiselect']);

app.config(function ($routeProvider) {
    userId = localStorage.getItem('userId')
    $routeProvider
        .when("/login", {
            template: '<login></login>',

        }).when("/logout", {
            template: '<logout></logout>',

        }).when("/myProfile", {
            template: `<my-profile userId=${userId}></my-profile>`,

        }).when("/myJobs", {
            template: `<my-jobs userId=${userId}></my-jobs>`,

        }).when("/publishJob", {
            template: `<publish-job userId=${userId}></publish-job>`,

        }).when("/register", {
            template:'<registration></registration>',
      
    
            
        })
        

}

);

