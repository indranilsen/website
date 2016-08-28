angular.module('app')
.directive('indranilSenMainProjects', function() {
	return {
		templateUrl: 'partials/main-content/projects.html',
		controller: function($scope, $rootScope) {

			$scope.personalProjects = [
				{
					name: "ParkSafe",
					description: "This project was inspired by the prevalent issue of bike theft. ParkSafe allows users to either text-message their address or enter it on our Web App. The ParkSafe API then returns 5 bike racks closest to the user with different risk scores: a confidence percentage of the bike being stolen.Risk scores are based from crime data collected from publicly available records (City of Toronto, Toronto Police, etc.).",
					imageSrc: "parksafe.jpg",
					imageAlt: "A solution to the rampant issue of bike theft",
					tags: "AngularJS, PHP, Laravel, MongoDB"
				}
			];

		}
	};
});
