angular.module('app.domain.user', [])


.service('userDomain', [function()
{
  return {
    newDomain: function(){
      return {
        getUser: function()
        {
          alert('get user information');
        }
      };
    }
  };
}]);