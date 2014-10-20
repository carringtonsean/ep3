angular.module('app.search', [])


.config(['$stateProvider', function($stateProvider)
{
   $stateProvider.state('search', {
      url: '/search/',
      views: {
         '@': {
            controller: 'SearchCtrl',
            templateUrl: '../dev/app/search/search.html'
         }
      }
   });
}])


.controller('SearchCtrl', ['$scope', function($scope)
{
   
}]);
