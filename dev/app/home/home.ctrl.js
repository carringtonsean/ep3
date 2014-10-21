angular.module('app.home', ['user.domain'])



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


   $scope.user.getUser()
      .then(function()
      {
         alert('User api call valid');
      })
      .catch(function()
      {
         alert('User api call invalid');
      });
}]);
