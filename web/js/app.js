angular.module('app',['ui.router']);

angular.module('app')
.config(function($stateProvider, $urlRouterProvider) {

    	$urlRouterProvider.otherwise('/home');

    	$stateProvider
    			.state('home', {
            			url: '/home',
            			template: "<indranil-sen-main-home>"
        		})
        		.state('about', {
            			url: '/about',
            			template: "<indranil-sen-main-about>"
        		})
        		.state('contact', {
            			url: '/contact',
            			template: "<indranil-sen-main-contact>"
        		});
})
.run(function() {
	console.log("App started");
});
