angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, $http) {
  $scope.link = {};
  $scope.text='http://www.'

  // var counter = 0;
  $scope.addLink = function(data){
    //validate url
    // console.log('DATA', data)
    var isValidUrl = function(url) {
      rValidUrl = /^(?!mailto:)(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[0-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))|localhost)(?::\d{2,5})?(?:\/[^\s]*)?$/i;

      return url.match(rValidUrl);
    }
    if (isValidUrl(data)){
      return $http.post('/api/links', {url: data})
      .then(function(response){
        $scope.link.data = response.data;
        // counter++;
      });
    } else {
      alert('Not a valid Url, try again')
    }


  };



});
