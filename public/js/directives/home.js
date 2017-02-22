angular.module('app')
    .directive('indranilSenMainHome', function() {
        return {
            templateUrl: 'partials/main-content/home.html',
            controller: function($scope, $rootScope, $interval) {
                $scope.greeting = "Hello!";

								var numLast1 = 0;
								var numLast2 = 5;
                function alternateGreeting() {
                    var greetings = [
                        "Hello",
                        "Bonjour",
                        "Namaste",
                        "Hola",
                        "Ciao",
                        "Hallo",
                        "Kon'nichiwa",
                        "Nǐ hǎo",
                        "Annyeong"
                    ];
                    var num = Math.floor(Math.random() * (greetings.length));
										numLast1 = numLast2;
										numLast2 = num;

										while (num == numLast1 || num == numLast2) {
											num = Math.floor(Math.random() * (greetings.length));
										}

                    $scope.greeting = greetings[num] + '!';
                }

                $interval(alternateGreeting, 3000);
            }
        };
    });
