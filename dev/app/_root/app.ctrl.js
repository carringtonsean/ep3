angular.module('app', ['ui.router', 'app.modules'])



.config(['$urlRouterProvider', function($urlRouterProvider)
{
  $urlRouterProvider.when('', '/home/');
  $urlRouterProvider.when('/', '/home/');
  $urlRouterProvider.otherwise('/home/');
}])



.controller('AppCtrl', ['$scope', function($scope)
{
  // Stuff here is instantiated on page load.
}]);