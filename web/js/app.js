angular.module('app', ['ui.router', 'ngMaterial', 'ngMessages'])
    .config(function($stateProvider, $urlRouterProvider, $mdThemingProvider) {

    /*================== ROUTING ==================*/
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

    /*================== MATERIAL THEMING ==================*/
        var customPrimary = {
            '50': '#80ddff',
            '100': '#66d6ff',
            '200': '#4dcfff',
            '300': '#33c8ff',
            '400': '#1ac1ff',
            '500': '#00BAFF',
            '600': '#00a7e6',
            '700': '#0095cc',
            '800': '#0082b3',
            '900': '#007099',
            'A100': '#99e3ff',
            'A200': '#b3eaff',
            'A400': '#ccf1ff',
            'A700': '#005d80'
        };

        var customAccent = {
           '50': '#004a66',
           '100': '#005d80',
           '200': '#007099',
           '300': '#0082b3',
           '400': '#0095cc',
           '500': '#00a7e6',
           '600': '#1ac1ff',
           '700': '#33c8ff',
           '800': '#4dcfff',
           '900': '#66d6ff',
           'A100': '#1ac1ff',
           'A200': '#00BAFF',
           'A400': '#00a7e6',
           'A700': '#80ddff'
       };

        $mdThemingProvider.definePalette('customPrimary', customPrimary);
        $mdThemingProvider.definePalette('customAccent', customAccent);

        $mdThemingProvider.theme('default')
            .primaryPalette('customPrimary')
            .accentPalette('customAccent');
    })
    .run(function() {
        console.log("App started");
    });
