angular.module('user.api', [])



.service('userApi', ['$http', function($http)
{
   this.get = function()
   {
      return $http.get('user');
   };


   this.update = function(options)
   {
      return $http.put('user', options);
   };


   this.create = function(options)
   {
      return $http.post('user', options);
   };
}]);