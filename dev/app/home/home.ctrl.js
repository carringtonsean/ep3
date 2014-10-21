angular.module('app.home', ['app.domain.user'])


.config(['$stateProvider', function($stateProvider)
{
   $stateProvider.state('home', {
      url: '/home/',
      views: {
         '@': {
            controller: 'HomeCtrl',
            templateUrl: '../../dev/app/home/home.html'
         }
      }
   });
}])


.controller('HomeCtrl', ['$scope', 'userDomain', function($scope, userDomain)
{
  $scope.user = userDomain.newDomain();
  $scope.user.getUser();
}]);
