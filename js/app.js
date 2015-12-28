var tlcApp = angular.module('tlcApp', [
        'ngRoute'
    ]
);

tlcApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html'
      })
      .when('/about', {
        templateUrl: 'views/about.html'
      })
      .when('/classrooms', {
        templateUrl: 'views/classrooms.html'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);