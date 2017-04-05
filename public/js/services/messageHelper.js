angular.module('app')
.service('messageHelper', function($http) {

    var endPoint = 'api/message';

    this.sendMessage = function(data) {
        console.log('SENDING');
        $http({
            method: 'POST',
            url: endPoint,
            data: data,
            headers: {'Content-Type': 'application/json'}
        }).success(function(msg) {
            console.log('SUCCESS', msg);
        }).error(function(err) {
            console.log('ERROR', err);
        });
    };
});
