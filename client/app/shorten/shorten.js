angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, $http) {
  $scope.link = {};
  var counter = 0;
  $scope.addLink = function(){
    $http({
      method: "POST",
      url:'/api/links'
    }).then(function(data){
      $scope.link[counter] = data.data;
      counter++;
    });
  };



});
