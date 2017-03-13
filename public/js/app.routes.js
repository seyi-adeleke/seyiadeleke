angular.module('routerRoutes',['ngRoute'])
    .config(function($routeProvider,$locationProvider){
        $routeProvider
            .when('/',{
                templateUrl :'/views/home.html',
                controller: 'homeController',
                controllerAs:'home'
            })
            .when('/work',{
                templateUrl : '/views/work.html',
                controller:'workController',
                controllerAs:'work'
            })
            .when('/contact',{
                templateUrl : '/views/contact.html',
                controller:'contactController',
                controllerAs:'contact'
            })
            .when('/thanks', {
                templateUrl : '/views/Thanks.html',
                controller:'thanksController',
                controllerAs:'thanks'
            })
            .otherwise({redirectTo:'/'});
        $locationProvider.html5Mode(true);
    });