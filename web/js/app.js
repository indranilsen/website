angular.module('app',['ui.router', 'ngMaterial', 'ngMessages'])
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
            .state('projects', {
            			url: '/projects',
            			template: "<indranil-sen-main-projects>"
        		})
            .state('resume', {
            			url: '/resume',
            			template: "<indranil-sen-main-resume>"
        		})
            .state('skills', {
            			url: '/skils',
            			template: "<indranil-sen-main-skills>"
        		})
        		.state('contact', {
            			url: '/contact',
            			template: "<indranil-sen-main-contact>"
        		});
})
.run(function() {
	console.log("App started");
});
