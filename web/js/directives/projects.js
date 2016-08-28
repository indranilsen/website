angular.module('app')
.directive('indranilSenMainProjects', function() {
	return {
		templateUrl: 'partials/main-content/projects.html',
		controller: function($scope, $rootScope) {

			$scope.personalProjects = [
				{
					name: "",
					description: "",
					imageSrc: "",
					imageAlt: "",
					tags: ""
				}
			];

		}
	};
});
