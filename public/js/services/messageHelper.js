angular.module('app')
.service('messageHelper', function($http) {

    var endPoint = 'api/message';

    this.sendMessage = function(data, callback) {
        console.log('SENDING');
        $http({
            method: 'POST',
            url: endPoint,
            data: data,
            headers: {'Content-Type': 'application/json'}
        }).success(function(msg) {
            callback(true);
        }).error(function(err) {
            callback(false);
        });
    };
});
