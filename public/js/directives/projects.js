angular.module('app')
.directive('indranilSenMainProjects', function(projectsHelper, $sce) {
	return {
		templateUrl: 'partials/main-content/projects.html',
		controller: function($scope, $rootScope, $sce) {

			$scope.personalProjects = projectsHelper.projectsData;

			$scope.trustSource = function(src) {
	            return $sce.trustAsHtml(src);
	        };

		}
	};
});
