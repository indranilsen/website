angular.module('app')
.controller('footerController', function($scope) {
	console.log("Hello from footerController");
	$scope.currentYear = (new Date().getFullYear());
});
