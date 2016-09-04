angular.module('app')
.directive('indranilSenMainSkills', function(skillsHelper) {
	return {
		templateUrl: 'partials/main-content/skills.html',
		controller: function($scope) {

			$scope.skills = skillsHelper.skillsData;

			$scope.query = "";

			$scope.getTabLabel = function(label) {
				return label.replace(/([A-Z])/g, ' $1');
			};

			$scope.resetSearch = function() {
				$scope.query = "";
			};

		}
	};
});
