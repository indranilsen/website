angular.module('app')
    .directive('indranilSenMainLogin', function() {
        return {
    		templateUrl: 'partials/main-content/login.html',
    		controller: function($scope, $rootScope) {
                $scope.member = {
    				email: '',
    				password: '',
    			};

                $scope.login = function(valid) {
    				if(valid) {
    					console.log("Email: ", $scope.member.email, "\nPassword: ", $scope.member.password);
    				}
    			};
    		}
    	};
    });
