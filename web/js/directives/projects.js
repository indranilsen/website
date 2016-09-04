angular.module('app')
.directive('indranilSenMainProjects', function(projectsHelper) {
	return {
		templateUrl: 'partials/main-content/projects.html',
		controller: function($scope, $rootScope) {

			$scope.personalProjects = projectsHelper.projectsData;

		}
	};
});
