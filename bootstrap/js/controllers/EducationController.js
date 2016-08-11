app.controller('EducationController', ['$scope', 'Education', function($scope, education) {
  $scope.schools = education.schools;
  
}]);