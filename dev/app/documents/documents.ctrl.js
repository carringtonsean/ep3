angular.module('app.documents', [])


.config(['$stateProvider', function($stateProvider)
{
   $stateProvider.state('documents', {
      url: '/documents/',
      views: {
         '@': {
            controller: 'DocumentsCtrl',
            templateUrl: '../../dev/app/documents/documents.html'
         }
      }
   });
}])


.controller('DocumentsCtrl', ['$scope', function($scope)
{
   
}]);
