angular.module('app')
.controller('headerController', function($scope, $state) {
	console.log("Hello from headerController");
	$scope.menuItems = [
		{
			label: 'Blog',
			link: 'blog'
		},
		{
			label: 'Pictures',
			link: 'pictures'
		},
		{
			label: 'Programs',
			link: 'programs'
		}
	];

	$scope.navigateToLink = function(index) {
		$state.go($scope.menuItems[index].link);
	};
});
