angular.module('app')
    .controller('videosController', function($scope, $http, $sce) {
        console.log("Hello from videosController");
        var videoEndpoint = '/api/video';

        $scope.query = '';
        $scope.mainCard = true;
        $scope.descriptionCard = false;

        $scope.trustSource = function(src) {
            return $sce.trustAsResourceUrl(src);
        };

        $scope.loadVideo = function(index) {
            var autoPlayParam = '&autoplay=1';
            var source = $scope.videos[index].link.embed + autoPlayParam;
            var player = document.createElement('iframe');

            var parentId = 'video_' + String(index);
            var parentElement = document.getElementById(parentId);

            player.setAttribute('frameborder', '0');
            player.setAttribute('allowfullscreen', 'true');
            player.setAttribute('src', source);

            parentElement.innerHTML = '';
            parentElement.appendChild(player);
        };

        $scope.showDescription = function(context) {
            context.descriptionCard = true;
            context.mainCard = false;
        };

        $scope.hideDescription = function(context) {
            context.descriptionCard = false;
            context.mainCard = true;
        };

        $http.get(videoEndpoint)
            .then(function(res) {
                console.log(res.data);
                $scope.videos = res.data;
            })
            .catch(function(err) {
                console.log(err);
            });
    });
