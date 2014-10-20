angular.module('app.home', [])


.config(['$stateProvider', function($stateProvider)
{
   $stateProvider.state('home', {
      url: '/home/',
      views: {
         '@': {
            controller: 'HomeCtrl',
            templateUrl: '../dev/app/home/home.html'
         }
      }
   });
}])


.controller('HomeCtrl', ['$scope', function($scope)
{
   
}]);
