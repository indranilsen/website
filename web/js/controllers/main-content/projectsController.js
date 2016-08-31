angular.module('app')
    .controller('projectsController', function($scope, $stateParams, $state) {
        console.log("Hello from projectsController");
				var name = $stateParams.name;
        $scope.state = $state.current;
        $scope.params = $stateParams;
    });
