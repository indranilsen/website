angular.module('app')
.directive('indranilSenMainContact', function() {
	return {
		templateUrl: 'partials/main-content/contact.html',
		controller: function($scope, $rootScope) {
			$scope.user = {
				name: '',
				email: '',
				message: '',
			};
		}
	};
});
