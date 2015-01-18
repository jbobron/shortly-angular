angular.module('shortly.links', [])

.controller('LinksController',  function($scope, Links, $http) {
  $scope.data = {links:[]};
  // angular.extend($scope, Links);


  $scope.getLinks = function(){
    $http({
      method:'GET',
      url: '/api/links'
    }).then(function(data){
      // console.log(data)
      $scope.data.links = data.data;
    });

  };

  $scope.getLinks();

});

