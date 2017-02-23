angular.module('app')
    .controller('projectsController', function($scope, $stateParams, $state, projectsHelper) {
        console.log("Hello from projectsController");

        $scope.state = $state.current;
        $scope.params = $stateParams;

				$scope.project = projectsHelper.projectsData;

        $scope.index = $scope.params.index;

  			$scope.nextProject = function() {
          if ($scope.index < ($scope.project.length-1)) {
            $scope.index++;
          } else {
            $scope.index = 0;
          }
  			};

        $scope.previousProject = function() {
          if ($scope.index > 0) {
            $scope.index--;
          } else {
            $scope.index = ($scope.project.length-1);
          }
  			};
    });
