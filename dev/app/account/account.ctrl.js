angular.module('app.account', [])


.config(['$stateProvider', function($stateProvider)
{
   $stateProvider.state('account', {
      url: '/account/',
      views: {
         '@': {
            controller: 'AccountCtrl',
            templateUrl: '../../dev/app/account/account.html'
         }
      }
   });
}])


.controller('AccountCtrl', ['$scope', function($scope)
{
   
}]);
