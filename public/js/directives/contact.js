angular.module('app')
.directive('indranilSenMainContact', function(messageHelper) {
	return {
		templateUrl: 'partials/main-content/contact.html',
		controller: function($scope, $rootScope) {
			$scope.user = {
				name: '',
				email: '',
				message: '',
			};

			$scope.send = function(valid) {
				if(valid) {
					messageHelper.sendMessage($scope.user);
				}
			};
		}
	};
});
