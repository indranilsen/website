angular.module('app')
    .controller('projectsController', function($scope, $stateParams, $state, projectsHelper) {
        console.log("Hello from projectsController");

        $scope.state = $state.current;
        $scope.params = $stateParams;

				$scope.project = projectsHelper.projects;
    });
