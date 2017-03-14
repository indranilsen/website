angular.module('app')
    .controller('videosController', function($scope, $http) {
        console.log("Hello from videosController");
        var videoEndpoint = 'http://localhost:3000/api/video';

        $scope.query = '';

        $http.get(videoEndpoint)
            .then(function(res) {
                console.log(res.data);
                $scope.videos = res.data;
            })
            .catch(function(err) {
                console.log(err);
            });
    });
