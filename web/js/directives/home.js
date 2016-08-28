angular.module('app')
    .directive('indranilSenMainHome', function() {
        return {
            templateUrl: 'partials/main-content/home.html',
            controller: function($scope, $rootScope) {
                $scope.greeting = "Hello!";
            }
        };
    });
