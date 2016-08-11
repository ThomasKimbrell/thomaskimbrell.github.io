var app = angular.module('mySite', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
  .when('/', {
			controller: 'HomeController',
    	templateUrl: 'bootstrap/views/home.html'
  	})
  .when('/experience/', {
      controller: 'ExperienceController',
      templateUrl: 'bootstrap/views/experience.html'
  })
  .when('/education/', {
      controller: 'EducationController',
      templateUrl: 'bootstrap/views/education.html'
  })
  .otherwise({
      redirectTo: '/'
    });
});
