app.controller('ExperienceController', ['$scope', 'Experience', function($scope, experience) {
  $scope.jobs = experience.jobs;
}]);