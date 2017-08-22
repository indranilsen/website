angular.module('app')
    .directive('indranilSenMainVideos', function() {
        return {
    		templateUrl: 'partials/main-content/videos.html',
    		controller: function($scope, $rootScope) {
                angular.element(document.getElementsByClassName('video-cont')).ready(function(){
                    angular.element(document.getElementsByClassName('button-elem')).ready(function() {
                        var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
                        if(isSafari) {
                            var buttons = document.getElementsByClassName('button-elem');
                            for(var i = 0; i < buttons.length; i++) {
                                buttons[i].style.marginTop = "73px";
                                buttons[i].style.marginLeft = "135px";
                            }
                        }
                    });
                });
    		}
    	};
    });
