angular.module('docsSimpleDirective', [])
  .controller('getEpDocs', ['$scope', function($scope) {
    $scope.customer = {
      name: 'Naomi',
      address: '1600 Amphitheatre'
    };
  }])
  .directive('epDocs', function() {
    return {
      template: 'Name: {{customer.name}} Address: {{customer.address}}'
    };
  });