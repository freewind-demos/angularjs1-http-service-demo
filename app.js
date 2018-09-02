const app = angular.module('app', [])
app.controller('MyController', function ($scope, $http) {
    $scope.fetchData = function () {
        $http.get('/data.json')
            .then(function success(response) {
                $scope.data = response.data
            }, function error(response) {
                $scope.data = 'Failed: ' + JSON.stringify(response)
            })
    }
})