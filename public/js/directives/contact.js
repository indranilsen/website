angular.module('app')
.directive('indranilSenMainContact', function(messageHelper) {
	return {
		templateUrl: 'partials/main-content/contact.html',
		controller: function($scope, $rootScope, $mdToast) {
			$scope.user = {
				name: '',
				email: '',
				message: '',
			};

			var last = {
				bottom: true,
				top: false,
				left: false,
				right: true
		    };

			$scope.toastPosition = angular.extend({},last);

			$scope.getToastPosition = function() {
			sanitizePosition();

			return Object.keys($scope.toastPosition)
			  .filter(function(pos) { return $scope.toastPosition[pos]; })
			  .join(' ');
			};

			function sanitizePosition() {
				var current = $scope.toastPosition;

				if ( current.bottom && last.top ) current.top = false;
				if ( current.top && last.bottom ) current.bottom = false;
				if ( current.right && last.left ) current.left = false;
				if ( current.left && last.right ) current.right = false;

				last = angular.extend({},current);
			}

			function showToast(success) {
				var pinTo = $scope.getToastPosition();

				var toastMessage = 'Message sent!';

				if(!success) {
					toastMessage = 'Message failed to send!';
				}

				$mdToast.show(
			      $mdToast.simple()
			        .textContent(toastMessage)
			        .position(pinTo)
			        .hideDelay(3000)
			    );
			}

			$scope.send = function(valid) {
				if(valid) {
					messageHelper.sendMessage($scope.user, function(sent) {
						showToast(sent);
					});
				}
			};
		}
	};
});
