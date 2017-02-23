angular.module('app')
.controller('headerController', function($scope, $state, $timeout) {
	console.log("Hello from headerController");
	$scope.hoverOpen = function(openMenu) {
		$timeout(function(){
			openMenu();
		}, 700);
	};

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
		},
		{
			label: 'Videos',
			link: 'videos'
		}
	];

	$scope.menuItemsClass = 'dropdown';

	$scope.navigateToLink = function(index) {
		$state.go($scope.menuItems[index].link);
	};
});
